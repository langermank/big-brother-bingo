const autoprefixer = require("autoprefixer");
const presetEnv = require("postcss-preset-env");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  plugins: [
    autoprefixer(),
    postcssCustomMedia(),
    presetEnv({
      stage: 3,
      // https://preset-env.cssdb.org/
      features: {
        "nesting-rules": true,
        "has-pseudo-class": true,
      },
    }),
  ],
};
