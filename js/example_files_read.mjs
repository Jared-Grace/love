import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function example_files_read(dir) {
  arguments_assert(arguments, 1);
  ("Everything standing in a folder afterwards, read back as the same shape an example writes its files in - a name beside the text of it.");
  ("The whole folder rather than the files that were put there, because what a command ADDED and what it MOVED are as much of the answer as what it changed. A reading that asked only about the names it started with would report a rename as a deletion.");
  ("Both runners end by asking this. The one that expects a change asks it to compare against what was declared; the one that expects a refusal asks it to prove nothing moved - and until that second one asked, a guard that gave up half way through writing passed exactly like a guard that stopped before touching anything.");
  let names = await folder_read_files(dir);
  async function read(name) {
    let file_path = path_join([dir, name]);
    let source = await file_read(file_path);
    let file = {
      name,
      source,
    };
    return file;
  }
  let files = await list_map_unordered_async(names, read);
  return files;
}
