'use strict'

const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  mainWindow.menuBarVisible = false
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('menu-options', (events, args) => {
  if (args === 'quit') {
    console.log('quit?', args)
    app.quit()
  }
})
