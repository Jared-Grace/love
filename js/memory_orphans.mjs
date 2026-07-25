import { memory_folder } from "./memory_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function memory_orphans() {
  ("A memory file whose name appears in no pointer line of MEMORY.md is unreachable from the session-loaded index - it exists on disk but no Claude will ever see it. Return every such orphan markdown file so a Claude can add its pointer. Read-only. The reverse leak - a pointer whose file was deleted - is a separate dangling-pointer check.");
  let folder = memory_folder();
  let names = await folder_read(folder);
  let index_name = "MEMORY.md";
  let index_path = path_join([folder, index_name]);
  let index_text = await file_read(index_path);
  let ignores = [index_name];
  function is_orphan(name) {
    let is_md = text_ends_with(name, ".md");
    let is_not_md = not(is_md);
    if (is_not_md) {
      return false;
    }
    let is_index = list_includes_not(ignores, name);
    let is_the_index = not(is_index);
    if (is_the_index) {
      return false;
    }
    let unreferenced = text_includes_not(index_text, name);
    return unreferenced;
  }
  let orphans = list_filter(names, is_orphan);
  return orphans;
}
