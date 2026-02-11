const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 420,
    height: 600,
    minWidth: 300,
    minHeight: 420,
    frame: false,          // custom title bar
    resizable: true,       // resize with mouse
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile("index.html");
}

/* ===== WINDOW CONTROLS ===== */
ipcMain.on("window:minimize", () => {
  mainWindow.minimize();
});

ipcMain.on("window:close", () => {
  mainWindow.close();
});

app.whenReady().then(createWindow);
