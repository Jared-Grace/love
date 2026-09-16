import { greater_than } from "./greater_than.mjs";
import { gloss_passages_pointers_mets } from "./gloss_passages_pointers_mets.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { gloss_met_pointer } from "./gloss_met_pointer.mjs";
import { gloss_passages_same_as_spread } from "./gloss_passages_same_as_spread.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
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
      let explains = property_get(spread, "explains");
      let several = greater_than(explains, 1);
      if (several) {
        let holders = property_get(spread, "passages");
        let alone = equal(holders, 1);
        if (alone) {
          list_add(
            spreads,
            "one passage holds the verse and explains the word several ways inside itself",
          );
        } else {
          let most = property_get(spread, "most");
          let deep = greater_than(most, 1);
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
