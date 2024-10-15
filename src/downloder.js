const https = require("https");
const fs = require("fs");

const url = "example.com/img1.png"; // Replace with your image URL
const path = "src/img.png";

if (!fs.existsSync("src/uploads")) {
  fs.mkdirSync("src/uploads");
}

https
  .get(url, (res) => {
    const fileStream = fs.createWriteStream(path);
    res.pipe(fileStream);

    fileStream.on("finish", () => {
      fileStream.close();
      console.log("Download completed.");
    });
  })
  .on("error", (err) => {
    console.error("Error downloading the image:", err.message);
  });
