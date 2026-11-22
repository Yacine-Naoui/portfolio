import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, socialMedia } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 640px;
  margin: 0 auto 60px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 30px;
  }

  p {
    font-size: var(--fz-lg);
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }
  }

  .email {
    display: inline-block;
    margin-top: 16px;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;

    .primary {
      ${({ theme }) => theme.mixins.bigButton};
    }
    .secondary {
      ${({ theme }) => theme.mixins.secondaryButton};
      padding: 14px 24px;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const linkedin = socialMedia.find(({ name }) => name === 'Linkedin');

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <header className="section-heading centered">
        <span className="eyebrow">mail --to yacine</span>
        <h2>Get in touch</h2>
      </header>

      <p>
        I&apos;m open to DevOps and ML engineering roles. If you&apos;re building something where
        secure, automated infrastructure matters, or just want to talk shop, my inbox is open.
      </p>

      <a className="email inline-link" href={`mailto:${email}`}>
        {email}
      </a>

      <div className="actions">
        <a className="primary" href={`mailto:${email}`}>
          Say hello
        </a>
        {linkedin && (
          <a className="secondary" href={linkedin.url} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </StyledContactSection>
  );
};

export default Contact;
