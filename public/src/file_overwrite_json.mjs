import { log } from "../../../love/public/src/log.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export async function file_overwrite_json(file_path, object) {
  if (browser_is()) {
  }$e
  let json = json_format_to(object);
  await file_overwrite(file_path, json);
  async function writeBigJson(largeObject) {
    const out = fs.createWriteStream("big.json");
    let v = streamJsonStringify(largeObject);
    await pipeline(v, out);
    console.log("JSON write complete");
  }
  await writeBigJson(largeObject);
}
