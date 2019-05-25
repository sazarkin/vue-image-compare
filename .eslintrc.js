module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'plugin:compat/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'standard'
  ],
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}
