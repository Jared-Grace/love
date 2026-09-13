import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
export function lyric_timing_screen_passage_read(inputs) {
  arguments_assert(arguments, 1);
  ("$plain inputs");
  ("What the passage part of the screen is saying right now: the translation, the recording being timed - its book, its chapter, the verses it sings and the mark that tells it from the other singings of them - and the tap lag still as words.");
  ("IT IS READ AT THE MOMENT OF THE BUTTON, never remembered from when it was filled in. Somebody who chose the wrong chapter fixes it and presses the button again, and a screen holding what it read the first time would go on writing to the wrong file while showing the right passage.");
  ("★ THE ENDS AND THE MARK TRAVEL WITH THE CHAPTER, BECAUSE THE THREE OF THEM TOGETHER ARE WHAT NAMES A FILE. A chapter on its own addresses the plain whole-chapter document, so everything this handed to the opening and the saving reached that one file whatever song was playing: the stanzas, the halves and every second arrangement were unreachable, and an evening tapped against a take was written over the plain recording's times. This is the one place the screen says what it is working on, so it is the place all of it has to be said.");
  ("The book and the chapter come off the choice rather than out of a box, so there is nothing here to convert and nothing that can be half typed. The lag comes back as words because the one place it goes is a command that takes words and does its own converting, and converting it here only to spell it out again there would be two chances to disagree.");
  let version = html_value_get(inputs.version_input);
  let book_code = inputs.chosen.book_code;
  let chapter_number = inputs.chosen.chapter_number;
  let verse_first = inputs.chosen.verse_first;
  let verse_last = inputs.chosen.verse_last;
  let mark = inputs.chosen.mark;
  let earlier_text = html_value_get(inputs.earlier_input);
  let asked = {
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
    mark,
    earlier_text,
  };
  return asked;
}
