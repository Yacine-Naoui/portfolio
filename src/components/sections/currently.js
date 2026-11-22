import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, currently, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledCurrentlySection = styled.section`
  max-width: 960px;

  .grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  }

  .item {
    ${({ theme }) => theme.mixins.card};
    display: flex;
    flex-direction: column;
    padding: 24px;

    &:hover {
      border-color: var(--border-strong);
    }

    h3 {
      margin: 0 0 12px;
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;

      &:after {
        content: ':';
        color: var(--text-dim);
      }
    }

    p {
      margin: 0;
      color: var(--text-muted);
      font-size: var(--fz-md);
      line-height: 1.6;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
`;

const Currently = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledCurrentlySection id="currently" ref={revealContainer}>
      <header className="section-heading">
        <span className="eyebrow">cat currently.md</span>
        <h2>Currently</h2>
      </header>

      <ul className="grid">
        <li className="item">
          <h3>building</h3>
          <p>{currently.building}</p>
        </li>
        <li className="item">
          <h3>learning</h3>
          <p>{currently.learning}</p>
        </li>
        <li className="item">
          <h3>open_to</h3>
          <p>
            {currently.openTo} <a href={`mailto:${email}`}>Let&apos;s talk.</a>
          </p>
        </li>
      </ul>
    </StyledCurrentlySection>
  );
};

export default Currently;
