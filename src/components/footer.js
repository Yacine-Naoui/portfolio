import React from 'react';
import styled from 'styled-components';
import { Icon, IconLogo } from '@components/icons';
import { socialMedia, email } from '@config';

const StyledFooter = styled.footer`
  border-top: 1px solid var(--border);
  padding: 40px 48px;

  @media (max-width: 768px) {
    padding: 32px 32px;
  }
  @media (max-width: 480px) {
    padding: 28px 20px;
  }

  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px 24px;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);

    svg {
      width: 22px;
      height: 22px;
      color: var(--accent);
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style: none;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: var(--radius-sm);
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:hover,
      &:focus-visible {
        color: var(--accent);
        background-color: var(--bg-raised);
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  .credit {
    width: 100%;
    margin-top: 8px;
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.6;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      color: var(--text-muted);
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="inner">
      <span className="brand">
        <IconLogo />
        Yacine Naoui
      </span>

      <ul className="links" aria-label="Social links">
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon name={name} />
                {name}
              </a>
            </li>
          ))}
        <li>
          <a href={`mailto:${email}`}>
            <Icon name="Mail" />
            Email
          </a>
        </li>
      </ul>

      <div className="credit">
        Designed &amp; built by Yacine Naoui &middot; Originally based on{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
          Brittany Chiang&apos;s v4
        </a>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
