var fs = require("fs-js");

// OPEN FILE
fs.writeFile("test", "wx", (err, fd) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.error("test already exists");
      return;
    }

    throw err;
  }

  writeMyData(fd);
});

// READ FILE
// fs.open("test", "r", (err, fd) => {
//   if (err) {
//     if (err.code === "ENOENT") {
//       console.error("myfile does not exist");
//       return;
//     }

//     throw err;
//   }

//   readMyData(fd);
// });
