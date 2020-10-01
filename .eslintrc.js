module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue'],
  // ここにカスタムルールを追加します。
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-console': 0, // console.logの許可
    'vue/html-self-closing': 0, // HTMLセルフ閉じタグ許可
    'vue/require-default-prop': 0, // propsのrequire設定なしを許可
    'vue/html-indent': 0, // component内のインデントを許可
    'vue/attribute-hyphenation': 0, // プロパディ名の型の許容
    'comma-dangle': 0, // 末尾カンマを許可
    'space-before-function-paren': 0, // 特定キーワード前のスペースを許可
  }
}