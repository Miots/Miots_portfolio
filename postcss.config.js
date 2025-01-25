// postcss.config.js
module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        stage: 1,
        features: {
          'nesting-rules': true
        }
      })
    ],
  }