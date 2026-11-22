<div align="center">
  <img alt="Logo" src="src/images/logo.png" width="80" />
</div>
<h1 align="center">Yacine Naoui — portfolio</h1>
<p align="center">
  Personal site of <strong>Yacine Naoui</strong>, backend &amp; ML engineer building secure, automated infrastructure.<br />
  Built with <a href="https://www.gatsbyjs.com/">Gatsby</a> and <a href="https://styled-components.com/">styled-components</a>.
</p>

> Designed &amp; built by Yacine Naoui · Originally based on [Brittany Chiang's v4](https://brittanychiang.com) ([bchiang7/v4](https://github.com/bchiang7/v4), MIT). The content, theme and layout here are my own; see [LICENSE](LICENSE) for the original notice.

## Stack

- Gatsby 3 (static site, image pipeline, markdown content), React 17, styled-components
- Self-hosted fonts: [Inter](https://rsms.me/inter/) for text, [JetBrains Mono](https://www.jetbrains.com/lp/mono/) for code (via `@fontsource`)
- Node 22 (see `.nvmrc`), Yarn 1. Gatsby 3 needs `NODE_OPTIONS=--openssl-legacy-provider` on Node 17+; the npm scripts set it
- GitHub Actions runs lint + build on every push and pull request (`.github/workflows/ci.yml`)

## Running it

```sh
nvm install          # uses the version in .nvmrc
yarn                 # install dependencies
yarn start           # dev server at http://localhost:8000
```

Production build and preview:

```sh
yarn build           # outputs to public/
yarn serve           # serves public/ at http://localhost:9000
yarn lint            # eslint over the whole repo
```

Commits run prettier and eslint on staged files through husky + lint-staged.

## Where things live

| What                                                    | Where                                                                                             |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Email, socials, nav, resume URL, education, "Currently" | `src/config.js`                                                                                   |
| Site title / description / URL / Twitter handle         | `gatsby-config.js` → `siteMetadata`                                                               |
| Experience entries                                      | `content/jobs/<Company>/index.md` (one folder per role)                                           |
| Featured case studies                                   | `content/featured/<Project>/index.md`                                                             |
| Other projects grid                                     | `content/projects/*.md` (copy `_template.md`, set `showInProjects: true`)                         |
| Hero / About copy                                       | `src/components/sections/hero.js`, `about.js`                                                     |
| Colours, fonts, spacing                                 | `src/styles/variables.js` (single `--accent`; swap the four `--accent*` values for electric blue) |
| Photo                                                   | `src/images/me.jpg`                                                                               |
| Resume                                                  | `static/resume.pdf` (linked from the header while `resumeUrl` is set)                             |
| Favicon / app icon source                               | `src/images/logo.png`                                                                             |
| Social preview image                                    | `static/og.png`, `static/og@2x.png`                                                               |

Case-study frontmatter (`content/featured/*/index.md`):

```yaml
title: 'Project name'
role: 'What I did / context'
status: 'In progress'
github: '' # optional
external: '' # optional
cover: './cover.png' # optional image
tech: [Python, Docker]
problem: >-
  One paragraph on the problem.
architecture:
  - 'Component one'
results:
  - 'Measured outcome'
```

## TODO before going live

- [ ] Optional: `twitterUsername` in `gatsby-config.js`; `siteUrl` is taken from Vercel automatically (override with a `SITE_URL` env var)
- [ ] `static/resume.pdf` is built from `resume/cv.tex` (`cd resume && make`); rebuild it after editing the source
- [ ] Push to GitHub to run the CI workflow for the first time, then import the repo in Vercel (see below)

## Deploying to Vercel

1. Push the repository to GitHub.
2. In Vercel, **Add New → Project**, import `Yacine-Naoui/portfolio` and deploy. The install, build and output settings come from `vercel.json`; the Node version (22) comes from `engines` in `package.json`.
3. Every push to `main` becomes the production deployment; pull requests get preview URLs.
4. The sitemap, `robots.txt` and Open Graph URLs use the project's production domain (`VERCEL_PROJECT_PRODUCTION_URL`). After adding a custom domain under **Settings → Domains**, redeploy once; to force a specific URL, set a `SITE_URL` environment variable instead.

## License

MIT. The original work is © 2018 Brittany Chiang; modifications are © 2026 Yacine Naoui.
