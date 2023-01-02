const path = require("path");
const fs = require("fs");
const util = require("util");

const fsReaddir = util.promisify(fs.readdir);
const fsReadFile = util.promisify(fs.readFile);
const fsLstat = util.promisify(fs.lstat);
deleteImg("../assets/images");
async function searchFilesInDirectoryAsync(dirs, filter, ext) {
  let targetFileArr = [];
  for (var i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    targetFileArr = [...targetFileArr, ...(await getFilesInDirectoryAsync(dir, ext))];
  }
  for (file of targetFileArr) {
    const fileContent = await fsReadFile(file);

    // We want full words, so we use full word boundary in regex.
    const regex = new RegExp("\\b" + filter + "\\b");
    if (regex.test(fileContent)) {
      //   console.log(`Your word was found in file: ${file}`);
      return true;
    }
  }
}

// Using recursion, we find every file with the desired extention, even if its deeply nested in subfolders.
async function getFilesInDirectoryAsync(dir, ext) {
  let files = [];
  const filesFromDirectory = await fsReaddir(dir).catch((err) => {
    throw new Error(err.message);
  });
  for (let file of filesFromDirectory) {
    const filePath = path.join(dir, file);
    const stat = await fsLstat(filePath);

    // If we hit a directory, apply our function to that dir. If we hit a file, add it to the array of files.
    if (stat.isDirectory()) {
      const nestedFiles = await getFilesInDirectoryAsync(filePath, ext);
      files = files.concat(nestedFiles);
    } else {
      if (!ext || path.extname(file) === ext) {
        files.push(filePath);
      }
    }
  }

  return files;
}
async function deleteImg(dir) {
  const imageFiles = await fsReaddir(dir).catch((err) => {
    throw new Error(err.message);
  });
  imageFiles.forEach((imgName) => {
    searchFilesInDirectoryAsync(["../docs", "../release"], imgName).then((hasFind) => {
      if (!hasFind) {
        fs.unlink(`${dir}/${imgName}`, function (error) {
          if (error) {
            console.log(error);
            return false;
          }
        });
      }
    });
  });
}
