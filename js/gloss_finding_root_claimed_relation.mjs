import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_root_claimed_relation_chained } from "./gloss_root_claimed_relation_chained.mjs";
export function gloss_finding_root_claimed_relation(finding, root, claimed) {
  "How the root one finding's explanation names stands to the root a dictionary gives, read against whatever that finding carries of the dictionary's own roots.";
  "The two words alone cannot settle it. Shallower is decided by one word sitting inside another, and a word sits inside another by accident often enough to matter - so the reading is reached from the pair first and then asked again of the dictionary's own steps, which the finding carries with it.";
  "A finding gathered before those steps were carried is read from the pair alone, exactly as it always was. Older findings are the ordinary case rather than a fault, and reading a missing chain as a contradiction would turn every one of them into a finding it is not.";
  "$plain finding";
  "$plain root";
  "$plain claimed";
  "the first names one disagreement to read, the other two name words to compare. None of them names anything that runs.";
  arguments_assert(arguments, 3);
  let relation = gloss_root_claimed_relation(root, claimed);
  let claimed_chains = property_get_or_null(finding, "claimed_chains");
  if (null_is(claimed_chains)) {
    return relation;
  }
  let r = gloss_root_claimed_relation_chained(
    relation,
    root,
    claimed,
    claimed_chains,
  );
  return r;
}
