import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_code_number } from "./text_from_code_number.mjs";
export function bible_glyph_text_marks_ordinary_space_is(text, lookup) {
  "$plain text";
  "$plain lookup";
  "the text is one drawn verse of the picture Bible and the lookup is the glyph name to character table it was drawn with. Both are data to read and neither runs.";
  "Whether a piece of drawn picture Bible text puts an ordinary space between two pictures anywhere in it.";
  ("IT READS THE FINISHED TEXT AND KNOWS NOTHING ABOUT HOW IT WAS BUILT, which is what makes it worth asking. ",
    fn_name("bible_glyph_word_pair_separator"),
    " decides the gap correctly, and a second view that re-joins a finished line, or any other hand that touches the text after it is drawn, can put an ordinary space back without going anywhere near that function.");
  ("A PICTURE IS TOLD FROM EVERYTHING ELSE BY THE VOCABULARY ITSELF rather than by where its number falls. The obvious test - anything outside the range a keyboard types - looked exact and was not: the chapters are written with curly quotation marks, which sit in the same stretch of the numbering as several of the pictures, so a closing quote before a space before a picture was reported as two pictures side by side. The table of pictures is the only thing that knows what a picture is, so the table is what gets asked.");
  ("IT COLLECTS THE PIECES CHARACTERS ARE MADE OF, NOT THE CHARACTERS. Several of these pictures are written as a surrogate pair or carry a variation selector after them, so the piece standing beside the space is often half of a picture rather than the whole of it - and half of a picture belongs to no other picture and to nothing a chapter is written in, so recognising the half is enough.");
  arguments_assert(arguments, 2);
  let space = text_from_code_number(32);
  let units = new Set();
  for (let character of Object.values(lookup)) {
    for (
      let position = 0;
      less_than(position, character.length);
      position = position + 1
    ) {
      let v = character.charCodeAt(position);
      units.add(v);
    }
  }
  let index = text.indexOf(space);
  while (greater_than_equal(index, 0)) {
    let difference = subtract(index, 1);
    let v2 = text.charCodeAt(difference);
    let before = units.has(v2);
    if (before) {
      let v3 = text.charCodeAt(index + 1);
      let after = units.has(v3);
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
