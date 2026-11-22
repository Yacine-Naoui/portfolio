import { css } from 'styled-components';

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition);

  &:after {
    display: none !important;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const primaryButton = css`
  ${buttonBase};
  background-color: var(--accent);
  border-color: var(--accent);
  color: var(--accent-contrast);

  &:hover,
  &:focus-visible {
    background-color: var(--accent-hover);
    border-color: var(--accent-hover);
    color: var(--accent-contrast);
    box-shadow: 0 0 0 4px var(--accent-tint);
  }
`;

const secondaryButton = css`
  ${buttonBase};
  background-color: transparent;
  border-color: var(--border-strong);
  color: var(--text);

  &:hover,
  &:focus-visible {
    border-color: var(--accent);
    color: var(--accent);
    background-color: var(--accent-tint);
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline;
    position: relative;
    color: var(--accent);
    text-decoration: underline;
    text-decoration-color: var(--accent-glow);
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent-hover);
      text-decoration-color: var(--accent-hover);
      text-decoration-thickness: 2px;
    }
  `,

  button: primaryButton,
  primaryButton,
  secondaryButton,
  smallButton: css`
    ${secondaryButton};
    padding: 9px 14px;
    font-size: var(--fz-xs);
  `,
  bigButton: css`
    ${primaryButton};
    padding: 14px 24px;
    font-size: var(--fz-sm);
  `,

  card: css`
    background-color: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    transition: var(--transition);
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--shadow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-md);

    li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 10px;

      &:before {
        content: '>';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-family: var(--font-mono);
        font-weight: 600;
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  visuallyHidden: css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `,
};

export default mixins;
