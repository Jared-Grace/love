import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_groups_marks_repeated() {
  "Every group of pictures the tables give a meaning to that spells the same picture more than once, which is the one shape of group this Bible refuses.";
  ("IT IS THE ONE RULE LEFT, AND THAT IS WHY IT IS ABSOLUTE. Groups used to have to be seated on a pair no ordinary pair of words could stand side by side and spell, because the only thing telling a group from two words was a gap a shade wider than an ordinary space and a reader who missed it got a word nobody wrote. The gap is a full picture wide now - see ",
    fn_name("bible_glyph_word_separator"),
    " - so that defence no longer rests on a fifth of a picture, and the rule it justified was asking of groups a safety the rest of the writing system never had: every word boundary in this Bible is a gap judgement, and refusing to seat a group because it adds one more was refusing to trust the thing everything already stands on.");
  ("REPEATING A PICTURE IS THE CASE THE GAP CANNOT CARRY, and it is different in kind rather than in degree. Two different pictures either side of a boundary give a reader a second signal - the shapes change, so the eye finds the join even where the gap is tight. The same picture twice changes nothing at the join, so the gap is the only signal there is, and the reader is being asked to COUNT how many of one sign are in a run. Counting repeated identical signs is the thing human readers are worst at, and no amount of width fixes it.");
  ("THE TABLE THAT SEATED THE ONE DOUBLED GROUP SAID THIS ITSELF before any of it was gated: a group of two different marks has several signals and a doubled one has only the gap. That is the whole finding; all this does is stop it being an aside beside one seating and make it the thing a run can fail on.");
  ("IT ASKS THE VOCABULARY RATHER THAN A LIST OF KNOWN OFFENDERS, so a group seated tomorrow is judged by the same question as the four seated already. The groups are derived from the tables, never typed, so nothing has to be kept in step by hand.");
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let rows = [];
  let offenders = [];
  for (let group of vocabulary) {
    let parts = bible_glyph_group_names(group);
    let seen = {};
    let repeated = [];
    for (let name of parts) {
      let already = property_exists(seen, name);
      if (already) {
        let listed = list_includes(repeated, name);
        if (not(listed)) {
          list_add(repeated, name);
        }
        continue;
      }
      property_set(seen, name, true);
    }
    let none = list_empty_is(repeated);
    if (not(none)) {
      list_add(offenders, group);
    }
    list_add(rows, {
      group,
      parts,
      repeated,
    });
  }
  let r = {
    groups: list_size(vocabulary),
    offenders,
    rows,
  };
  return r;
}
