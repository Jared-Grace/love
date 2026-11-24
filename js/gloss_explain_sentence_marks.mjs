import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_sentence_marks() {
  "The marks that end a whole sentence inside a word explanation, in both scripts - narrower than the marks that end a thought, which also cut at the colon, the semicolon and the dash.";
  "Every mark here is also on the list of marks that end a thought, so a thought always lies inside exactly one sentence.";
  arguments_assert(arguments, 0);
  let r = ["۔", "؟", ".", "?", "!"];
  return r;
}
