[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# photobrowser - [https://photobrowser.vercel.app/](https://photobrowser.vercel.app/)

![screenshot](https://github.com/jaakkolantero/photobrowser/blob/master/screenshot.png)

Photobrowser to create grid view of photos with pagination. Created with **Next.js**, **TailwindCSS** and **Swr**. Running on serverless architecture with immutable deployments.

Load of cool stuff inside like tailwind-easing-gradients for smooth gradient overlays.

## Prerequisites

Before you continue, ensure you have npm installed. Tested on linux.

## Tour

Grid view [index.tsx](/pages/index.tsx)

Single photo [[id].tsx](/pages/[id].tsx)

Components [/components](/components)

endpoint for photos [photos.ts](/pages/api/photos.ts)

endpoint for single photo [photo.ts](/pages/api/photo.ts)

Previous [deployments](https://github.com/jaakkolantero/photobrowser/deployments)

## Installation / Running locally

```bash
git clone https://github.com/jaakkolantero/photobrowser.git
cd photobrowser
npm install
rename .example.env.local to .env.local
npm run dev
```

## Usage

[localhost:3000](http://localhost:3000)

## Built With

- [Next.js](https://nextjs.org/) - The web framework used
- [Swr](https://swr.now.sh/) - React Hooks for Remote Data Fetching
- [Now](https://zeit.co/home) - Hosted on Zeit Now
- [TailwindCSS](https://tailwindcss.com/) -A utility-first CSS framework for
  rapidly building custom designs.
- [Typescript](https://www.typescriptlang.org/) - typed superset of JavaScript that compiles to plain JavaScript.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
