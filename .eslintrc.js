module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
<<<<<<< HEAD
    "prettier/prettier": ["error", { "endOfLine": "auto" }]
=======
    "prettier/prettier": ["error", { endOfLine: "auto" }],
>>>>>>> 509252053676bf8dec6d3147fb8f9ebea5d5f40c
  },
};
