import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import TransitionStyles from './TransitionStyles';
import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--accent);
    color: var(--accent-contrast);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--border-strong) var(--bg);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--border-strong);
    border: 3px solid var(--bg);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg);
    background-image: radial-gradient(ellipse 70% 40% at 50% -10%, var(--accent-tint), transparent);
    background-repeat: no-repeat;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.65;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-width);
    min-height: 100vh;
    padding: 160px 48px 80px;

    @media (max-width: 768px) {
      padding: 140px 32px 60px;
    }
    @media (max-width: 480px) {
      padding: 120px 20px 40px;
    }

    &.fillHeight {
      padding: 0 48px;

      @media (max-width: 768px) {
        padding: 0 32px;
      }
      @media (max-width: 480px) {
        padding: 0 20px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 96px 0;
    max-width: 960px;

    @media (max-width: 768px) {
      padding: 72px 0;
    }

    @media (max-width: 480px) {
      padding: 56px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 12px 0;
    font-weight: 700;
    color: var(--text);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 7vw, 72px);
    letter-spacing: -0.03em;
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(32px, 6vw, 52px);
  }

  /*
    Section heading: a mono "command" eyebrow, a bold title and a short accent
    rule. Markup:
      <header class="section-heading">
        <span class="eyebrow">cat about.md</span>
        <h2>About</h2>
      </header>
  */
  .section-heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 48px;

    .eyebrow {
      margin-bottom: 10px;
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      letter-spacing: 0.02em;

      &:before {
        content: '$ ';
        color: var(--text-dim);
      }
    }

    h2 {
      margin: 0;
      font-size: clamp(28px, 4.5vw, 40px);
    }

    &:after {
      content: '';
      display: block;
      width: 56px;
      height: 3px;
      margin-top: 18px;
      border-radius: 3px;
      background-color: var(--accent);
    }

    &.centered {
      align-items: center;
      text-align: center;
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--accent);
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    font-family: inherit;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 16px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: var(--bg-raised);
      color: var(--text);
      font-size: var(--fz-sm);
      border-radius: var(--radius-sm);
      padding: 0.2em 0.45em;
    }
  }

  ul {
    &.fancy-list {
      ${({ theme }) => theme.mixins.fancyList};
    }
  }

  blockquote {
    border-left: 2px solid var(--accent);
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: var(--fz-xl);
    }
  }

  hr {
    background-color: var(--border);
    height: 1px;
    border: 0;
    margin: 1rem 0;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.primaryButton};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:hover,
    &:focus {
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      border-radius: 0 0 var(--radius-sm) 0;
    }
  }

  .overline {
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;
  }

  .subtitle {
    color: var(--accent);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${TransitionStyles};

  ${PrismStyles};
`;

export default GlobalStyle;
