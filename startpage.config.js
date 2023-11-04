const defaultConfig = {
	username: "scillidan",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "Site",
				color: "green",
				align: "left",
				links: [
					{
						name: "SMKA",
						url: "https://scillidan.github.io/SMKA-page",
						icon: "mdi:puzzle-outline"
					},
					{
						name: "LOG",
						url: "https://scillidan.github.io/LOG-page",
						icon: "mdi:puzzle"
					},
					{
						name: "YAFA",
						url: "https://scillidan.github.io/YAFA-site",
						icon: "mdi:puzzle"
					},
					{
						name: "BYYA",
						url: "https://scillidan.github.io/BYYA-site",
						icon: "mdi:puzzle"
					},
				]
			},
			{
				title: "Sheet",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "_asset",
						url: "https://github.com/scillidan/repo_asset/blob/main/table.md",
						icon: "mdi:inbox-multiple"
					},
					{
						name: "README",
						url: "https://github.com/scillidan/README-page",
						icon: "mdi:inbox-multiple"
					},
					{
						name: "NOTION",
						url: "https://github.com/scillidan/NOTION-table",
						icon: "mdi:inbox-multiple"
					},
					{
						name: "JS",
						url: "https://github.com/scillidan/JS-demo/blob/main/table.md",
						icon: "mdi:inbox-multiple"
					},
					{
						name: "GUI",
						url: "https://github.com/scillidan/GUI-source/blob/main/table.md",
						icon: "mdi:inbox-multiple"
					},
					{
						name: "PM2",
						url: "https://github.com/scillidan/PM2-demo/blob/main/table.md",
						icon: "mdi:inbox-multiple"
					},
					{
						name: "LIVELY",
						url: "https://github.com/scillidan/LIVELY-resource/blob/main/table.md",
						icon: "mdi:inbox-multiple"
					},
					{
						name: "WALLPAP-ENG",
						url: "https://github.com/scillidan/WALLPAP-ENG-resource/blob/main/table.md",
						icon: "mdi:inbox-multiple"
					}
				]
			},
			{
				title: "Archive",
				color: "violet",
				align: "left",
				links: [
					{
						name: "_archive",
						url: "https://scillidan.github.io/repo_archive/index.md.html",
						icon: "mdi:inbox-full"
					},
          {
            "name":"Theka",
            "url":"https://scillidan.github.io/Theka",
            "icon":"mdi:inbox-full"
          },
					{
						name: "PIDAN",
						url: "https://scillidan.github.io/PIDAN-journal",
						icon: "mdi:inbox-full"
					},
					{
						name: "BYTEPATH",
						url: "https://scillidan.github.io/BYTEPATH-blogs",
						icon: "mdi:inbox-full"
					}
				]
			},
			{
				title: "Tool",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "github-search-rss",
						url: "https://scillidan.github.io/github-search-rss",
						icon: "mdi:toolbox"
					},
					{
						name: "fonts",
						url: "https://github.com/scillidan/fonts",
						icon: "mdi:toolbox"
					},
					{
						name: "shields-with-icon",
						url: "https://scillidan.github.io/shields-with-icon",
						icon: "mdi:toolbox"
					}
				]
			},
			// {
			// 	title: "Science",
			// 	color: "blue",
			// 	align: "left",
			// 	links: [
			// 	]
			// },
			// {
			// 	title: "Tech",
			// 	color: "yellow",
			// 	align: "left",
			// 	links: [
			// 	]
			// }
		]
	}
}

export default defaultConfig
