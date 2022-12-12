const { app, BrowserWindow, ipcMain, } = require("electron")

/*ipcMain.handle( "an-action", (event, arg) => {

	return process.argv
})*/

/*ipcMain.on( "msg", (event,data) => {

	let m = [
	app.commandLine.getSwitchValue("arg1"),
	app.commandLine.getSwitchValue("arg2"),
	process.argv,
	__dirname
	]
	event.reply("reply",m)
})*/

function createWindow(){

	const win = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
		nodeIntegration: true,
		contextIsolation: false
	}
	})

	win.webContents.on("dom-ready", () => {

		win.webContents.send("sum-request", [1,2,3] )
	
	})

	win.loadFile("src/index.html")

	win.webContents.openDevTools()

}

app.whenReady().then(createWindow)
