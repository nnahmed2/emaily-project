const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
	app.use(
		//if something is not working add * to end of api
		["/api*", "/auth/google"],
		createProxyMiddleware({
			target: "http://localhost:5000",
		})
	);
};
