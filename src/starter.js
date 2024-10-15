const fs = require("fs");
const sllUrls = require("../public/allUrls");

function convertToJson(inputPath) {
  if (!Array.isArray(sllUrls.urls)) {
    console.log("data most be an array");
    return 0;
  }

  let mainJson = {};

  mainJson = sllUrls.urls.map((item, index) => {
    const oneIndex = {
      from: item,
      to: "",
      status: "draft",
    };
    return oneIndex;
  });

  try {
    var writeStream = fs.createWriteStream("public/main.json");
    writeStream.write(JSON.stringify({ data: mainJson }));
    writeStream.end();
    console.log("file creation task Done!");
  } catch (err) {
    console.error(err);
  }
}

convertToJson();
