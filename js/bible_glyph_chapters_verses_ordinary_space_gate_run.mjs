import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verses_ordinary_space } from "./bible_glyph_chapters_verses_ordinary_space.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function bible_glyph_chapters_verses_ordinary_space_gate_run() {
  "Gate: no drawn verse of the picture Bible holds an ordinary space.";
  "IT PASSES AT NOUGHT AND THERE IS NO BASELINE, because there is nothing here a tolerance could be for. Every drawn verse was full of ordinary spaces until the separator changed, and every one of them lost its word boundaries in plain text; now none are, and one coming back is one verse a reader cannot parse. A gate that starts at nought is the only kind that can honestly refuse the first offender.";
  "IT GUARDS A CHARACTER THAT NOBODY CAN SEE. The separator and an ordinary space look identical on a screen and differ only in width, so a joiner written later with a space in it is invisible in review, invisible in a diff, and invisible on the page to anyone who has not seen the right version. This is the only instrument that can tell them apart, which is why the rule is a gate rather than a line in a note.";
  "IT COUNTS THE VERSES THAT WERE DRAWN beside the verdict. Nothing here is stored - the separator exists only once a verse has been drawn - so a walk that stopped loading chapters hands back no verses and no offenders, and reports all clear having looked at nothing.";
  arguments_assert(arguments, 0);
  let reading = bible_glyph_chapters_verses_ordinary_space();
  let verses_drawn = property_get(reading, "verses_drawn");
  assert_json(verses_drawn, {
    reading,
    hint: "no verse was drawn at all, and this Bible has hundreds written - the walk has stopped reaching the chapters, so every verse is being reported as clean without being drawn",
  });
  let offenders = property_get(reading, "offenders");
  let none = list_empty_is(offenders);
  assert_json(none, {
    offenders,
    hint: "these drawn verses hold an ordinary space, which is a quarter the width of the pictures either side of it and is not the separator this Bible uses - a reader meeting one sees a single long word nobody wrote. Whatever joined the words here should ask the named separator for the character instead of spelling one",
  });
  let r = {
    verses_drawn,
  };
  return r;
}
