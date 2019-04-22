const path = require("path");
const fs = require("fs");

//获取绝对路径
const getRootPath = setPath => {
  const setPathArr = setPath.split("/");
  const pathArr = path.normalize(__dirname).split(path.sep);
  for (let i = pathArr.length - 1; i >= 0; i--) {
    const el = pathArr[i];
    if (el === "My") {
      break;
    }
    pathArr.pop();
  }
  return pathArr.join(path.sep) + setPathArr.join(path.sep);
};

//读取当前的文件目录列表
const readFileList = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(getRootPath(path), (err, files) => {
      if (err) {
        console.error("error:\n" + err);
        reject(err);
        return;
      }
      resolve(files);
    });
  });
};
//读取文件的内容
const readFileCont = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(getRootPath(path), "utf-8", (err, data) => {
      if (err) {
        console.error("error:\n" + err);
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};
//写文件文件
const writeFile = ({ fileName, fileCont }) => {
  console.log("开始写入文件...");
  return new Promise((resolve, reject) => {
    fs.writeFile(getRootPath(fileName), fileCont, "utf8", err => {
      if (err) {
        console.error("error:\n" + err);
        reject(err);
      } else {
        console.log("文件写入完毕");
        resolve();
      }
    });
  });
};
module.exports = {
  readFileList,
  getRootPath,
  readFileCont,
  writeFile
};
