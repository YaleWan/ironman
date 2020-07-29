/*
 * @Description: 文件的方法
 * @Author: yhwang
 * @Date: 2020-07-29 11:51:53
 * @LastEditors: yhwang
 * @LastEditTime: 2020-07-29 13:46:06
 */
const fs = require('fs-extra');

export function readDir(dir: string) {
  fs.readdir(dir, (err, file) => {
    if (err) {
      throw err;
    }
    return file;
  });
}
