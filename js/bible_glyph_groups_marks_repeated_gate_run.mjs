import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_groups_marks_repeated } from "./bible_glyph_groups_marks_repeated.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function bible_glyph_groups_marks_repeated_gate_run() {
  "Gate: no group of pictures is seated on the same picture twice.";
  ("IT PASSES AT NOUGHT AND THERE IS NO BASELINE, because this is the last structural rule groups have and a rule with a tolerance is not one. The rule it replaced - that a group had to be seated on a pair no two ordinary words could stand side by side and spell - was ratcheted, correctly, because it was refusing things that were merely risky and eight of them were already seated. This refuses the one shape a reader cannot resolve at all, and the first offender is as bad as the eighth.",
    " See ",
    fn_name("bible_glyph_groups_marks_repeated"),
    " for why the two rules parted company, and ",
    fn_name("bible_glyph_word_separator"),
    " for what changed underneath them.");
  ("WHAT IT REFUSES LOOKS LIKE A GOOD IDEA, which is the reason it has to be a gate rather than a note. Doubling a picture is expressive - two walking figures for following, two of anything for more of it - and the pictures are expensive, so composing a new meaning out of one you already have is exactly the move a person reaches for when the vocabulary is tight. It reads well in the table and fails in the one place nobody is looking: a reader counting how many of one sign are in a run.");
  ("IT COUNTS THE GROUPS IT WALKED beside the verdict. The groups are derived from the tables rather than typed, so a walk that stopped reaching them hands back nothing to refuse and passes - which is this gate reporting all clear while reading no groups at all, and it is the shape of failure this whole family has taken before.");
  arguments_assert(arguments, 0);
  let reading = bible_glyph_groups_marks_repeated();
  let groups = property_get(reading, "groups");
  assert_json(groups, {
    reading,
    hint: "no group of pictures was found in either root table, and this Bible has several - the walk has stopped reaching its sources, so every group is being reported as safe without being looked at",
  });
  let offenders = property_get(reading, "offenders");
  let none = list_empty_is(offenders);
  assert_json(none, {
    offenders,
    hint: "these groups spell the same picture twice, so the only thing telling a reader where one word ends is the gap - with two different pictures the shapes change at the join and the gap has help, and with the same picture twice it has none and the reader has to count. Seat the meaning on a pair of different pictures instead, which the whole vocabulary is now open for",
  });
  let r = {
    groups,
  };
  return r;
}
