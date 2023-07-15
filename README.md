# Vuesax Alpha Nuxt

> [Vuesax Alpha](https://vuesax.space) module for [Nuxt](https://nuxt.com)

## Features

- Automatically import components and styles on demand.
- Automatically import directives and styles on demand.
- Automatically import icons from [@vuesax-alpha/icons-vue](https://github.com/vuesax-alpha/vuesax-alpha-icons).
- Automatically import of VsLoading, VsNotification and other methods.
- Automatically inject the ID_INJECTION_KEY into Vue.
- Automatically inject the teleport markup into the correct location in the final page HTML.

## Installation

```bash
npm i vuesax-alpha @vuesax-alpha/nuxt -D
```

```ts
export default defineNuxtConfig({
  modules: ["@vuesax-alpha/nuxt"],
  vuesaxAlpha: {
    /** Options */
  },
});
```

## Usage

```vue
<template>
  <vs-button @click="VsNotification({ content: 'hello' })">button</vs-button>
</template>
```

Reference [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) and [playground](./playground/app.vue) use.

## Options

### importStyle

- Type: `'css' | 'scss' | boolean`
- Default: `css`

import style css or sass(scss) with components, disable automatically import styles with `false`.

### themes

- Type: `array`

A list of themes that require import styles automatically.

e.g. `['dark']`

### icon

- Type: `string | false`
- Default: `VsIcon`

Icon prefix name, disable automatically import icon with `false`.

### namespace

- Type: `string`
- Default: `vs`

When you change the global namespace, you must change it here as well.

### injectionID

- Type: `object`
- Default: `{ prefix: 1024, current: 0 }`

Automatically inject the ID_INJECTION_KEY into Vue.

### appendTo

- Type: `array`

When you modify the `append-to` props in all based on VsTooltip components, you need to add the value here.

### components

- Type: `array`

If there are components that are not imported automatically from Vuesax Alpha, you need to add the component name here.

### subComponents

- Type: `object`

A map of components that the definition file of subComponent is in its parent component.

### directives

- Type: `object`

If there are directives that are not imported automatically from Vuesax Alpha, you need to add the directive name here.

### imports

- Type: `array`

If you wish to add automatically import content from Vuesax Alpha, you can add it here.

### noStylesComponents

- Type: `array`

When a component incorrectly loads styles, you need to add the component name here.

### include

- Type: `array`
- Default: `[ /\.vue$/, /\.vue\?vue/, /\.vue\?v=/, /\.((c|m)?j|t)sx?$/]`

Include files that need to automatically import styles.

### exclude

- Type: `array`
- Default: `[/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]`

Exclude files that do not require the automatic import of styles.

## Development

- Run `pnpm i` to install the dependencies.
- Run `pnpm dev:prepare` to generate type stubs.
- Run `pnpm dev` to start playground in development mode.
- Run `pnpm dev:build` to build playground.
- Run `pnpm dev:start` to locally preview playground.
- Run `pnpm build` to build this project.
