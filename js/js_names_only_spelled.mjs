import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function js_names_only_spelled(imported, mentions, spellings) {
  arguments_assert(arguments, 3);
  ("Of a set of names, the ones every single mention of which was the reading of the name's own word - given how many times each was mentioned at all and how many of those were spellings.");
  ("Mentioned nowhere is not the same as only ever spelled, and this is where the two are told apart: a name with no mentions at all counts as neither, because there is nothing to replace.");
  let only = [];
  for (let mentioned of imported) {
    let counted = property_get_or_null(mentions, mentioned);
    let told = property_get_or_null(spellings, mentioned);
    let used = counted ? counted : 0;
    let spelled = told ? told : 0;
    let any = greater_than(used, 0);
    let all_spelled = equal(used, spelled);
    let name_only = any && all_spelled;
    if (name_only) {
      list_add(only, mentioned);
    }
  }
  return only;
}
