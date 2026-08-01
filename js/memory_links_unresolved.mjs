import { list_includes_not } from "./list_includes_not.mjs";
import { text_code_spans_without } from "./text_code_spans_without.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { list_add } from "./list_add.mjs";
import { memory_wikilink_tokens } from "./memory_wikilink_tokens.mjs";
import { memory_note_stems } from "./memory_note_stems.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
export async function memory_links_unresolved() {
  "Every double-bracket name written anywhere in memory that no note answers to. This is the raw set, not the verdict: most of what lands here is not a fault at all, and deciding which entries are faults is the job of the checks built on top. Read-only.";
  "Two kinds of innocent entry turn up here and always will. A peer writing about code puts a function or field name in brackets, and a note about how links are written quotes a bare example of one. Neither names a note, and neither ever will.";
  "Shared by the checks that judge these, so a link cannot be a fault to one of them and invisible to another.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let suffix = ".md";
  let texts = [];
  for (let name of names) {
    let is_md = text_ends_with(name, suffix);
    if (not(is_md)) {
      continue;
    }
    let path = path_join([folder, name]);
    let text = await file_read(path);
    list_add(texts, text);
  }
  let joined = texts.join("\n");
  ("a note that explains how links are written has to show one, and the note defining the marker convention was the first thing the check reported. what is quoted as code is an example being shown, not a link being made");
  let prose = text_code_spans_without(joined);
  let links = memory_wikilink_tokens(prose);
  let stems = await memory_note_stems();
  function unresolved_is(link) {
    let b = list_includes_not(stems, link);
    return b;
  }
  let unresolved = list_filter(links, unresolved_is);
  return unresolved;
}
