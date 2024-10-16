import fs from "fs";
import { urls } from "../public/allUrls.js";

function convertToJson() {
  const mainJsonPath = "public/main.json";

  if (fs.existsSync(mainJsonPath)) {
    console.log("\x1b[41m", "main Json is already exists !!");
    return 0;
  }

  if (!Array.isArray(urls)) {
    console.log("\x1b[41m", "data most be an array");
    return 0;
  }

  let mainJson = {};

  mainJson = urls.map((item, index) => {
    const oneIndex = {
      id: index,
      from: item,
      to: "",
      status: "draft",
    };
    return oneIndex;
  });

  try {
    var writeStream = fs.createWriteStream(mainJsonPath);
    writeStream.write(JSON.stringify({ data: mainJson }));
    writeStream.end();
    console.log("\x1b[42m", "file creation task Done!");
  } catch (err) {
    console.error(err);
  }
}

convertToJson();
