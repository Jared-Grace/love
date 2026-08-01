import { text_includes_not } from "./text_includes_not.mjs";
import { memory_index_text } from "./memory_index_text.mjs";
import { memory_note_names } from "./memory_note_names.mjs";
import { memory_note_text } from "./memory_note_text.mjs";
import { list_add } from "./list_add.mjs";
import { memory_note_stems } from "./memory_note_stems.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function memory_index_only_tokens() {
  "Every underscore-shaped name written in the index that no note repeats. An index hook is meant to summarise the note it points at, so a name found only in the index is a fact with nowhere to fall back to - shortening that line would delete it rather than compress it. Read-only.";
  "This is what makes an index shrink safe to do in bulk. The whole reason a hook can be cut is that the note already says it; the names reported here are exactly the places where that is untrue, so they have to be moved into a note first.";
  "A name that answers to a note is dropped, because that is a link rather than a fact.";
  let index_text = await memory_index_text();
  let names = await memory_note_names();
  let notes = [];
  for (let name of names) {
    let text = await memory_note_text(name);
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
    let b = text_includes_not(joined, token);
    return b;
  }
  let only = list_filter(unique, only_is);
  return only;
}
