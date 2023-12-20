# Teach Away
## Frontend - Image gallery with filters

## Instructions
Implement a simple web app that allows browsing the Imgur gallery

- consume the Imgur API: https://api.imgur.com/ (check documentation for the api https://apidocs.imgur.com).

- show gallery images in a grid of thumbnails.

- show image description in the thumbnail, top or bottom.

- allow selecting the gallery section: hot, top, user.

- allow including / excluding viralimages from the result set.

- allow specifying window and sort parameters.

- when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.

- pagination is a plus.

## Technical requirements:

- Use React/Redux (preferably), Vue.js or other similar js frameworks.

- Styling: sass, styled-components, css modules (your choice).

- Code linter.

- Typescript is a plus.

- Implementing unit tests is a plus: Jest + react-testing-library / enzyme.

- Hosting the website on the service of your choice is a plus.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

`npm install`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
