import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { json_compress_object } from "./json_compress_object.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function app_a_download_file(path) {
  "$plain path";
  "One file's contents packed the way the code editor's page keeps them, fetched the first time the page reads that file.";
  arguments_assert(arguments, 1);
  let contents = await file_read(path);
  let data = {
    versions: [contents],
  };
  let c = await json_compress_object(data);
  object_merge_set(c, {
    key: path,
  });
  return c;
}
