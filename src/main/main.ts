import { app, BrowserWindow } from 'electron';
import { createMainWindow } from './window';
import { registerIpcHandlers } from './ipc';

let mainWindow: BrowserWindow;

app.on('ready', () => {
  console.log('App is ready!');

  registerIpcHandlers();

  mainWindow = createMainWindow();
})
