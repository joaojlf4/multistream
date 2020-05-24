import { app } from 'electron';
import path from 'path';
import fs from 'fs';

const windowConfigPath = path.join(app.getPath('appData'), '.initConfig');

let initialConfig = {};

try {
  initialConfig = JSON.parse(fs.readFileSync(windowConfigPath, 'utf8'));
}catch (err){
  console.log(err)
}

function getWindowState(){
  console.log(initialConfig);
  return initialConfig.windowState;
}

function storeWindowState({ x, y, width, height }){
  fs.writeFileSync(windowConfigPath, JSON.stringify({
    windowState: {
      x, 
      y,
      width,
      height,
    }
  }))
}

export default {
  getWindowState,
  storeWindowState
};