import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
export function lyric_timing_screen_passage_read(inputs) {
  arguments_assert(arguments, 1);
  ("$plain inputs");
  ("What the passage part of the screen is saying right now: the translation, the book, the chapter as a number, and the tap lag still as words.");
  ("IT IS READ AT THE MOMENT OF THE BUTTON, never remembered from when it was filled in. Somebody who chose the wrong chapter fixes it and presses the button again, and a screen holding what it read the first time would go on writing to the wrong file while showing the right passage.");
  ("The book and the chapter come off the choice rather than out of a box, so there is nothing here to convert and nothing that can be half typed. The lag comes back as words because the one place it goes is a command that takes words and does its own converting, and converting it here only to spell it out again there would be two chances to disagree.");
  let version = html_value_get(inputs.version_input);
  let book_code = inputs.chosen.book_code;
  let chapter_number = inputs.chosen.chapter_number;
  let earlier_text = html_value_get(inputs.earlier_input);
  let asked = {
    version,
    book_code,
    chapter_number,
    earlier_text,
  };
  return asked;
}
