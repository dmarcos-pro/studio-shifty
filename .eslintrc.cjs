const path = require('path')

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      // extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'], // 'plugin:@typescript-eslint/recommended'
  // exclude: [
  //   'service-1.js' // Exclure le fichier service-1.js de l'exécution d'ESLint
  // ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    // '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    // '@typescript-eslint/no-unsafe-call': ['off'],
    // '@typescript-eslint/no-unsafe-argument': ['off'],
    // '@typescript-eslint/no-unsafe-assignment': ['off'],
    // '@typescript-eslint/no-unsafe-member-access': ['off'],
    // '@typescript-eslint/no-unsafe-return': ['off'],
    // '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
  },
}

module.exports = config
