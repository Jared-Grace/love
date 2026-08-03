import { function_name_unmistakable_is } from "./function_name_unmistakable_is.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
export function functions_names_in_text(text, known) {
  "Which of this repo's functions a piece of writing names, each named once. Read-only, pure.";
  "The names are picked out of the writing rather than reported by whoever wrote it, so this works for text nothing was changed to produce - a gate's complaint, a commit message, a note.";
  "Only a word that answers to a real function survives, so an ordinary word in a sentence cannot become an accusation. The list of real names is handed in rather than asked for, because reading every function in every repo is the most expensive thing near here and one run can ask this many times.";
  "A word is only a name where it stands as an identifier would, which is what keeps a name inside a longer word from counting.";
  "Answering to a real function is not enough on its own, because some of this repo's functions are named with a single everyday word. A gate that writes `and each of these` names three functions by that test, and every app ships all three, so the complaint reads as being about every app at once. So a word has to be unmistakably a name before it counts, and a single-word function is simply never found this way - which costs nothing here, since a word every bundle carries could not have told two apps apart anyway.";
  let segments = text_identifier_segments(text);
  let named = [];
  for (let segment of segments) {
    let identifier = property_get(segment, "identifier");
    if (not(identifier)) {
      continue;
    }
    let word = property_get(segment, "text");
    let unmistakable = function_name_unmistakable_is(word);
    if (not(unmistakable)) {
      continue;
    }
    let real = list_includes(known, word);
    if (real) {
      list_add(named, word);
    }
  }
  let unique = list_unique(named);
  return unique;
}
