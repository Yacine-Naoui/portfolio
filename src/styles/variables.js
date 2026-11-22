import { css } from 'styled-components';

/*
  Design tokens. The whole site is coloured from here:
  - surfaces are near-black / charcoal
  - there is exactly ONE accent colour. To switch from amber to electric blue,
    change the four --accent* values below (e.g. #3b82f6 / #60a5fa / rgba(59,130,246,…)).
  Keep src/config.js `colors` in sync (used for the web-app manifest).
*/
const variables = css`
  :root {
    /* Surfaces */
    --bg: #0b0b0d;
    --bg-elevated: #121316;
    --bg-raised: #1a1b1f;
    --border: #26282e;
    --border-strong: #34373f;
    --shadow: rgba(0, 0, 0, 0.6);

    /* Text */
    --text: #e8e8ea;
    --text-muted: #9a9ca3;
    --text-dim: #7c7f88;

    /* Accent (amber) */
    --accent: #f5a524;
    --accent-hover: #ffb84d;
    --accent-contrast: #0b0b0d;
    --accent-tint: rgba(245, 165, 36, 0.12);
    --accent-glow: rgba(245, 165, 36, 0.3);

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
