import { json_to_try } from "./json_to_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
import { browser_is } from "./browser_is.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_path_temp } from "./file_path_temp.mjs";
export async function file_overwrite_json(file_path, object) {
  if (browser_is()) {
    let json = json_format_to(object);
    await file_overwrite(file_path, json);
    return;
  }
  await file_parent_exists_ensure(file_path);
  let f_name = fn_name("json_to");
  text_combine_multiple([
    "Using ",
    f_name,
    " did not work on sufficiently large object, whereas the following did:",
  ]);
  let fs = await import("fs");
  let temp_path_whole = file_path_temp(file_path);
  ("The sentence above is true of an object too big to be one piece of text and of nothing else. Every other object here is written in one pass, because assembling the same text a piece at a time costs two seconds on a five megabyte record - and that record is rewritten by nearly every command that edits a file, so it was the largest single cost in the whole seam. Asking first and falling back is what keeps both true at once.");
  let json_whole = json_to_try(object);
  if (null_not_is(json_whole)) {
    try {
      await fs.promises.writeFile(temp_path_whole, json_whole);
      await fs.promises.rename(temp_path_whole, file_path);
    } catch (e) {
      function lambda() {}
      await fs.promises.unlink(temp_path_whole).catch(lambda);
      throw e;
    }
    return;
  }
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
    function lambda2() {}
    await fs.promises.unlink(temp_path).catch(lambda2);
    throw e;
  }
}
