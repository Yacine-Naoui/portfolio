import { css } from 'styled-components';

/*
  Design tokens. The whole site is coloured from here. Every value below was
  measured from the reference design (deep navy base, an indigo/blue glow at
  the top-left, a purple glow at the bottom-right, and ONE periwinkle accent
  used for filled buttons and highlighted words).
  Keep src/config.js `colors` in sync (used for the web-app manifest).
*/
const variables = css`
  :root {
    /* Surfaces (base navy from the reference; cards a step lighter) */
    --bg: #161b30;
    --bg-elevated: #1b2039;
    --bg-raised: #222848;
    --border: #2b2e57;
    --border-strong: #3a4273;
    --shadow: rgba(8, 10, 24, 0.6);

    /* Ambient glows painted behind the page (see GlobalStyle body::before) */
    --glow-indigo: #303e79;
    --glow-blue: #243f62;
    --glow-purple: #3e2a68;
    --glow-corner: #2b2e57;

    /* Text */
    --text: #ffffff;
    --text-muted: #9b9ea9;
    --text-dim: #727685;

    /* Accent (periwinkle: button fill #6c8cbf, highlighted word #7899ce) */
    --accent: #6c8cbf;
    --accent-hover: #7899ce;
    --accent-contrast: #ffffff;
    --accent-tint: rgba(108, 140, 191, 0.14);
    --accent-glow: rgba(108, 140, 191, 0.4);

    /* Type */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui,
      sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 24px;
    --fz-heading: 36px;

    /* Layout */
    --max-width: 1100px;
    --border-radius: 8px;
    --radius-sm: 6px;
    --radius-lg: 14px;
    --nav-height: 80px;
    --nav-scroll-height: 64px;

    /* Motion */
    --easing: cubic-bezier(0.2, 0.8, 0.2, 1);
    --transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);

    --hamburger-width: 28px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
