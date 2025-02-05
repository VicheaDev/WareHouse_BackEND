import globals from "globals";
import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-node";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {
    // Node.js specific settings
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        process: "readonly"
      }
    }
  },
  pluginJs.configs.recommended,
  pluginNode.configs.recommended,
  {
    // Custom rules
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "node/no-unpublished-require": "off",
      "node/no-missing-require": ["error", {
        allowModules: ["typescript"]
      }]
    }
  }
];