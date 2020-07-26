/*
 * @Description: electron的通用方法
 * @Author: yhwang
 * @Date: 2020-07-22 15:09:22
 * @LastEditors: yhwang
 * @LastEditTime: 2020-07-23 22:46:51
 */
const { remote } = require('electron');
// 窗口最小化
export function minimizeWin() {
  return remote.getCurrentWindow().minimize();
}
// 关闭窗口
export function closeWin() {
  return remote.getCurrentWindow().close();
}
// 放大/缩小
export function setFullScreen() {
  const win = remote.getCurrentWindow();
  if (win.isMaximized()) {
    // 判断 窗口是否已最大化
    win.restore(); // 恢复原窗口大小
  } else {
    win.maximize(); // 最大化窗口
  }
}
export function setScreenSize(x: number, y: number) {
  return remote.getCurrentWindow().setSize(x, y);
}
