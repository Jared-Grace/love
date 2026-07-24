import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { path_join } from "./path_join.mjs";
("Write a file-set (a list of {name, source}) into a directory. Shared by the multi-file");
("gate's transform and refusal runners — both start from the same materialized before.");
export async function example_files_materialize(dir, files) {
  async function write(f) {
    let name = property_get(f, "name");
    let source = property_get(f, "source");
    await file_overwrite(path_join([dir, name]), source);
  }
  await list_map_unordered_async(files, write);
}
