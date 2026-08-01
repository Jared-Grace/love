import { memory_folder } from "./memory_folder.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { path_join } from "./path_join.mjs";
import { file_identifier_replace } from "./file_identifier_replace.mjs";
import { property_set } from "./property_set.mjs";
export async function memory_notes_word_rename(
  notes_text,
  word_before,
  word_after,
) {
  "Swap one ordinary word for another across a named set of memory notes, and answer how many places each note took. A vocabulary word drifts into the notes the way jargon drifts into speech - somebody uses it once and it spreads - and retiring it later is a sweep, not an edit.";
  "The set of notes is a parameter rather than the whole folder on purpose. The same word means different things in different notes: a square on a game board in one, a rendered line of a sermon in another. Nothing in the text can tell those apart, so the caller who knows which is which hands over the list.";
  "Only a word standing on its own is swapped, so a longer word that merely contains it is left alone.";
  let notes = text_split_comma(notes_text);
  let folder = memory_folder();
  let counts = {};
  for (let note of notes) {
    let path = path_join([folder, note]);
    let sites = await file_identifier_replace(path, word_before, word_after);
    property_set(counts, note, sites);
  }
  return counts;
}
