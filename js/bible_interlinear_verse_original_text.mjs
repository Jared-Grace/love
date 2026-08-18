import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_interlinear_verse_original_text(verse) {
  "$plain verse";
  "the verse is one row of the interlinear, holding its words. It is text to read and nothing that runs.";
  "One interlinear verse as a single run of text in the language it was written in.";
  "The interlinear keeps a verse as separate words because every word carries its own parsing and its own number, and a page that wants to SHOW the verse wants the sentence back. Joining it is that one step, kept apart from every page that needs it so no page does it twice.";
  let originals = [];
  for (let word of verse.words) {
    list_add(originals, word.original);
  }
  let text = list_join_space(originals);
  return text;
}
