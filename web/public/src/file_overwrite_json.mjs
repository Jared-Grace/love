import { import_install } from "../../../love/public/src/import_install.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export async function file_overwrite_json(file_path, object) {
  if (browser_is()) {
    let json = json_format_to(object);
    await file_overwrite(file_path, json);
  } else {
    let fs = await import("fs");
    let streamJsonStringify = await (
      await import_install("stream-json-stringify")
    ).default;
    const out = fs.createWriteStream(file_path);
    let json = streamJsonStringify(object);
    await pipeline(json, out);
  }
}
