import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
export function bible_glyph_marks_open_for_groups() {
  "Every picture this Bible can write, as a half a new group of pictures may be seated on, with what the artwork set calls each one and how many two-picture groups the vocabulary now offers.";
  "IT IS THE WHOLE VOCABULARY AND THAT IS THE ANSWER RATHER THAN A MISSING FILTER. Until 2026-08-27 a group could only be seated on a picture no ordinary word could stand beside, which left two of the ninety eight and refused a mark to a Hebrew name said of God alone. What removed that rule was the word gap growing to a full picture wide: the gap is the only punctuation this writing system has, every word boundary on every page already rests on a reader seeing it, and refusing a group one more gap was asking of groups a safety nothing else here has.";
  ("ONE REFUSAL SURVIVES AND IT IS NOT ABOUT THE GAP. A group may not spell the same picture twice. With two different pictures the shapes change where they join and the eye has a second signal to read; with one picture repeated the gap is the only signal there is and the reader has to count. That is the case a gap cannot carry however wide it is drawn, and it is the whole of what `",
    fn_name("fn_name"),
    '("',
    fn_name("bible_glyph_groups_marks_repeated_gate_run"),
    '")` refuses.');
  ("IT COUNTS THE PAIRS RATHER THAN LEAVING THE READER TO MULTIPLY, because the size of the opening is the argument for having made it. Two halves out of ninety eight is a rule that says no to almost everything; every ordered pair of two different pictures is a vocabulary, and a number says that where a rule change does not.");
  ("WHAT THE ARTWORK SET CALLS IT TRAVELS WITH IT, because a picture with no artwork decision cannot be seated without turning a gate red. A picture the set has no name for still belongs here - it is open, and what it costs is a drawing rather than a rethink - so the missing name is reported rather than the picture being dropped.");
  ("THE GROUPS ALREADY SEATED COME BACK TOO, so that a reader choosing a pair can see what the tables have spent so far without asking a second question.");
  arguments_assert(arguments, 0);
  let artwork = {};
  for (let entry of bible_glyph_artwork_names()) {
    let glyph_name = property_get(entry, "glyph");
    let set_name = property_get(entry, "asset");
    property_set(artwork, glyph_name, set_name);
  }
  let characters = bible_glyph_characters();
  let open = [];
  for (let character of characters) {
    let name = property_get(character, "name");
    list_add(open, {
      name,
      character: property_get(character, "character"),
      artwork_name: property_get_or_null(artwork, name),
    });
  }
  let count = list_size(open);
  let others = subtract(count, 1);
  let pairs = multiply(count, others);
  let seated = bible_glyph_groups_vocabulary();
  let r = {
    vocabulary: count,
    pairs,
    seated,
    open,
  };
  return r;
}
