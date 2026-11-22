import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig, education, location, languages } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 960px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 56px;
    align-items: start;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  p {
    font-size: var(--fz-lg);
    line-height: 1.65;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }
  }

  .skills {
    margin-top: 32px;

    h3 {
      margin-bottom: 16px;
      font-size: var(--fz-md);
      font-weight: 600;
    }
  }

  .skill-group {
    margin-bottom: 18px;

    .label {
      display: block;
      margin-bottom: 8px;
      color: var(--text-dim);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '# ';
        color: var(--accent);
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      padding: 6px 11px;
      border: 1px solid var(--border);
      border-radius: 999px;
      background-color: var(--bg-elevated);
      color: var(--text);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      line-height: 1.4;
    }
  }
`;

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    margin-top: 48px;
  }

  .photo {
    ${({ theme }) => theme.mixins.card};
    position: relative;
    max-width: 320px;
    padding: 8px;
    overflow: hidden;

    @media (max-width: 768px) {
      margin: 0 auto;
      width: 70%;
    }

    .img {
      display: block;
      border-radius: var(--radius-sm);
    }
  }

  .card {
    ${({ theme }) => theme.mixins.card};
    padding: 20px 22px;
    max-width: 320px;

    @media (max-width: 768px) {
      max-width: none;
    }

    .label {
      display: block;
      margin-bottom: 8px;
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    h3 {
      margin: 0 0 6px;
      font-size: var(--fz-md);
      line-height: 1.35;

      a {
        ${({ theme }) => theme.mixins.inlineLink};
        color: var(--text);
        text-decoration: none;
      }
    }

    p {
      margin: 0;
      font-size: var(--fz-sm);
      line-height: 1.5;
    }

    .entry + .entry {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
    }

    .range {
      display: inline-block;
      margin-top: 8px;
      color: var(--text);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }

    .fact + .label {
      margin-top: 14px;
    }
  }
`;

const skillGroups = [
  {
    label: 'ml & rl',
    items: [
      'PyTorch',
      'Hugging Face Transformers',
      'Deep Q-Networks',
      'GraphSAGE',
      'VAEs / autoencoders',
      'scikit-learn',
      'XGBoost',
    ],
  },
  {
    label: 'llms & agents',
    items: [
      'LLM evals & benchmarks',
      'RAG',
      'Tool calling',
      'Model routing',
      'LangChain',
      'LangGraph',
      'MCP',
      'OpenAI SDK',
      'Claude',
      'Qwen3 / Llama',
      'vLLM',
    ],
  },
  {
    label: 'security',
    items: [
      'Wazuh SIEM',
      'MITRE ATT&CK',
      'Cyber Kill Chain',
      'MITRE Caldera',
      'Malware analysis',
      'TheHive',
    ],
  },
  {
    label: 'infra & data',
    items: [
      'Linux',
      'Bash',
      'Git',
      'Docker',
      'AWS',
      'Terraform',
      'Ansible',
      'CI/CD (GitHub Actions, Jenkins)',
      'PostgreSQL',
      'TimescaleDB',
      'Elasticsearch',
      'Redis',
      'pgvector',
    ],
  },
  {
    label: 'languages',
    items: ['Python', 'TypeScript', 'Java', 'SQL', 'Bash', 'C'],
  },
];

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <header className="section-heading">
        <span className="eyebrow">cat about.md</span>
        <h2>About</h2>
      </header>

      <div className="inner">
        <StyledText>
          <p>
            I&apos;m Yacine, a backend and ML engineer in Algiers with a security bent. At SARL
            CloudWind I lead backend and ML engineering across four production platforms in
            security, insurance and industry: LLM agents with RAG and provider-agnostic model
            routing, a fraud-scoring pipeline for a national insurer, and the regression evals,
            drift monitoring and cost tracking that keep all of it honest in production.
          </p>

          <p>
            My MSc thesis, CAVIX, was a research internship with King Saud University: a detection
            stack and a Deep Q-Network response agent that catch multi-stage APT attacks early in
            the Cyber Kill Chain and respond automatically. Before that I analysed malware at
            CERIST. I graduated from ESI Algiers with a BEng and MSc in Computer Science in 2026.
          </p>

          <p>
            I care about infrastructure that is secure by default and automated end to end, and
            about AI systems that stay trustworthy when their inputs are adversarial.
          </p>

          <div className="skills">
            <h3>Tools I work with</h3>
            {skillGroups.map(({ label, items }) => (
              <div className="skill-group" key={label}>
                <span className="label">{label}</span>
                <ul>
                  {items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </StyledText>

        <StyledAside>
          <div className="photo">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Yacine Naoui"
            />
          </div>

          <div className="card">
            <span className="label">Education</span>
            {education.map(({ school, url, degree, field, location: where, range }) => (
              <div className="entry" key={school}>
                <h3>{url ? <a href={url}>{school}</a> : school}</h3>
                <p>{field ? `${degree}, ${field}` : degree}</p>
                <p>{where}</p>
                <span className="range">{range}</span>
              </div>
            ))}
          </div>

          <div className="card">
            <span className="label">Based in</span>
            <p className="fact">{location}</p>
            <span className="label">Languages</span>
            <p className="fact">{languages}</p>
          </div>
        </StyledAside>
      </div>
    </StyledAboutSection>
  );
};

export default About;
