module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // 해당 플러그인의 권장 규칙을 사용합니다.
    "plugin:prettier/recommended",
    "next",
  ],
  parser: "@typescript-eslint/parser", // ESLint 파서를 지정합니다.
  parserOptions: {
    ecmaVersion: 2022,
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true, // JSX를 파싱할 수 있습니다.
    },
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    semi: ["error", "always"],
    quotes: ["error", "single"],
  },
  settings: {
    react: {
      version: "detect", // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
      typescript: {},
    },
  },
  ignorePatterns: [".eslintrc.js"],
};
