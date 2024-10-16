import fs from "fs";
import { setInJson, filterData } from "./jsonHandller.js";
import tinify from "tinify";
tinify.key = "YOUR_API_KEY";

function convertToWebp() {
  const mainJson = JSON.parse(fs.readFileSync("public/main.json", "utf-8"));
  const draftItems = filterData("is_downloded");

  if (!draftItems.length) {
    console.log("nothing for convert");
    return 0;
  }

  draftItems.map((item) => {
    const url = item.to;
    const textSplited = url.split("/");
    const fileName = textSplited[textSplited.length - 1].split(".");
    const folderPath = `public/uploads/${textSplited.slice(2, 4).join("/")}`;

    if (fileName[1] != "webp") {
      const source = tinify.fromFile(url);
      const converted = source.convert({ type: ["image/webp"] });
      const extension = converted.result().extension();
      extension.then((ext) => {
        converted.toFile(`${folderPath}/${fileName[0]}.${ext}`);
        setInJson(mainJson, item.from, "is_converted");
      });
    }
  });
}

convertToWebp();
