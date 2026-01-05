import { import_install } from "../../../love/public/src/import_install.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export async function file_overwrite_json(file_path, object) {
  if (true) {
    let json = json_format_to(object);
    await file_overwrite(file_path, json);
  } else {
    let fs = await import("fs");
    let streamJsonStringify = await import_install("stream-json-stringify");
    const out = fs.createWriteStream(file_path);
    let json = streamJsonStringify(object);
    await pipeline(json, out);
  }
}
