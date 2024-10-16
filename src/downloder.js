import https from "https";
import fs from "fs";
import { setInJson, filterData } from "./jsonHandller.js";

function downlod_from_host() {
  const mainJson = JSON.parse(fs.readFileSync("public/main.json", "utf-8"));
  const draftItems = filterData("draft");

  if (!draftItems.length) {
    console.log("nothing for downlod");
    return 0;
  }

  draftItems.map((item) => {
    const url = item.from;
    const textSplited = url.split("/");
    const fileName = textSplited[textSplited.length - 1];
    const folderPath = `public/uploads/${textSplited
      .slice(5, 7)
      .join("/")
      .toString()}`;

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    https
      .get(url, (res) => {
        const fileStream = fs.createWriteStream(`${folderPath}/${fileName}`);
        res.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          setInJson(
            mainJson,
            item.from,
            "is_downloded",
            `${folderPath}/${fileName}`
          );
          console.log("Download completed.");
        });
      })
      .on("error", (err) => {
        console.error("Error downloading the image:", err.message);
      });
  });
}

downlod_from_host();
