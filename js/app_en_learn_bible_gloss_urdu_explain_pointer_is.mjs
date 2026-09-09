import { app_en_learn_bible_gloss_urdu_explain_pointer_openings } from "./app_en_learn_bible_gloss_urdu_explain_pointer_openings.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_any } from "./list_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_pointer_is(explain) {
  "Whether an Urdu explanation opens by calling the word the same one the reader has already met.";
  "Only the opening is looked at, because that is the only place the word can be doing this job. The same word standing further in is doing ordinary work - saying that two things are the same as each other - and reading it as a pointer would name a great many explanations that explain their word perfectly well.";
  let openings = app_en_learn_bible_gloss_urdu_explain_pointer_openings();
  function opening_found(opening) {
    let found = text_starts_with(explain, opening);
    return found;
  }
  let pointing = list_any(openings, opening_found);
  return pointing;
}
