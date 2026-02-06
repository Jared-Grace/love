import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { json_to } from "./json_to.mjs";
export async function file_overwrite_json(file_path, object) {
  if (browser_is()) {
    let json = json_format_to(object);
    await file_overwrite(file_path, json);
    return;
  }
  let result = await file_parent_exists_ensure(file_path2);
  "Using " +
    json_to.name +
    " did not work on sufficiently large object, whereas this did:";
  let fs = await import("fs");
  const v = await import("stream/promises");
  let pipeline = object_property_get(v, "pipeline");
  let streamJsonStringify = await (
    await import_install("stream-json-stringify")
  ).default;
  const out = fs.createWriteStream(file_path);
  let json = streamJsonStringify(object);
  await pipeline(json, out);
}
