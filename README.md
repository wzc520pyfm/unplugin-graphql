# unplugin-graphql

[![NPM version](https://img.shields.io/npm/v/unplugin-graphql?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-graphql)

🍣 A universal bundler plugin which Converts .gql/.graphql(s) files to ES6 modules.

## Install

```bash
npm i unplugin-graphql
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginGraphql from 'unplugin-graphql/vite'

export default defineConfig({
  plugins: [
    UnpluginGraphql({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginGraphql from 'unplugin-graphql/rollup'

export default {
  plugins: [
    UnpluginGraphql({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-graphql/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-graphql/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-graphql/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginGraphql from 'unplugin-graphql/esbuild'

build({
  plugins: [UnpluginGraphql()],
})
```

<br></details>

## Usage

### Options

For all options please refer to [docs](https://github.com/rollup/plugins/tree/master/packages/graphql#options).

This plugin accepts all [@rollup/plugin-graphql](https://github.com/rollup/plugins/tree/master/packages/graphql#options) options.
