import { isURL } from "@/utils/isURL"

export async function fetchAsset(assetPath) {
	if (!assetPath) {
		return ""
	}
	if (isURL(assetPath)) {
		return assetPath
	}

	const isStatic = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true"

	if (isStatic) {
		const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
		return base + (assetPath.startsWith("/") ? assetPath : `/${assetPath}`)
	}

	const response = await fetch(`/api/getData?file=${assetPath}`)
	const data = await response
		.clone()
		.json()
		.catch(() => response.blob())
	if (data.warning) {
		console.log("File not found: " + assetPath)
		return ""
	}
	const url = URL.createObjectURL(data)
	return url
}
