import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verses_space_wrong } from "./bible_glyph_chapters_verses_space_wrong.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function bible_glyph_chapters_verses_space_wrong_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every gap in every drawn verse of the picture Bible is the width its neighbours call for - wide between two pictures, ordinary everywhere else.");
  ("IT PASSES AT NOUGHT AND THERE IS NO BASELINE, because there is nothing here a tolerance could be for. The gap between two words is the only thing saying they are two words rather than one, so every offender is a verse a reader cannot parse. A gate that starts at nought is the only kind that can honestly refuse the first one.");
  ("IT REFUSES BOTH MISTAKES AND NOT ONE OF THEM, which is the whole reason it was widened. Refusing only the narrow gap leaves the opposite defect free: a joiner that widens every gap passes such a gate perfectly while setting all the English in the Bible a picture's width apart. That is the state this repo was actually in, so it is not a hypothetical failure.");
  ("IT GUARDS A CHARACTER THAT NOBODY CAN SEE. The two spaces look identical on a screen and differ only in width, so a joiner written later with the wrong one in it is invisible in review, invisible in a diff, and invisible on the page to anyone who has not seen the right version. This is the only instrument that can tell them apart, which is why the rule is a gate rather than a line in a note.");
  ("IT COUNTS THE VERSES THAT WERE DRAWN beside the verdict. Nothing here is stored - the separator exists only once a verse has been drawn - so a walk that stopped loading chapters hands back no verses and no offenders, and reports all clear having looked at nothing.");
  let reading = bible_glyph_chapters_verses_space_wrong();
  let verses_drawn = property_get(reading, "verses_drawn");
  assert_json(verses_drawn, {
    reading,
    hint: "no verse was drawn at all, and this Bible has hundreds written - the walk has stopped reaching the chapters, so every verse is being reported as clean without being drawn",
  });
  let offenders = property_get(reading, "offenders");
  let none = list_empty_is(offenders);
  let f_name = fn_name("bible_glyph_word_pair_separator");
  assert_json(none, {
    offenders,
    hint: text_combine_multiple([
      "these drawn verses set a gap at the wrong width. Each entry names the position, the character standing there and the one that belongs there: thirty two is the ordinary space and eight thousand one hundred and ninety five is the wide one. An ordinary space between two pictures loses a word boundary and the reader meets one long word nobody wrote; a wide space anywhere else sets English a picture's width apart and a sentence reads as a list. Whatever joined the words here should ask ",
      f_name,
      " for the character instead of spelling one",
    ]),
  });
  let r = {
    verses_drawn,
  };
  return r;
}
