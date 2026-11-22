import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { email, socialMedia } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const COMMAND = 'whoami';
const PROMPT = 'yacine@portfolio:~$';
const TYPING_START_DELAY = 500;
const TYPING_SPEED = 110;

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: var(--nav-height) 0 40px;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    min-height: auto;
    padding-top: calc(var(--nav-height) + 40px);
  }

  .meta {
    margin: 24px 0 0 4px;
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    &:before {
      content: '# ';
      color: var(--accent);
    }
  }
`;

const StyledTerminal = styled.div`
  width: 100%;
  max-width: 820px;
  background-color: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: 0 40px 80px -40px var(--shadow), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  overflow: hidden;
  font-family: var(--font-mono);

  .titlebar {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    background-color: var(--bg-raised);
    border-bottom: 1px solid var(--border);
    color: var(--text-dim);
    font-size: var(--fz-xs);

    .dots,
    .spacer {
      display: flex;
      gap: 7px;
      width: 47px;
      flex-shrink: 0;

      span {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: var(--border-strong);
      }
    }

    .title {
      flex: 1;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .body {
    padding: 32px;

    @media (max-width: 480px) {
      padding: 24px 18px;
    }
  }

  .line {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0 10px;
    margin: 0;
    color: var(--text);
    font-size: var(--fz-md);
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
    }

    &.next {
      margin-top: 28px;
      opacity: 0;
      transition: opacity 0.3s var(--easing);

      &.visible {
        opacity: 1;
      }
    }
  }

  .prompt {
    color: var(--accent);
    font-weight: 600;
  }

  .cursor {
    display: inline-block;
    width: 0.6em;
    height: 1.1em;
    margin-left: 2px;
    background-color: var(--accent);
    vertical-align: text-bottom;
    animation: blink 1s steps(2, start) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }

  .output {
    margin-top: 20px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.45s var(--easing), transform 0.45s var(--easing);

    &.visible {
      opacity: 1;
      transform: none;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  h1 {
    margin: 0 0 14px;
    font-family: var(--font-sans);
    font-size: clamp(36px, 6vw, 64px);
    letter-spacing: -0.03em;
    line-height: 1.05;
  }

  .tagline {
    max-width: 34ch;
    margin: 0;
    font-family: var(--font-sans);
    font-size: clamp(var(--fz-lg), 2.4vw, 24px);
    font-weight: 400;
    line-height: 1.4;
    color: var(--text-muted);

    strong {
      color: var(--text);
      font-weight: 600;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;

    .primary {
      ${({ theme }) => theme.mixins.primaryButton};
    }
    .secondary {
      ${({ theme }) => theme.mixins.secondaryButton};
    }
  }
`;

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [typed, setTyped] = useState('');
  // 0: typing the command, 1: output printed, 2: fresh prompt waiting
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(COMMAND);
      setStage(2);
      return undefined;
    }

    const timers = [];
    let interval;

    timers.push(
      setTimeout(() => {
        let i = 0;
        interval = setInterval(() => {
          i += 1;
          setTyped(COMMAND.slice(0, i));
          if (i >= COMMAND.length) {
            clearInterval(interval);
            timers.push(setTimeout(() => setStage(1), 300));
            timers.push(setTimeout(() => setStage(2), 900));
          }
        }, TYPING_SPEED);
      }, TYPING_START_DELAY),
    );

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  const github = socialMedia.find(({ name }) => name === 'GitHub');

  return (
    <StyledHeroSection>
      <Helmet>
        <noscript>{`<style>.hero-output{opacity:1 !important;transform:none !important}</style>`}</noscript>
      </Helmet>

      <StyledTerminal>
        <div className="titlebar" aria-hidden="true">
          <span className="dots">
            <span />
            <span />
            <span />
          </span>
          <span className="title">yacine@portfolio: ~</span>
          <span className="spacer" />
        </div>

        <div className="body">
          <p className="line" aria-hidden="true">
            <span className="prompt">{PROMPT}</span>
            <span className="command">
              {typed}
              {stage === 0 && <span className="cursor" />}
            </span>
          </p>

          <div className={`hero-output output${stage >= 1 ? ' visible' : ''}`}>
            <h1>Yacine Naoui</h1>
            <p className="tagline">
              Backend &amp; ML engineer building <strong>secure, automated infrastructure</strong>.
            </p>

            <div className="actions">
              <Link className="primary" to="/#projects">
                View projects
              </Link>
              {github && (
                <a className="secondary" href={github.url} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              <a className="secondary" href={`mailto:${email}`}>
                Contact
              </a>
            </div>
          </div>

          <p className={`line next${stage >= 2 ? ' visible' : ''}`} aria-hidden="true">
            <span className="prompt">{PROMPT}</span>
            <span className="cursor" />
          </p>
        </div>
      </StyledTerminal>

      <p className="meta">Algiers, Algeria · Open to DevOps / ML engineering roles</p>
    </StyledHeroSection>
  );
};

export default Hero;
