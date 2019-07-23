/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow } from "electron";
import { autoUpdater } from "electron-updater";
import log from "electron-log";
import sourceMapSupport from "source-map-support";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import electronDebug from "electron-debug";

import MenuBuilder from "./menu";

/**
 *
 *
 * @class AppUpdater
 */
const AppUpdater = class {
	/**
	 *Creates an instance of AppUpdater.
	 * @memberof AppUpdater
	 */
	constructor() {
		log.transports.file.level = "info";
		autoUpdater.logger = log;
		autoUpdater.checkForUpdatesAndNotify();
	}
};

let mainWindow = null;

if (process.env.NODE_ENV === "production") {
	sourceMapSupport.install();
}

if (process.env.NODE_ENV === "development" || process.env.DEBUG_PROD === "true") {
	electronDebug();
}

// /**
//  *
//  *
//  * @returns {Array}
//  * extensionss
//  */
// const installExtensions = async() => {
// 	const forceDownload = !!process.env.UPGRADE_EXTENSIONS;

// 	return installer(REACT_DEVELOPER_TOOLS, forceDownload);
// };

/**
 * Add event listeners...
 */

app.on("window-all-closed", () => {
	// Respect the OSX convention of having the application in memory even
	// after all windows have been closed
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("ready", async() => {
	if (process.env.NODE_ENV === "development" || process.env.DEBUG_PROD === "true") {
		await installExtension(REACT_DEVELOPER_TOOLS, !!process.env.UPGRADE_EXTENSIONS);
	}

	mainWindow = new BrowserWindow({
		show: false,
		width: 1024,
		height: 728,
		webPreferences: {
			nodeIntegration: true
		}
	});

	mainWindow.loadURL(`file://${__dirname}/app.html`);

	// @TODO: Use 'ready-to-show' event
	//        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
	mainWindow.webContents.on("did-finish-load", () => {
		if (!mainWindow) {
			throw new Error("\"mainWindow\" is not defined");
		}
		if (process.env.START_MINIMIZED) {
			mainWindow.minimize();
		}
		else {
			mainWindow.show();
			mainWindow.focus();
		}
	});

	mainWindow.on("closed", () => {
		mainWindow = null;
	});

	const menuBuilder = new MenuBuilder(mainWindow);
	menuBuilder.buildMenu();

	// Remove this if your app does not use auto updates
	// eslint-disable-next-line
  new AppUpdater();
});

export default AppUpdater;
