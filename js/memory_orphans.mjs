import { memory_folder } from "./memory_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_filter } from "./list_filter.mjs";
export async function memory_orphans() {
  "A memory file no one references from MEMORY.md is unreachable from the session-loaded index - it exists on disk but no Claude will ever see it. Return every such orphan markdown file so a Claude can add its pointer. A file counts as referenced when its name appears either as a pointer-line target ']( name.md' (an anchor like '.md#accommodate' still counts) or as a '[[ stem ]]' wikilink inside another entry's hook. Read-only. The reverse leak - a pointer whose file was deleted - is a separate dangling-pointer check.";
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
    let is_the_index = list_includes(ignores, name);
    if (is_the_index) {
      return false;
    }
    let pointer = "](" + name;
    let has_pointer = text_includes(index_text, pointer);
    if (has_pointer) {
      return false;
    }
    let stem = text_suffix_without(name, ".md");
    let wikilink = "[[" + stem + "]]";
    let has_wikilink = text_includes(index_text, wikilink);
    if (has_wikilink) {
      return false;
    }
    return true;
  }
  let orphans = list_filter(names, is_orphan);
  return orphans;
}
