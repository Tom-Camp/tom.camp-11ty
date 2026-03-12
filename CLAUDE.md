# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # build + dev server with live reload (eleventy --serve)
npm run build    # one-off production build → outputs to _site/
```

There are no tests or linters configured.

## Architecture

This is an [11ty v3](https://www.11ty.dev/) static site using Nunjucks templates and Bulma CSS (loaded from CDN).

**Build input/output:** `src/` → `_site/`

### Layout chain

All pages ultimately extend `base.njk`:

```
src/blog/*.md  →  post.njk (layout: base.njk)  →  base.njk
src/blog/index.njk                              →  base.njk
src/index.njk                                  →  base.njk
```

- `src/_includes/base.njk` — full HTML shell: navbar, `<main>`, footer, Bulma CDN link
- `src/_includes/post.njk` — wraps individual blog post content; sets `layout: base.njk`
- `src/blog/index.njk` — blog listing page; loops `collections.blog | reverse`
- `src/index.njk` — home page with hero and recent posts (uses `collections.blog | reverse | limit(3)`)

### Blog posts

Any `.md` file placed in `src/blog/` automatically gets the `blog` tag and `post.njk` layout via
`src/blog/blog.json`. Required front matter:

```yaml
---
title: Post Title
description: Optional subtitle shown in listings.
date: YYYY-MM-DD
---
```

### Custom filters/shortcodes (`eleventy.config.js`)

- `| date("MMMM d, yyyy")` — Luxon-based date formatter; accepts any JS Date or date string
- `| limit(n)` — returns first N items from an array
- `{% year %}` — outputs current 4-digit year

### Static assets

`src/css/style.css` is the only local stylesheet (minor layout overrides). It is copied verbatim to
`_site/css/` via `addPassthroughCopy`. Bulma itself is loaded from CDN in `base.njk`.
