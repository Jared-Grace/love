import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_code_number } from "./text_from_code_number.mjs";
export function bible_glyph_text_space_wrong_positions(text, lookup) {
  "$plain text";
  "$plain lookup";
  "the text is one drawn verse of the picture Bible and the lookup is the glyph name to character table it was drawn with. Both are data to read and neither runs.";
  "Whether a piece of drawn picture Bible text puts an ordinary space between two pictures anywhere in it.";
  ("IT READS THE FINISHED TEXT AND KNOWS NOTHING ABOUT HOW IT WAS BUILT, which is what makes it worth asking. ",
    fn_name("bible_glyph_word_pair_separator"),
    " decides the gap correctly, and a second view that re-joins a finished line, or any other hand that touches the text after it is drawn, can put an ordinary space back without going anywhere near that function.");
  ("A PICTURE HAS TO PASS BOTH TESTS: BE IN THE VOCABULARY, AND BE OUTSIDE WHAT A KEYBOARD TYPES. Each test alone was tried and each alone was wrong. Outside-the-keyboard alone reported the curly quotation marks the chapters are written with, which sit in the same stretch of the numbering as several pictures. In-the-vocabulary alone reported ordinary letters, because a glyph nobody has drawn a character for yet stands in the table as its own English name - so the vocabulary itself was handing back the letters of the word altar.");
  ("IT COLLECTS THE PIECES CHARACTERS ARE MADE OF, NOT THE CHARACTERS. Several of these pictures are written as a surrogate pair or carry a variation selector after them, so the piece standing beside the space is often half of a picture rather than the whole of it - and half of a picture belongs to no other picture and to nothing a chapter is written in, so recognising the half is enough.");
  arguments_assert(arguments, 2);
  let space = text_from_code_number(32);
  let ascii_last = 127;
  let units = new Set();
  for (let character of Object.values(lookup)) {
    for (
      let position = 0;
      less_than(position, character.length);
      position = position + 1
    ) {
      let unit = character.charCodeAt(position);
      if (greater_than(unit, ascii_last)) {
        units.add(unit);
      }
    }
  }
  let index = text.indexOf(space);
  while (greater_than_equal(index, 0)) {
    let difference = subtract(index, 1);
    let v = text.charCodeAt(difference);
    let before = units.has(v);
    if (before) {
      let v2 = text.charCodeAt(index + 1);
      let after = units.has(v2);
      if (after) {
        let between_marks = true;
        return between_marks;
      }
    }
    index = text.indexOf(space, index + 1);
  }
  let none = false;
  return none;
}
