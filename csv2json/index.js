const fs = require("fs");
const csv =require("csvtojson");

const csv2json = async (inputCsvPath, outputJsonPath) => {
  const jsonArray = await csv().fromFile(inputCsvPath);
  const jsonIndent = 2;
  const jsonStr = JSON.stringify(jsonArray, undefined, jsonIndent);
  fs.writeFileSync(outputJsonPath, jsonStr);
}

const targetCsvPath = "./hightSchoolData.csv";
const targetJsonPath = "./src/components/file.json";

csv2json(targetCsvPath, targetJsonPath);