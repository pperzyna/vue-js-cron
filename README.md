# Vue.js Cron

**generate cron expressions using Vue.js**

![Vue.js Cron Hero](https://raw.githubusercontent.com/abichinger/vue-js-cron/main/assets/cron-light-hero.png)

# Getting Started

Vue v2: [documentation](https://abichinger.github.io/vue-js-cron)

Vue v3: [documentation](https://abichinger.github.io/vue-js-cron/next)

# Packages

This monorepo includes the following packages:

- core - a renderless Vue.js component to generate cron expressions.
- light - a lightweight cron editor without external dependencies
- vuetify - Vuetify component to edit cron expressions.
- element-plus - Element Plus component
- docs - Vue.js Cron documentation powered by [VuePress](https://vuepress.vuejs.org/)

# Development

## Install dependencies
```
yarn install
```

## Run development server
```
yarn dev-core
yarn dev-vuetify
yarn dev-docs
```

## Test
```
yarn test
```

## Build
```
yarn build
yarn build-docs
```

## Attribution

This component is inspired by [react-js-cron](https://github.com/xrutayisire/react-js-cron) and [jqcron](https://github.com/arnapou/jqcron)