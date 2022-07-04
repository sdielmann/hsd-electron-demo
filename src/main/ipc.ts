import { ipcMain, app } from 'electron';

export const registerIpcHandlers = () => {
  ipcMain.handle('getAppVersion', () => {
    return app.getVersion();
  })
}
