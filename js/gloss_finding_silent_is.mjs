import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals } from "./property_equals.mjs";
export function gloss_finding_silent_is(finding) {
  "$plain finding";
  "Whether a root-comparison finding is one where the explanation said nothing at all about the root, so that those can be taken out on their own by name.";
  "Comparing a store's explanations against an outside dictionary sorts what it meets into kinds, and this is the kind that could not be grouped any further: the sentence names no origin whatever, so there is no second root to set beside the dictionary's and read. It is also the largest kind by a long way, which is why more than one reading narrows to it, and each was asking the same one-line question in its own middle under the same local name.";
  ("It is the kind-shaped twin of ",
    fn_name("gloss_relation_apart_is"),
    ", which asks the other word these findings are sorted by - not what kind of fault it is, but how the two roots stand to one another.");
  ("Saying nothing is a heavier fault than naming the wrong root, not a lighter one. A wrong root at least offers the reader an origin they can weigh; silence offers nothing, and an origin is the whole of what these sentences were written to give.");
  arguments_assert(arguments, 1);
  let says_nothing = property_equals(finding, "kind", "silent");
  return says_nothing;
}
