import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_word_priced_lossless_is(row) {
  "$plain row";
  "Whether a priced gloss word is one where nothing standing would be lost by rewriting it, so that the queue can be narrowed to those rows by name.";
  "A row is lossless when every sighting of the word in the store is one of the faulty ones - there is no correct explanation to overwrite, so a single new wording can only improve the store. Those are the rows worth draining without a further thought, and both the reading that prices the queue and the reading that roots the lossless part of it were narrowing to them with their own one-line copy of this question, under the same local name.";
  ("It is the narrowing half of a pair over the same row: ",
    fn_name("gloss_word_priced_silent"),
    " reads how many sightings of the word are at fault, and this says whether that is all of them.");
  ("The answer was decided where the row was priced, by holding the faulty sightings against every sighting the store holds. This only reads back what that reader arrived at, and asking it of a row from anywhere else answers about nothing.");
  arguments_assert(arguments, 1);
  let lossless = property_get(row, "lossless");
  return lossless;
}
