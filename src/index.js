const tinify = require("tinify");
tinify.key = "myQNgv9dWSwblDgwbrrnXXD0wLznMFGB";

const source = tinify.fromFile("example.com/img1.png");
const converted = source.convert({ type: ["image/webp"] });
const extension = converted.result().extension();
extension.then((ext) => {
  converted.toFile("img." + ext);
});
