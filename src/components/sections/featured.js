import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledCaseStudies = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledCaseStudy = styled.li`
  ${({ theme }) => theme.mixins.card};
  padding: 36px;

  @media (max-width: 768px) {
    padding: 28px 24px;
  }
  @media (max-width: 480px) {
    padding: 24px 18px;
  }

  &:hover,
  &:focus-within {
    border-color: var(--border-strong);
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;
  }

  .overline {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
    margin: 0 0 10px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    .role {
      color: var(--text-dim);
    }
  }

  .title {
    margin: 0;
    font-size: clamp(22px, 3.2vw, 28px);
    line-height: 1.25;

    a {
      color: inherit;

      &:hover,
      &:focus-visible {
        color: var(--accent);
      }
    }
  }

  .links {
    display: flex;
    flex-shrink: 0;
    gap: 4px;
    margin: -6px -8px 0 0;

    a {
      display: inline-flex;
      padding: 8px;
      border-radius: var(--radius-sm);
      color: var(--text-muted);

      &:hover,
      &:focus-visible {
        color: var(--accent);
        background-color: var(--bg-raised);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .status {
    display: inline-block;
    margin-bottom: 18px;
    padding: 4px 10px;
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  .cover {
    margin: 0 0 24px;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    overflow: hidden;
  }

  .summary {
    margin-bottom: 28px;
    color: var(--text-muted);
    font-size: var(--fz-lg);
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 40px;
    padding-top: 28px;
    border-top: 1px solid var(--border);

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  .block {
    h4 {
      margin: 0 0 10px;
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      &:before {
        content: '## ';
        color: var(--text-dim);
      }
    }

    p {
      margin: 0;
      color: var(--text-muted);
      font-size: var(--fz-md);
      line-height: 1.6;
    }

    ul {
      ${({ theme }) => theme.mixins.fancyList};
      color: var(--text-muted);

      li {
        margin-bottom: 6px;
        font-size: var(--fz-md);
      }
    }

    ul.chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      li {
        margin: 0;
        padding: 5px 10px;
        border: 1px solid var(--border);
        border-radius: 999px;
        background-color: var(--bg-raised);
        color: var(--text);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);

        &:before {
          display: none;
        }
      }
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              role
              status
              cover {
                childImageSharp {
                  gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
              problem
              architecture
              results
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <header className="section-heading" ref={revealTitle}>
        <span className="eyebrow">ls projects/</span>
        <h2>Projects</h2>
      </header>

      <StyledCaseStudies>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const {
              external,
              title,
              role,
              status,
              tech,
              github,
              cover,
              problem,
              architecture,
              results,
            } = frontmatter;
            const image = cover ? getImage(cover) : null;
            const link = external || github;

            return (
              <StyledCaseStudy key={i} ref={el => (revealProjects.current[i] = el)}>
                <article>
                  <div className="head">
                    <div>
                      <p className="overline">
                        <span>Case study</span>
                        {role && <span className="role">{role}</span>}
                      </p>
                      <h3 className="title">{link ? <a href={link}>{title}</a> : title}</h3>
                    </div>

                    {(github || external) && (
                      <div className="links">
                        {github && (
                          <a href={github} aria-label="GitHub repository">
                            <Icon name="GitHub" />
                          </a>
                        )}
                        {external && (
                          <a href={external} aria-label="External link">
                            <Icon name="External" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {status && <span className="status">{status}</span>}

                  {image && (
                    <div className="cover">
                      <GatsbyImage image={image} alt={title} className="img" />
                    </div>
                  )}

                  <div className="summary" dangerouslySetInnerHTML={{ __html: html }} />

                  <div className="grid">
                    {problem && (
                      <div className="block">
                        <h4>Problem</h4>
                        <p>{problem}</p>
                      </div>
                    )}

                    {tech && tech.length > 0 && (
                      <div className="block">
                        <h4>Stack</h4>
                        <ul className="chips">
                          {tech.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {architecture && architecture.length > 0 && (
                      <div className="block">
                        <h4>Architecture</h4>
                        <ul>
                          {architecture.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {results && results.length > 0 && (
                      <div className="block">
                        <h4>Results</h4>
                        <ul>
                          {results.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </StyledCaseStudy>
            );
          })}
      </StyledCaseStudies>
    </section>
  );
};

export default Featured;
