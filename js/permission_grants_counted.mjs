import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
export function permission_grants_counted(flagged) {
  "the flagged grants with each one's reasons reduced to how many there were";
  "the baseline stores the count rather than the sentences, because a reason is written for a person to read and gets reworded — storing the wording would make an edit to a sentence look exactly like a new hole. the count still moves when a grant starts failing for a reason it did not fail for before, which is the thing worth catching.";
  let counted = [];
  for (let entry of flagged) {
    let name = property_get_name(entry);
    let reasons = property_get(entry, "refusals");
    let one = {
      name,
      refusals: reasons.length,
    };
    list_add(counted, one);
  }
  return counted;
}
