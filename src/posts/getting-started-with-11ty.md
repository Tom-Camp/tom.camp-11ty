---
title: Getting Started with 11ty
description: A quick look at why 11ty is a great choice for personal sites.
date: 2026-03-10
---

[11ty](https://www.11ty.dev/) (Eleventy) is a simple, flexible static site generator. Unlike many frameworks, it stays out of your way.

## Why 11ty?

- **Zero client-side JavaScript by default** — fast, lightweight output
- **Supports multiple template languages** — Nunjucks, Markdown, Liquid, HTML, and more
- **Data cascade** — front matter, JSON data files, and global data all merge cleanly
- **Active community** and excellent documentation

## Key concepts

### Collections

You can tag content with `tags` in front matter (or a directory data file like `blog.json`) and then loop over them with `collections.tagName` in your templates.

### Layouts

Layouts live in `_includes/` and wrap your content via the `layout` front matter key. They can chain — a post layout can itself extend a base layout.

### Passthrough copy

Static assets (CSS, images, fonts) need to be explicitly copied to the output folder using `addPassthroughCopy()` in your config.

Give it a try!
