import { arguments_assert } from "./arguments_assert.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function bless_block_materials_apart_assert(names, others, hint) {
  "$plain hint";
  "Refuses two lists of materials that have any material in common, saying which ones";
  "were shared and what goes wrong when they are.";
  "NINE OF THE CHECKS IN THE MATERIALS GATE ARE THIS ONE CHECK. No two different things";
  "a street is built from may be made of the same material - a roof the colour of the";
  "wall under it, a road the colour of the grass, a drive the colour of the lawn it";
  "crosses - and every one of them was asked in the same three lines with only the two";
  "lists and the wording of the refusal changing. Three lines written nine times is";
  "nine chances for the third of them to be left off, and a check whose refusal is";
  "never raised passes on every run for ever.";
  "THE HINT IS THE CALLER'S AND IS THE WHOLE OF WHAT DIFFERS. What is wrong when a";
  "roof matches a wall is not what is wrong when a road matches a lawn, and a reader";
  "of a red gate needs the sentence about their own case rather than the shape of the";
  "test. So the sentence comes in and nothing else does.";
  "WHAT IS LEFT HERE IS THE MEETING OF THE TWO LISTS AND NOTHING ELSE. Refusing an";
  "empty list, and saying what was in it when it was not, is a question the repo";
  "already answers by name, so it is asked rather than written out again; only the";
  "step that turns two lists into one - the materials they have in common - is this";
  "gate's own. What was shared then goes back under the name that shared refusal";
  "gives it, because the sentence beside it already says which two lists met, and a";
  "name made for each pair was what the nine copies bought.";
  arguments_assert(arguments, 3);
  let shared = list_intersection(names, others);
  list_empty_is_assert_json(shared, hint);
}
