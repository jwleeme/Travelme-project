module.exports = {
  env: {
      browser: true,
      node: true
  },
  // 코드 검사를 할 기본적인 규칙 명시
  extends: [
      //vue
      //'plugin:vue/vue3-essential', //Lv1
      'plugin:vue/vue3-strongly-recommended', //Lv2
    
      //javascript
      "eslint:recommended"
  ],
  parserOptions: {
      //코드 분석기 지정
      parser: 'babel-eslint'
  },
  // 원하는 코드규칙에 맞춰쓰고 싶을 때 rules 추가
  rules: {
      "vue/html-closing-bracket-newline": ["error", {
          "singleline": "never",
          "multiline": "never"
      }],
      "vue/html-self-closing": ["error", {
          "html": {
            "void": "always",
            "normal": "never",
            "component": "always"
          },
          "svg": "always",
          "math": "always"
        }]
  }
}