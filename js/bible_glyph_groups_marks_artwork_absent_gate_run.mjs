import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_groups_marks_artwork_absent } from "./bible_glyph_groups_marks_artwork_absent.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function bible_glyph_groups_marks_artwork_absent_gate_run() {
  "Gate: every half of every group of pictures has a picture in the artwork set.";
  "IT PASSES AT NOUGHT AND THERE IS NO BASELINE. A group is two pictures touching and nothing else; a half the set cannot draw falls back to the reader's own font, or to English letters, and the pair stops being one word. There is no amount of that worth tolerating, so there is nothing for a baseline to hold.";
  "IT REFUSES A DECISION THAT IS FINE ANYWHERE ELSE. Recording that the artwork set has no picture for a glyph is a real and honest answer for a glyph standing alone - it costs that word its drawing and nothing more. This gate says the answer stops being available the moment that glyph is also half of a group, and it is the only thing that would say so: both tables are correct on their own terms and only the pair of them is wrong.";
  "IT COUNTS THE HALVES THAT WERE WALKED beside the verdict. Three groups is a short list and will stay short, so an all-clear over six halves and an all-clear over none look the same without the count - and the second of those is a walk that has stopped reaching the tables.";
  arguments_assert(arguments, 0);
  let reading = bible_glyph_groups_marks_artwork_absent();
  let halves_walked = property_get(reading, "halves_walked");
  assert_json(halves_walked, {
    reading,
    hint: "no half of any group was looked at, and this Bible seats groups - the walk has stopped reaching the tables, so every group is being reported as drawable without being looked at",
  });
  let offenders = property_get(reading, "offenders");
  let none = list_empty_is(offenders);
  assert_json(none, {
    offenders,
    hint: "these groups are seated on a picture the artwork set cannot draw, so one half arrives from the reader's own font - or, for a glyph with no character at all, as the English word in letters - and the two halves stop reading as one word. Either buy the artwork for the named glyph, or seat these words on a group whose halves are both drawn",
  });
  let r = {
    halves_walked,
  };
  return r;
}
