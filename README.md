# Capsule Apparel

Sustainable menswear storefront built with **NestJS** (Express) and server-rendered **Handlebars** views.

## Pages
| Route | Description |
| --- | --- |
| `/` | Landing page: hero, featured products, About the Team, journal, purchase CTAs |
| `/about` | Information page |
| `/products` | All products |
| `/products/:slug` | Product page (size select + add to bag) |
| `/blog` | Journal |
| `/blog/:slug` | Blog post |

## Run
```bash
npm install
npm run start:dev   # http://localhost:3000
npm run build && npm run start:prod
```

## Content
Products, posts and team members live in `src/products`, `src/blog` and `src/team` as in-memory services. Replace the placeholder team and imagery with the client's real content, or swap the services for a database.
The bag counter is a front-end demo (stored in `localStorage`); checkout is not implemented.
"# CapsuleApparel" 
