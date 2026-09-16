import { property_greater_than } from "./property_greater_than.mjs";
import { property_equals } from "./property_equals.mjs";
import { gloss_passages_pointers_mets } from "./gloss_passages_pointers_mets.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { gloss_met_pointer } from "./gloss_met_pointer.mjs";
import { gloss_passages_same_as_spread } from "./gloss_passages_same_as_spread.mjs";
import { list_add } from "./list_add.mjs";
export function gloss_passages_pointers_spreads(passages, lambda$pointer_is) {
  "For every pointing explanation in a chapter whose address catches more than one explanation, a plain sentence saying where those explanations are lying.";
  "$plain passages";
  "the passages are the whole chapter in reading order.";
  "Only the refused ones are described, because an address that caught exactly one has nothing to explain. Sentences rather than numbers, so that counting them says which of the two repairs is the one needed.";
  let mets = gloss_passages_pointers_mets(passages, lambda$pointer_is);
  let spreads = [];
  for (let met of mets) {
    let missing = null_is(met);
    if (not(missing)) {
      let pointer = gloss_met_pointer(met);
      let spread = gloss_passages_same_as_spread(passages, pointer);
      let several = property_greater_than(spread, "explains", 1);
      if (several) {
        let alone = property_equals(spread, "passages", 1);
        if (alone) {
          list_add(
            spreads,
            "one passage holds the verse and explains the word several ways inside itself",
          );
        } else {
          let deep = property_greater_than(spread, "most", 1);
          if (deep) {
            list_add(
              spreads,
              "several passages hold the verse, and one of them explains the word several ways inside itself",
            );
          } else {
            list_add(
              spreads,
              "several passages hold the verse, each explaining the word once",
            );
          }
        }
      }
    }
  }
  return spreads;
}
