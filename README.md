# sample-yarn

Minimal Node.js layout that uses **[Yarn](https://yarnpkg.com/)** with **`yarn.lock`** (no `package-lock.json`).

## Prerequisites

- Node.js 18+ recommended
- Yarn via [Corepack](https://nodejs.org/api/corepack.html): `corepack enable`

## Commands

```bash
yarn install
yarn start
```

`yarn.lock` records the resolved dependency tree. Add packages with `yarn add <pkg>` when you need them.
