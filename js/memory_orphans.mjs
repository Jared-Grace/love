import { list_includes_not } from "./list_includes_not.mjs";
import { memory_index_name } from "./memory_index_name.mjs";
import { memory_hub_children } from "./memory_hub_children.mjs";
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
  "A memory file no one references from MEMORY.md is unreachable from the session-loaded index - it exists on disk but no Claude will ever see it. Return every such orphan markdown file so a Claude can add its pointer. A file counts as referenced when its name appears either as a pointer-line target ']( name.md' (an anchor like '.md#accommodate' still counts) or as a '[[ stem ]]' wikilink inside another entry's hook. ONE further hop counts, and only one: a note the index already names may DECLARE children in a '## Children' section, and those children are reachable too. One hop is the limit because it is the only depth where the meaning test stays checkable - you read the parent hook and the child description together and can tell whether the parent would ever surface the child. A longer walk proves a path exists and proves nothing about being found, which would make this gate greener while the guarantee got weaker. Read-only. The reverse leak - a pointer whose file was deleted - is a separate dangling-pointer check.";
  let folder = memory_folder();
  let names = await folder_read(folder);
  let index_name = memory_index_name();
  let index_path = path_join([folder, index_name]);
  let index_text = await file_read(index_path);
  let ignores = [index_name];
  function is_indexed(name) {
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
      return true;
    }
    let stem = text_suffix_without(name, ".md");
    let wikilink = "[[" + stem + "]]";
    let has_wikilink = text_includes(index_text, wikilink);
    return has_wikilink;
  }
  let indexed = list_filter(names, is_indexed);
  let declared = [];
  for (let hub of indexed) {
    let hub_path = path_join([folder, hub]);
    let hub_text = await file_read(hub_path);
    let children = memory_hub_children(hub_text);
    declared = declared.concat(children);
  }
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
    let indexed_here = is_indexed(name);
    if (indexed_here) {
      return false;
    }
    let stem = text_suffix_without(name, ".md");
    let n = list_includes_not(declared, stem);
    return n;
  }
  let orphans = list_filter(names, is_orphan);
  return orphans;
}
