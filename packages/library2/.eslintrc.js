module.exports = {
  ...require('@withtest/eslint/react.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
