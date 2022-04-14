const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  unstable_staticImage: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://github.com/frankdou/frankdou.github.io/tree/gh-pages/',
  },
})
