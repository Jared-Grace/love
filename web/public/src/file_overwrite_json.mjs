import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { file_path_temp } from "../../../love/public/src/file_path_temp.mjs";
export async function file_overwrite_json(file_path, object) {
  if (browser_is()) {
    let json = json_format_to(object);
    await file_overwrite(file_path, json);
    return;
  }
  await file_parent_exists_ensure(file_path);
  text_combine_multiple([
    "Using ",
    json_to.name,
    " did not work on sufficiently large object, whereas the following did:",
  ]);
  let fs = await import("fs");
  let v = await import("stream/promises");
  let pipeline = property_get(v, "pipeline");
  let streamJsonStringify = await (
    await import_install("stream-json-stringify")
  ).default;
  let temp_path = file_path_temp(file_path);
  try {
    let out = fs.createWriteStream(temp_path);
    let json = streamJsonStringify(object);
    await pipeline(json, out);
    await fs.promises.rename(temp_path, file_path);
  } catch (e) {
    await fs.promises.unlink(temp_path).catch(() => {});
    throw e;
  }
}
