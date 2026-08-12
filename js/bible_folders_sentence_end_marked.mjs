import { bible_folders_sentence_end_unmarked } from "./bible_folders_sentence_end_unmarked.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function bible_folders_sentence_end_marked(bible_folders) {
  "Of the bibles a reader chose, the ones a finished sentence can be found in.";
  "Whoever is looking for the end of a sentence asks all of them at once, and one that writes no mark where a sentence stops can only ever answer no - which would hold the question open for ever. So it is left out of the asking rather than answered for, and the readers of it are given what they asked for with nothing added.";
  "An empty answer means nothing chosen can be read this way, and it is a real answer rather than a mistake: there is then no sentence to wait for.";
  let unmarked = bible_folders_sentence_end_unmarked();
  function lambda(bible_folder) {
    let marked = list_includes_not(unmarked, bible_folder);
    return marked;
  }
  let filtered = list_filter(bible_folders, lambda);
  return filtered;
}
