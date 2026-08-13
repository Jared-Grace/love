import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
import { equal } from "./equal.mjs";
export function app_shared_bible_mode_label(mode) {
  "How to name a way of reading to somebody choosing one, in words rather than in the word the link carries.";
  let verse = app_shared_bible_mode_verse();
  let one_verse = equal(mode, verse);
  if (one_verse) {
    let said = "One verse at a time";
    return said;
  }
  let said2 = "The whole chapter";
  return said2;
}
