import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
export function lyric_timing_screen_passage_read(inputs) {
  arguments_assert(arguments, 1);
  ("$plain inputs");
  ("What the passage boxes are saying right now: the translation, the book, the chapter as a number, and the tap lag still as words.");
  ("THE BOXES ARE READ AT THE MOMENT OF THE BUTTON, never remembered from when they were filled in. Somebody who mistyped a chapter fixes it and presses the button again, and a screen holding what it read the first time would go on writing to the wrong file while showing the right number.");
  ("The chapter comes back as a number because it is one, and everything downstream counts with it. The lag comes back as words because the one place it goes is a command that takes words and does its own converting, and converting it here only to spell it out again there would be two chances to disagree.");
  let version = html_value_get(inputs.version_input);
  let book_code = html_value_get(inputs.book_input);
  let text = html_value_get(inputs.chapter_input);
  let chapter_number = number_from_text(text);
  let earlier_text = html_value_get(inputs.earlier_input);
  let asked = {
    version,
    book_code,
    chapter_number,
    earlier_text,
  };
  return asked;
}
