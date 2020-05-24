const { BrowserWindow: Window } = require('electron');
const { getWindowState, storeWindowState } = require('./services/persistConfig');


module.exports = function(){

  const state = getWindowState();

  let window = new Window({
    width: state ? state.width : 980,
    height: state ? state.height : 600,
    x: state ? state.x : undefined,
    y: state ? state.y : undefined,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
  });
  window.on('close', () => {
    storeWindowState(window.getBounds())
  })
  window.loadFile('frontend/index.html');
}