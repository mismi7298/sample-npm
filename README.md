# sample-debug-chalk

Sample Node.js project using **npm** with **`package-lock.json`**. Runtime deps: **chalk** 5.2.0, **debug** 4.3.0. **`chalk@5.2.2` is not on the npm registry**; 5.2.0 is the latest 5.2.x release.

## Prerequisites

- Node.js 18+ recommended

## Commands

```bash
npm install
npm start
```

Debug logging:

```bash
npm run debug
```

Or with a specific namespace:

```bash
DEBUG=app:* node index.js
```

`package-lock.json` records the resolved dependency tree.
