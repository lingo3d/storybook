module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",

  "webpackFinal": async (config) => {
    config.module.rules.push({
      include: /node_modules/,
        test: /\.mjs$/,
        type: "javascript/auto"
    })
    return config
  }
}