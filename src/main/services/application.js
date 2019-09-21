import { create, getPath } from './window';

export function init() {
  const win = create({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(getPath());
}
