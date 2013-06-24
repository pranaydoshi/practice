var server = require("./server")
var router = require("./router")
var requestHandlers = require("./requestHandlers");
var start = requestHandlers.start
var upload = requestHandlers.upload
var show = requestHandlers.show
var handle = {}
handle["/"] = start
handle["/start"] = start
handle["/upload"] = upload
handle["/show"] = show
server.start(router.route,handle)
