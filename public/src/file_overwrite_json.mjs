import { log } from "../../../love/public/src/log.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export async function file_overwrite_json(file_path, object) {
  if (browser_is()) {
    let json = json_format_to(object);
    await file_overwrite(file_path, json);
  } else {
    let fs = await import("fs");
    const out = fs.createWriteStream(file_path);
    let json = streamJsonStringify(object);
    await pipeline(json, out);
    console.log("JSON write complete");
  }
}
