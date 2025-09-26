import {defineConfig} from "eslint/config";

import airbnbExtended from "eslint-config-airbnb-extended/legacy";

import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from 'typescript-eslint';
import js from "@eslint/js";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import react from "eslint-plugin-react";


export default defineConfig([
  js.configs.recommended,
  js.configs.all,
  airbnbExtended.configs.react.recommended,
  airbnbExtended.configs.react.hooks,
  eslintPluginPrettierRecommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  tseslint.configs.recommended,
  {
    plugins: {
      react,
    },
    languageOptions: {
      parser: tsParser,

      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest,
        React: true,
        JSX: true,
      },

      ecmaVersion: 2021,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },

      "import/parser": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },

      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },

    rules: {
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".js", ".jsx", ".tsx"],
        },
      ],

      "react/prop-types": "off",

      "react/jsx-props-no-spreading": [
        "error",
        {
          html: "ignore",
        },
      ],

      "max-len": ["error", 120],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/no-explicit-any": "error",
      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],

          custom: {
            regex: "^I[A-Z][a-z]",
            match: false,
          },
        },
      ],

      "react/react-in-jsx-scope": "off",
      "explicit-module-boundary-types": "off",
      "arrow-body-style": "off",

      "import/no-unresolved": [
        "error",
        {
          ignore: [".css", ".scss", ".sass"],
        },
      ],

      "jsx-a11y/anchor-is-valid": "off",

      "import/order": [
        "warn",
        {
          alphabetize: {
            order: "asc",
          },

          "newlines-between": "always",
          groups: ["external", "internal", "parent", "index", "sibling"],
        },
      ],

      "import/extensions": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-undef": "off",
      "react/require-default-props": "off",

      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],

      "react/jsx-fragments": ["error", "syntax"],
      "padding-line-between-statements": "off",
      "no-loss-of-precision": "off",

      "@/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: ["const", "let", "export"],
        },
        {
          blankLine: "always",
          prev: ["const", "let", "export"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "export"],
          next: ["const", "let", "export"],
        },
        {
          blankLine: "always",
          prev: "*",

          next: [
            "if",
            "class",
            "for",
            "do",
            "while",
            "switch",
            "try",
            "default",
          ],
        },
        {
          blankLine: "always",
          prev: ["if", "class", "for", "do", "while", "switch", "try"],
          next: "*",
        },
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "never",
          prev: ["case"],
          next: ["case"],
        },
        {
          blankLine: "always",
          prev: ["block-like"],
          next: ["case"],
        },
        {
          blankLine: "always",
          prev: ["block-like", "expression"],
          next: ["break"],
        },
      ],

      "@typescript-eslint/member-ordering": [
        "error",
        {
          interfaces: {
            memberTypes: ["field", "signature", "method"],
            order: "alphabetically",
          },
        },
      ],
    },
  },
]);
