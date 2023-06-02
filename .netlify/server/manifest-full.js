export const manifest = {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set(["favicon.png","pollyfill.js"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.eeedad77.js","app":"_app/immutable/entry/app.1c7e6d90.js","imports":["_app/immutable/entry/start.eeedad77.js","_app/immutable/chunks/index.51fb4bd3.js","_app/immutable/chunks/singletons.b01d5e4c.js","_app/immutable/chunks/index.9100ae24.js","_app/immutable/entry/app.1c7e6d90.js","_app/immutable/chunks/index.51fb4bd3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
