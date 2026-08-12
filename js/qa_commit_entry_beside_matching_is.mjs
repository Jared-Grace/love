import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { json_equal } from "./json_equal.mjs";
export function qa_commit_entry_beside_matching_is(remembered, heads) {
  "$plain remembered";
  "$plain heads";
  arguments_assert(arguments, 2);
  ("Whether an answer already written down was worked out over the very same neighbouring repos we are standing beside now.");
  ("A run of the gates does not see one repo. Names are resolved by stepping out of this folder and back down into a neighbour, and the sweeps that ask after every function walk the neighbours too, so what a run saw was this repo's commit and every neighbour's together. An answer filed under this repo's commit alone can be handed back to somebody standing beside different neighbours, and it is handed back without a single gate being asked again.");
  ("An entry carrying no word about its neighbours is never matched, and that is the whole of the rule rather than a detail of it. Every answer written before this was asked was worked out with the neighbours left living - so those entries do not merely lack the word, they are answers about contents nobody recorded. Treating a missing word as agreement would hand back exactly the answers this was written to stop.");
  ("Being wrong in the harmless direction is the point. Saying no when the answer was really usable costs one run of the gates; saying yes when it was not costs a wrong answer, quietly, to everybody who asks afterwards.");
  let written = property_get_or_null(remembered, "beside");
  let unwritten = null_is(written);
  if (unwritten) {
    return false;
  }
  let same = json_equal(written, heads);
  return same;
}
