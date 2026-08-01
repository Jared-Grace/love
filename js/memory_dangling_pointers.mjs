import { memory_index_name } from "./memory_index_name.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { memory_pointer_tokens } from "./memory_pointer_tokens.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function memory_dangling_pointers() {
  "A line in the index that points at a file no longer on disk is the worst of the three leaks, because it does not look like one. The index reads as complete, a Claude follows the hook to the entry it promises, and finds nothing there. Return every pointer target that has no file, so a Claude can restore the entry or drop the line. Read-only.";
  "This is the reverse of the orphan check next door: that one finds a file no line reaches, this one finds a line reaching no file. Which line a pointer is read out of is decided by the reader this calls, and a corpus pins that reading, because the index resolves cleanly today and a sweep that finds nothing would say the same whether the reading worked or not.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let index_name = "MEMORY.md";
  let index_path = path_join([folder, index_name]);
  let index_text = await file_read(index_path);
  let targets = memory_pointer_tokens(index_text);
  function is_dangling(target) {
    let exists = list_includes(names, target);
    if (exists) {
      return false;
    }
    return true;
  }
  let dangling = list_filter(targets, is_dangling);
  return dangling;
}
