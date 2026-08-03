import { property_get_or_null } from "./property_get_or_null.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function js_names_only_spelled(imported, mentions, spellings) {
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
