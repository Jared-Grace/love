import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_placeholder_wide } from "./html_input_placeholder_wide.mjs";
import { html_value_set } from "./html_value_set.mjs";
export function lyric_timing_screen_passage(parent) {
  arguments_assert(arguments, 1);
  ("$plain parent");
  ("The four boxes saying which passage is being timed and how late the person taps: translation, book, chapter, and the lag to take off afterwards.");
  ("THE BOXES ARRIVE FILLED IN. A screen offered blank asks somebody to remember a book code before they can do anything at all, and the answer is nearly always the psalm most recently worked on, so the filled-in boxes are right more often than they are wrong and are one keystroke to change when they are wrong.");
  ("The lag sits with the passage rather than beside the tapping, because it is a fact about the person and not about the song. It is measured once, by watching the video and seeing the words land late, and then it is the same on every song that person ever times.");
  let version_input = html_input_placeholder_wide(parent, "translation");
  html_value_set(version_input, "bsb");
  let book_input = html_input_placeholder_wide(parent, "book code");
  html_value_set(book_input, "PSA");
  let chapter_input = html_input_placeholder_wide(parent, "chapter");
  html_value_set(chapter_input, "149");
  let earlier_input = html_input_placeholder_wide(parent, "tap lag in seconds");
  html_value_set(earlier_input, "0.3");
  let inputs = {
    version_input,
    book_input,
    chapter_input,
    earlier_input,
  };
  return inputs;
}
