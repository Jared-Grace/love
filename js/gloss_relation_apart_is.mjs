import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals } from "./property_equals.mjs";
export function gloss_relation_apart_is(row) {
  "$plain row";
  "Whether the two roots a gloss disagreement holds stand apart from one another, so that those can be taken out on their own by name.";
  ("Standing apart is the last of the five readings ",
    fn_name("gloss_root_claimed_relation"),
    " gives a pair of roots: not the same word spelled two ways, neither one sitting inside the other, and not sharing a long enough run of letters to be kin. The other four are differences about how far back to stop or how to spell it; this one is the disagreement proper, because no reading of the word makes both roots true at once. So more than one reading narrows to it, and each was asking the same one-line question in its own middle under its own local name.");
  ("It is the relation-shaped twin of ",
    fn_name("gloss_finding_silent_is"),
    ", which asks the other word these are sorted by - not how the two roots stand to one another, but what kind of fault was met.");
  ("★ WHAT COMES BACK IS ONLY AS SOUND AS THE PAIR IT WAS ASKED ABOUT. The reading it stands on says apart for a word held against its own root as readily as for two roots held against each other, and in the first case it is usually wrong - a Cebuano suffix drops a vowel out of the root and breaks the shared run. That caveat is written out in full on ",
    fn_name("gloss_root_claimed_relation"),
    " and belongs to every reader of this one.");
  ("The word this reads was decided where the two roots were compared, and this only reads it back. A row from a reading that never compared roots carries nothing under it and answers no.");
  arguments_assert(arguments, 1);
  let standing_apart = property_equals(row, "relation", "apart");
  return standing_apart;
}
