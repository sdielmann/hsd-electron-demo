import { BrowserWindow } from 'electron';
import * as path from 'path';

export const createMainWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.resolve(__dirname, '../renderer/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false
    },
  });

  window.webContents.openDevTools({
    mode: 'detach'
  })

  window.webContents.on('dom-ready', () => {
    window.show();
  })

  window.loadFile(path.resolve(__dirname, '../renderer/index.html'));

  return window;
}
