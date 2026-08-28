import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_code_number } from "./text_from_code_number.mjs";
export function bible_glyph_text_marks_ordinary_space_is(text) {
  "$plain text";
  "the text is one drawn verse of the picture Bible. It is data to read and it does not run.";
  "Whether a piece of drawn picture Bible text puts an ordinary space between two pictures anywhere in it.";
  ("IT READS THE FINISHED TEXT AND KNOWS NOTHING ABOUT HOW IT WAS BUILT, which is what makes it worth asking. ",
    fn_name("bible_glyph_word_pair_separator"),
    " decides the gap correctly, and a second view that re-joins a finished line, or any other hand that touches the text after it is drawn, can put an ordinary space back without going anywhere near that function.");
  ("A PICTURE IS TOLD FROM A LETTER BY BEING OUTSIDE THE ASCII RANGE, which is exact for this Bible rather than a guess. Everything drawn here is either one of the pictures - all of them far above that range - or the English and punctuation the chapters are written in, which is typed on a keyboard and is entirely below it. So a space with a code above one hundred and twenty seven on each side is a space between two pictures, and nothing else is.");
  ("IT LOOKS AT CODE UNITS AND NOT AT WHOLE CHARACTERS ON PURPOSE. Several of these pictures are written as a surrogate pair or carry a variation selector after them, so the unit beside the space is often half of a picture rather than the whole of it - and half of a picture is still above the range, which is the only thing being asked.");
  arguments_assert(arguments, 1);
  let space = text_from_code_number(32);
  let ascii_last = 127;
  let index = text.indexOf(space);
  while (index >= 0) {
    let before = text.charCodeAt(index - 1);
    let after = text.charCodeAt(index + 1);
    if (before > ascii_last) {
      if (after > ascii_last) {
        let between_marks = true;
        return between_marks;
      }
    }
    index = text.indexOf(space, index + 1);
  }
  let none = false;
  return none;
}
