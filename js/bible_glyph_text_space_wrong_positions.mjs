import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_characters_picture_units } from "./bible_glyph_characters_picture_units.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_text_space_wrong_positions(text, lookup) {
  arguments_assert(arguments, 2);
  ("$plain text");
  ("$plain lookup");
  ("the text is one drawn verse of the picture Bible and the lookup is the glyph name to character table it was drawn with. Both are data to read and neither runs.");
  ("Every place in a piece of drawn picture Bible text where the gap between two things is the wrong width, with what stands there and what should.");
  ("THE RULE IS ONE RULE AND SO THIS IS ONE READING. A gap is wide when a picture stands on both sides of it and ordinary everywhere else; there is no third case. Asked as two separate questions - is an ordinary space ever between pictures, is a wide space ever not - the two answers can be kept in step only by hand, and the day one of them is edited the pair starts disagreeing about what a picture is.");
  ("BOTH DIRECTIONS FAIL SILENTLY AND IN OPPOSITE WAYS. An ordinary space between two pictures loses a word boundary, and the reader meets one long word nobody wrote. A wide space where there is no picture sets English a whole picture's width apart, and the reader meets a list of words instead of a sentence. Neither is visible in a diff, because the two characters look identical on every screen there is.");
  ("IT READS THE FINISHED TEXT AND KNOWS NOTHING ABOUT HOW IT WAS BUILT, which is what makes it worth asking. ",
    fn_name("bible_glyph_word_pair_separator"),
    " decides the gap correctly, and a second view that re-joins a finished line, or any other hand that touches the text after it is drawn, can put the wrong character back without going anywhere near that function.");
  ("WHAT COUNTS AS A PICTURE IS ASKED OF ",
    fn_name("bible_glyph_characters_picture_units"),
    " and is not decided here, because getting it wrong is the classic way to make this reading useless. Both halves of that test are needed and each half alone reports hundreds of verses that are perfectly correct.");
  ("A GAP AT EITHER END OF THE TEXT HAS NOTHING ON ONE SIDE, so it is not between two pictures and an ordinary space is what belongs there. That falls out of the rule rather than being a case: a position off the end of the text belongs to no picture, exactly as a letter does.");
  ("IT HANDS BACK POSITIONS RATHER THAN A YES, because whoever is told about this has to find the character to fix it and the two characters look the same. A number is the only thing that points at one of them.");
  let space = 32;
  let wide = 8195;
  let units = bible_glyph_characters_picture_units(lookup);
  let wrong = [];
  for (let index = 0; less_than(index, text.length); index = index + 1) {
    let unit = text.charCodeAt(index);
    let gap = equal(unit, space) || equal(unit, wide);
    if (gap) {
      let difference = subtract(index, 1);
      let v = text.charCodeAt(difference);
      let before = units.has(v);
      let v2 = text.charCodeAt(index + 1);
      let after = units.has(v2);
      let both = before && after;
      let want = both ? wide : space;
      let mistaken = not_equal(unit, want);
      if (mistaken) {
        list_add(wrong, {
          index,
          stands: unit,
          wanted: want,
        });
      }
    }
  }
  return wrong;
}
