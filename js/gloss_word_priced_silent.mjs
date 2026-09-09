import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_word_priced_silent(row) {
  "$plain row";
  "How many sightings of a priced gloss word are the ones at fault, taken off the row so that a ranking or a sum can be asked for by name.";
  "This is the number the repair queue is ordered by: mending the word with the most faulty sightings mends the most prose for one sentence written. The reading that prices the queue and the reading that roots its lossless part both rank by it, and each carried its own one-line copy of this reader under the same local name.";
  ("It is the counting half of a pair over the same row: ",
    fn_name("gloss_word_priced_lossless_is"),
    " says whether the faulty sightings are all of them, and this says how many there are.");
  ("It is called silent because the queue these rows are priced from is the one holding words whose explanations say nothing about them. The pricing itself takes whatever the queue calls a fault and never looks at why, so the word here is the name of the queue rather than a claim about any one sighting.");
  ("A word never met in the store has no row here at all, so nothing in this number stands for a passage nobody has glossed yet.");
  arguments_assert(arguments, 1);
  let silent = property_get(row, "silent");
  return silent;
}
