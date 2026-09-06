import { equal } from "./equal.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { gloss_parsing_sentence_hebrew } from "./gloss_parsing_sentence_hebrew.mjs";
import { gloss_parsing_sentence } from "./gloss_parsing_sentence.mjs";
export function gloss_parsing_sentence_testament(parsing_long, testament_name) {
  "One word's spelled-out parsing said as a plain English sentence, read by whichever of the two languages the testament it stands in is written in.";
  "$plain parsing_long";
  "$plain testament_name";
  "the parsing is the interlinear's own spelling of a word's grammar and the testament is named as the book divisions name it. Both are words to read and neither names anything that runs.";
  "The testament has to be handed in rather than worked out from the parsing, and that is not a convenience. The two languages spell their parsings out of the same English words - Noun, Verb, Preposition, Participle, Perfect - so a reader shown one parsing and asked which language it came from would be guessing, and guessing wrong quietly. Worse, the words they share are the ones they disagree about: perfect names a time in Greek and a way of looking at an action in Hebrew, so a Hebrew word read by the Greek reader comes back with a fluent sentence making a claim about when it happened that the source never made.";
  "Which reader to use is the whole of the decision here, and it is one line because that is all it should be. Everything either reader knows about its own language lives in that reader.";
  let right = ebible_testament_old_name();
  let old_is = equal(testament_name, right);
  if (old_is) {
    let hebrew = gloss_parsing_sentence_hebrew(parsing_long);
    return hebrew;
  }
  let greek = gloss_parsing_sentence(parsing_long);
  return greek;
}
