// DON'T USE THIS CONFIG
// see https://github.com/xwtec/dotfiles/prettier

// options https://prettier.io/docs/en/options.html
// Configuration File https://prettier.io/docs/en/configuration.html

// options https://prettier.io/docs/en/options.html
// Configuration File https://prettier.io/docs/en/configuration.html

module.exports = {
  // options for all files
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  htmlWhitespaceSensitivity: 'ignore',

  // overrides
  overrides: [
    {
      files: '*.{js,mjs}',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.{css,less,scss}',
      options: {
        parser: 'css',
        singleQuote: false,
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
        singleQuote: false,
      },
    },
    {
      files: '*.less',
      options: {
        parser: 'less',
        singleQuote: false,
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
    {
      files: '*.{html,htm}',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.json5',
      options: {
        parser: 'json5',
      },
    },
    {
      files: '*.{md,markdown}',
      options: {
        parser: 'markdown',
        singleQuote: false,
      },
    },
    {
      files: '*.{yaml,yml}',
      options: {
        parser: 'yaml',
        singleQuote: false,
      },
    },
    {
      files: '*.{graphql,gql}',
      options: {
        parser: 'graphql',
      },
    },
  ],
}
