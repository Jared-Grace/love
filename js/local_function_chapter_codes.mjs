import { arguments_assert } from "./arguments_assert.mjs";
import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
export async function local_function_chapter_codes(fn) {
  "Every chapter one function's own store already holds on this machine, named by the Bible's book-and-chapter codes.";
  "★ IT ASKS THE DISK, NOT A WRITTEN-OUT LIST, so a sweep over the whole store cannot fall behind what the store actually contains. A list typed out beside the files goes stale the first time a chapter is added, and it goes stale silently: the sweep simply skips the new chapter and reports success.";
  "It is the twin of asking which chapters have been published. The two answer different questions and both are worth asking - what is written here, and what a reader can already reach - and a chapter written but not yet sent up is exactly the difference.";
  "A store with no folder yet answers with no chapters rather than refusing, so a sweep may be run before anything has been written.";
  arguments_assert(arguments, 1);
  let folder = storage_function_folder_path(fn.name);
  let names = await folder_read_files_exists_ensure(folder);
  function name_code(name) {
    let parts = text_split(name, ".");
    let code = list_first(parts);
    return code;
  }
  let codes = list_map(names, name_code);
  return codes;
}
