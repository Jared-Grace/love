import { arguments_assert } from "./arguments_assert.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
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
  "What was shared goes back under one name rather than under a name made for each";
  "pair, because the sentence beside it already says which two lists met. A name per";
  "pair was what the nine copies bought, and it is not worth nine copies.";
  arguments_assert(arguments, 3);
  let shared = list_intersection(names, others);
  let apart = list_empty_is(shared);
  assert_json(apart, {
    shared,
    hint,
  });
}
