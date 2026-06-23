const { version } = require("./package.json")

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants")

const rulesToProcess = [/\.m?js/, /\.(js|cjs|mjs)$/].map(String)
const dirToIgnore = /tools/

const GH_BASE_PATH = process.env.GH_BASE_PATH || ""

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: process.env.EXPORT_MODE === "true" ? "export" : "standalone",
	basePath: process.env.EXPORT_MODE === "true" ? GH_BASE_PATH : "",
	publicRuntimeConfig: {
		version
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**"
			}
		]
	},
	webpack(config) {
		config.resolve.fallback = {
			// if you miss it, all the other options in fallback, specified
			// by next.js will be dropped.
			...config.resolve.fallback,

			fs: false // the solution
		}

		config.module.rules = config.module.rules.map((rule) => {
			if (rule !== "..." && rulesToProcess.indexOf(String(rule.test)) > -1) {
				rule.exclude = [dirToIgnore]
			}
			return rule
		})

		return config
	},
	env: {
		BUILD_MODE: process.env.BUILD_MODE
	}
}

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
module.exports = async (phase) => {
	let config = nextConfig

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		config = {
			...config,
			headers: () => [
				{
					source: "/:path*",
					headers: [
						{
							key: "Cache-Control",
							value: "no-store"
						}
					]
				}
			]
		}
	}

	if ((phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) && process.env.EXPORT_MODE !== "true") {
		const withSerwist = (await import("@serwist/next")).default({
			swSrc: "src/sw.js",
			swDest: "public/sw.js",
			reloadOnOnline: false
		})
		return withSerwist(config)
	}

	return config
}
