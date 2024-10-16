import fs from "fs";

export function setInJson(jsonData, item, newStatus, newTo) {
  const hasItem = jsonData.data.find((obj) => obj.from === item);
  if (hasItem) {
    if (newStatus) {
      hasItem.status = newStatus;
    }
    if (newTo) {
      hasItem.to = newTo;
    }

    fs.writeFile(
      "public/main.json",
      JSON.stringify(jsonData, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing to file", err);
        } else {
          console.log("File has been updated");
        }
      }
    );
  } else {
    console.log("Item not found");
  }
}

export function filterData(status) {
  const mainJson = JSON.parse(fs.readFileSync("public/main.json", "utf-8"));

  return mainJson.data.filter((item) => item.status == status);
}
