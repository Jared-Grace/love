import { json_to_try } from "./json_to_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_path_temp } from "./file_path_temp.mjs";
export async function file_overwrite_json_node(file_path, object) {
  "$plain file_path";
  "$plain object";
  "Writing one record to a real disk as json: the half of a json overwrite that only a build machine can do.";
  "★ IT IS SEPARATE FOR WEIGHT, NOT FOR CLARITY. The check that chooses between this and a browser's own store decides which machine RUNS this and settles nothing about which machine DOWNLOADS it - a bundler follows a plain import whether the branch is walked or not, so every page that saved a record was carrying a streaming json writer AND the npm install that fetches it when it is missing, in order never to run a line of either. Asked for by name at the moment it is wanted, none of it is in the page.";
  "It asks for the whole text first and streams only when there is no whole text to be had. That sentence is true of an object too big to be one piece of text and of nothing else. Every other object here is written in one pass, because assembling the same text a piece at a time costs two seconds on a five megabyte record - and that record is rewritten by nearly every command that edits a file, so it was the largest single cost in the whole seam. Asking first and falling back is what keeps both true at once.";
  "Each write goes to a temp name and is then renamed, because a rename is the one thing a file system does all at once: a reader arriving mid-write sees the whole of the old file or the whole of the new one and never half of either. A failure takes the temp file away and lets the fault travel.";
  arguments_assert(arguments, 2);
  await file_parent_exists_ensure(file_path);
  let f_name = fn_name("json_to");
  text_combine_multiple([
    "Using ",
    f_name,
    " did not work on sufficiently large object, whereas the following did:",
  ]);
  let fs = await import("fs");
  let temp_path_whole = file_path_temp(file_path);
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
