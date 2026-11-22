import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section``;

const StyledTimeline = styled.ol`
  position: relative;
  max-width: 800px;
  margin: 0 0 0 8px;
  padding: 0;
  list-style: none;
  border-left: 1px solid var(--border);

  @media (max-width: 480px) {
    margin-left: 4px;
  }
`;

const StyledEntry = styled.li`
  position: relative;
  padding: 0 0 48px 32px;

  @media (max-width: 480px) {
    padding-left: 24px;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  .marker {
    position: absolute;
    top: 6px;
    left: -7px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: var(--bg);
    border: 2px solid var(--accent);
    box-shadow: 0 0 0 4px var(--accent-tint);
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    margin-bottom: 8px;
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    .range {
      color: var(--accent);
    }
  }

  h3 {
    margin: 0 0 14px;
    font-size: var(--fz-xl);
    line-height: 1.3;

    .company {
      color: var(--text-muted);
      font-weight: 500;

      a {
        ${({ theme }) => theme.mixins.inlineLink};
        color: var(--text);
      }
    }
  }

  .body ul {
    ${({ theme }) => theme.mixins.fancyList};
    color: var(--text-muted);

    li {
      margin-bottom: 8px;
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledJobsSection id="experience" ref={revealContainer}>
      <header className="section-heading">
        <span className="eyebrow">ls experience/</span>
        <h2>Experience</h2>
      </header>

      <StyledTimeline>
        {jobsData &&
          jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range, location } = frontmatter;

            return (
              <StyledEntry key={i}>
                <span className="marker" aria-hidden="true" />

                <p className="meta">
                  {range && <span className="range">{range}</span>}
                  {location && <span className="location">{location}</span>}
                </p>

                <h3>
                  <span>{title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    {url ? <a href={url}>{company}</a> : company}
                  </span>
                </h3>

                <div className="body" dangerouslySetInnerHTML={{ __html: html }} />
              </StyledEntry>
            );
          })}
      </StyledTimeline>
    </StyledJobsSection>
  );
};

export default Jobs;
