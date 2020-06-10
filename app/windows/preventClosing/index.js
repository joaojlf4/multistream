import { BrowserWindow } from "electron";
import path from 'path';


export default class {
  constructor(parent) {
    const confirmCloseWindow = new BrowserWindow({
      backgroundColor: '#36393F',
      frame: false,
      width: 450,
      height: 200,
      resizable: false,
      minimizable: false,
      maximizable: false,
      webPreferences: {
        nodeIntegration: true
      },
    })
    confirmCloseWindow.loadFile(path.join(__dirname, 'index.html'));
    console.log(path.join(__dirname, 'index.html'));

    confirmCloseWindow.center();

    // centralize
    const currentBounds = confirmCloseWindow.getBounds();
    const parentBounds = parent.getBounds();

    const x = (parentBounds.x + (parentBounds.width / 2)) - (currentBounds.width / 2);
    const y = (parentBounds.y + (parentBounds.height / 2)) - (currentBounds.height / 2);

    confirmCloseWindow.setPosition(x, y);
  }
}