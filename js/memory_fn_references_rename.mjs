import { equal_not } from "./equal_not.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function memory_fn_references_rename(before, after) {
  "Follow a rename into memory: rewrite every marked pointer at the old name, and report - without touching - every place the old name is written bare.";
  "The split is the whole design. A marked name is a pointer into the code and has to follow the code, so it is rewritten. A bare name is usually narrative, and a note whose sentence is that something used to be called one thing and is now called another would be turned into nonsense by rewriting it. Nobody can tell those apart from the text, but the person doing the rename can, so they are handed the list instead.";
  "The word boundary on the bare half is what keeps a longer name that merely starts with the old one out of the report. The marked half needs no such care - nothing written in code can spell the marker.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let suffix = ".md";
  let marked = new RegExp("\\$fn " + before + "(?![a-z0-9_])", "g");
  let bare = new RegExp("\\b" + before + "\\b", "g");
  ("a dollar starts a substitution in a replacement string, so the doubled one is how a literal dollar is written - $f happens to be left alone but only by not matching any of the special forms");
  let replacement = "$$fn " + after;
  let rewritten = [];
  let mentioned = [];
  for (let name of names) {
    let is_md = text_ends_with(name, suffix);
    if (not(is_md)) {
      continue;
    }
    let path = path_join([folder, name]);
    let text = await file_read(path);
    let updated = text.replace(marked, replacement);
    let changed = equal_not(text, updated);
    if (changed) {
      await file_overwrite(path, updated);
      let one = {
        note: name,
      };
      list_add(rewritten, one);
    }
    let left = updated.match(bare);
    let none = equal(left, null);
    if (not(none)) {
      let two = {
        note: name,
        count: left.length,
      };
      list_add(mentioned, two);
    }
  }
  let r = {
    rewritten,
    mentioned,
  };
  return r;
}
