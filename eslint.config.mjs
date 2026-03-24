import js from "@eslint/js"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"
import globals from "globals"

const ignorePatterns = [
  ".git/**",
  ".github/**",
  ".husky/_/**",
  ".next/**",
  "build/**",
  "coverage/**",
  "dist/**",
  "node_modules/**",
  "out/**",
  "public/**",
  "typedoc-site/**",
  "next-env.d.ts",
]

const eslintConfig = [
  {
    ignores: ignorePatterns,
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  {
    ...js.configs.recommended,
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
]

export default eslintConfig
