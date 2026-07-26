import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_add } from "./list_add.mjs";
import { memory_note_stems } from "./memory_note_stems.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function memory_index_only_tokens() {
  "Every underscore-shaped name written in the index that no note repeats. An index hook is meant to summarise the note it points at, so a name found only in the index is a fact with nowhere to fall back to - shortening that line would delete it rather than compress it. Read-only.";
  "This is what makes an index shrink safe to do in bulk. The whole reason a hook can be cut is that the note already says it; the names reported here are exactly the places where that is untrue, so they have to be moved into a note first.";
  "A name that answers to a note is dropped, because that is a link rather than a fact.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let index_name = "MEMORY.md";
  let suffix = ".md";
  let index_path = path_join([folder, index_name]);
  let index_text = await file_read(index_path);
  let notes = [];
  for (let name of names) {
    let is_md = text_ends_with(name, suffix);
    if (not(is_md)) {
      continue;
    }
    let is_index = equal(name, index_name);
    if (is_index) {
      continue;
    }
    let path = path_join([folder, name]);
    let text = await file_read(path);
    list_add(notes, text);
  }
  let joined = notes.join("\n");
  let pattern = /[a-z][a-z0-9]*(?:_[a-z0-9]+)+/g;
  let matches = [...index_text.matchAll(pattern)];
  function inner(m) {
    let word = m[0];
    return word;
  }
  let all = matches.map(inner);
  let unique = [...new Set(all)];
  let stems = await memory_note_stems();
  function only_is(token) {
    let is_note = list_includes(stems, token);
    if (is_note) {
      return false;
    }
    let elsewhere = text_includes(joined, token);
    let b = not(elsewhere);
    return b;
  }
  let only = list_filter(unique, only_is);
  return only;
}
