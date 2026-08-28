import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verses_marks_ordinary_space } from "./bible_glyph_chapters_verses_marks_ordinary_space.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function bible_glyph_chapters_verses_space_wrong_gate_run() {
  "Gate: no drawn verse of the picture Bible puts an ordinary space between two pictures.";
  "IT PASSES AT NOUGHT AND THERE IS NO BASELINE, because there is nothing here a tolerance could be for. A gap between two pictures is the only thing saying they are two words rather than one, and an ordinary space is a quarter the width of the pictures either side of it - so every offender is a verse a reader cannot parse. A gate that starts at nought is the only kind that can honestly refuse the first one.";
  "IT REFUSES THE ORDINARY SPACE ONLY WHERE IT IS WRONG, and it used to refuse it everywhere. That was right while every gap in a verse carried the wide separator; it is wrong now that the wide one is spent only where a pair could be misread, because most of a verse is English and English is set with ordinary spaces. A gate that condemned those would be asking for the thing it was built to prevent.";
  "IT GUARDS A CHARACTER THAT NOBODY CAN SEE. The two spaces look identical on a screen and differ only in width, so a joiner written later with the wrong one in it is invisible in review, invisible in a diff, and invisible on the page to anyone who has not seen the right version. This is the only instrument that can tell them apart, which is why the rule is a gate rather than a line in a note.";
  "IT COUNTS THE VERSES THAT WERE DRAWN beside the verdict. Nothing here is stored - the separator exists only once a verse has been drawn - so a walk that stopped loading chapters hands back no verses and no offenders, and reports all clear having looked at nothing.";
  arguments_assert(arguments, 0);
  let reading = bible_glyph_chapters_verses_marks_ordinary_space();
  let verses_drawn = property_get(reading, "verses_drawn");
  assert_json(verses_drawn, {
    reading,
    hint: "no verse was drawn at all, and this Bible has hundreds written - the walk has stopped reaching the chapters, so every verse is being reported as clean without being drawn",
  });
  let offenders = property_get(reading, "offenders");
  let none = list_empty_is(offenders);
  assert_json(none, {
    offenders,
    hint: text_combine_multiple([
      "these drawn verses put an ordinary space between two pictures, which is a quarter the width of the pictures either side of it and is not the separator this Bible uses there - a reader meeting one sees a single long word nobody wrote. Whatever joined the words here should ask ",
      fn_name("bible_glyph_word_pair_separator"),
      " for the character instead of spelling one",
    ]),
  });
  let r = {
    verses_drawn,
  };
  return r;
}
