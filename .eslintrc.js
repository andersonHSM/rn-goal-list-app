module.exports = {
	extends: [
		'expo',
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				semi: true,
				singleQuote: true,
				printWidth: 120,
				tabWidth: 4,
				trailingComma: 'all',
				bracketSpacing: true,
				arrowParens: 'always',
				jsxSingleQuote: true,
				useTabs: true,
				quoteProps: 'as-needed',
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
