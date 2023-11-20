const { app, BrowserWindow, globalShortcut } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
  win.setAlwaysOnTop(true, "screen");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  globalShortcut.register("CommandOrControl+Shift+Y", () => {
    console.log("here");
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.minimize();
  });
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
