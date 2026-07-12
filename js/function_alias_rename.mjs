import { data_aliases_path } from "./data_aliases_path.mjs";
import { each } from "./each.mjs";
import { property_set } from "./property_set.mjs";
import { data_transform } from "./data_transform.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { object_invert } from "./object_invert.mjs";
export async function function_alias_rename(before, after) {
  async function lambda(aliases) {
    let inverted = object_invert(aliases);
    let n = property_exists_not(inverted, before);
    if (n) {
      return aliases;
    }
    let acronyms = property_get(inverted, before);
    function lambda2(acronym) {
      property_set(aliases, acronym, after);
    }
    each(acronyms, lambda2);
    return aliases;
  }
  let d_path = data_aliases_path();
  let v = await data_transform("aliases", {}, lambda, d_path);
  return v;
}
