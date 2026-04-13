# sample-yarn

Minimal Node.js layout that uses **[Yarn](https://yarnpkg.com/)** with **`yarn.lock`** (no `package-lock.json`). Runtime deps: **chalk** 5.2.0, **debug** 4.3.0. **`chalk@5.2.2` is not on the npm registry**; 5.2.0 is the latest 5.2.x release.

## Prerequisites

- Node.js 18+ recommended
- Yarn via [Corepack](https://nodejs.org/api/corepack.html): `corepack enable`

## Commands

```bash
yarn install
yarn start
```

Debug logging:

```bash
yarn debug
```

`yarn.lock` records the resolved dependency tree.
