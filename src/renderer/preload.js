const { ipcRenderer, contextBridge } = require('electron/renderer');

contextBridge.exposeInMainWorld('myAPI', {
    getAppVersion: async () => {
        console.log('Retrieving app version...');
        const v = await ipcRenderer.invoke('getAppVersion');
        console.log('App version: ', v);
        return v;
    }
})

console.log('Preload script executed!');
