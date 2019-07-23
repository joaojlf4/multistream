const reactHotLoaderBabel = require("react-hot-loader/babel");
const electronPackageJson = require("electron/package.json");

const developmentEnvironments = [
	"development",
	"test"
];

const developmentPlugins = [
	reactHotLoaderBabel
];
const productionPlugins = [
	"dev-expression",

	// babel-preset-react-optimize
	"@babel/plugin-transform-react-constant-elements",
	"@babel/plugin-transform-react-inline-elements",
	"transform-react-remove-prop-types"
];

module.exports = (api) => {
	// see docs about api at https://babeljs.io/docs/en/config-files#apicache

	const development = api.env(developmentEnvironments);

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					targets: {
						electron: electronPackageJson.version
					},
					useBuiltIns: "usage",
					corejs: 3
				}
			],
			"@babel/preset-flow",
			[
				"@babel/preset-react",
				{
					development
				}
			]
		],
		plugins: [
			// Stage 0
			"@babel/plugin-proposal-function-bind",

			// Stage 1
			"@babel/plugin-proposal-export-default-from",
			"@babel/plugin-proposal-logical-assignment-operators",
			[
				"@babel/plugin-proposal-optional-chaining",
				{
					loose: false
				}
			],
			[
				"@babel/plugin-proposal-pipeline-operator",
				{
					proposal: "minimal"
				}
			],
			[
				"@babel/plugin-proposal-nullish-coalescing-operator",
				{
					loose: false
				}
			],
			"@babel/plugin-proposal-do-expressions",

			// Stage 2
			[
				"@babel/plugin-proposal-decorators",
				{
					legacy: true
				}
			],
			"@babel/plugin-proposal-function-sent",
			"@babel/plugin-proposal-export-namespace-from",
			"@babel/plugin-proposal-numeric-separator",
			"@babel/plugin-proposal-throw-expressions",

			// Stage 3
			"@babel/plugin-syntax-dynamic-import",
			"@babel/plugin-syntax-import-meta",
			[
				"@babel/plugin-proposal-class-properties",
				{
					loose: true
				}
			],
			"@babel/plugin-proposal-json-strings",

			...(development ? developmentPlugins : productionPlugins)
		]
	};
};
