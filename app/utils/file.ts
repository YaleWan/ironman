/*
 * @Description: 文件的方法
 * @Author: yhwang
 * @Date: 2020-07-29 11:51:53
 * @LastEditors: yhwang
 * @LastEditTime: 2020-07-29 22:04:08
 */
const fs = require('fs-extra');
// 读取目录下的文件夹
export function readDir(dir: string): any {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err: Error, file: Array<string>) => {
      if (err) {
        reject(err);
      }
      resolve(file.filter((item) => !/(^|\/)\.[^/.]/g.test(item)));
    });
  });
}
//
export function readJson(dir: string): any {
  return new Promise((resolve, reject) => {
    fs.readJson(dir, (err: Error, json: any) => {
      if (err) {
        reject(err);
      }
      resolve(json);
    });
  });
}
