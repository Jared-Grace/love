import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function bible_glyph_characters_picture_units(lookup) {
  arguments_assert(arguments, 1);
  ("$plain lookup");
  ("the lookup is the glyph name to character table a verse was drawn with. It is data to read and it does not run.");
  ("Every piece a picture of this Bible is written out of, as a set of code numbers, so that a reader walking finished text can ask of one position whether a picture stands there.");
  ("A PICTURE HAS TO PASS BOTH TESTS: BE IN THE VOCABULARY, AND BE OUTSIDE WHAT A KEYBOARD TYPES. Each test alone was tried and each alone was wrong. Outside-the-keyboard alone reported the curly quotation marks the chapters are written with, which sit in the same stretch of the numbering as several pictures. In-the-vocabulary alone reported ordinary letters, because a glyph nobody has drawn a character for yet stands in the table as its own English name - so the vocabulary itself was handing back the letters of the word altar. Both tests are done here, once, so that no caller can accidentally do half of it.");
  ("IT COLLECTS THE PIECES CHARACTERS ARE MADE OF, NOT THE CHARACTERS. Several of these pictures are written as a surrogate pair or carry a variation selector after them, so the piece standing beside a space is often half of a picture rather than the whole of it - and half of a picture belongs to no other picture and to nothing a chapter is written in, so recognising the half is enough.");
  ("IT IS A SET AND NOT A LIST because every caller asks the same question of it - does this one number belong - and asks it once per space in the Bible. Built as a list that walk would be a walk inside a walk for no reason at all.");
  ("IT IS SEPARATE FROM THE READINGS THAT USE IT because both directions of the same rule need it. One reading refuses an ordinary space between two pictures and the other refuses a wide space that is not between two pictures, and the two would silently disagree about what a picture is the moment either was edited alone. ",
    fn_name("bible_glyph_text_space_wrong_positions"),
    " is the first of them.");
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
  return units;
}
