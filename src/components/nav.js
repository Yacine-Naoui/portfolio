import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { navLinks, socialMedia, email, resumeUrl } from '@config';
import { useScrollDirection } from '@hooks';
import { Menu } from '@components';
import { Icon, IconLogo } from '@components/icons';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0 48px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(22, 27, 48, 0.8);
  border-bottom: 1px solid transparent;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(12px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 24px;
  }

  ${props =>
    !props.scrolledToTop &&
    css`
      border-bottom-color: var(--border);
    `};

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
      `};

    ${props =>
    props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--text);
  font-family: var(--font-mono);
  z-index: 12;

  .logo {
    display: flex;
    align-items: center;

    a {
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      gap: 10px;
      color: var(--text);

      &:hover,
      &:focus-visible {
        color: var(--accent);
      }
    }

    svg {
      width: 30px;
      height: 30px;
      color: var(--accent);
    }

    .wordmark {
      font-size: var(--fz-sm);
      font-weight: 500;

      @media (max-width: 400px) {
        display: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /* Below this the mobile menu takes over (tablets in portrait included) */
  @media (max-width: 1023px) {
    display: none;
  }

  ol {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 0;
    margin: 0;
    list-style: none;

    li a {
      display: inline-block;
      padding: 8px 12px;
      border-radius: var(--radius-sm);
      color: var(--text-muted);
      font-size: var(--fz-sm);

      &:hover,
      &:focus-visible {
        color: var(--text);
        background-color: var(--bg-raised);
      }
    }
  }

  .divider {
    width: 1px;
    height: 20px;
    background-color: var(--border);
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 2px;

    a {
      display: inline-flex;
      flex-shrink: 0;
      padding: 8px;
      border-radius: var(--radius-sm);
      color: var(--text-muted);

      &:hover,
      &:focus-visible {
        color: var(--accent);
        background-color: var(--bg-raised);
      }

      svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
  }
`;

const Nav = () => {
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolledToTop(window.pageYOffset < 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav aria-label="Primary">
        <div className="logo">
          <Link to="/" aria-label="Home">
            <IconLogo />
            <span className="wordmark">~/yacine</span>
          </Link>
        </div>

        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
          </ol>

          <span className="divider" aria-hidden="true" />

          <div className="socials">
            {socialMedia &&
              socialMedia.map(({ url, name }, i) => (
                <a key={i} href={url} aria-label={name} target="_blank" rel="noreferrer">
                  <Icon name={name} />
                </a>
              ))}
            <a href={`mailto:${email}`} aria-label="Email">
              <Icon name="Mail" />
            </a>
          </div>

          {resumeUrl && (
            <a className="resume-button" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          )}
        </StyledLinks>

        <Menu />
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
