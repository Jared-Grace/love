import { data_aliases_path } from "../../../love/public/src/data_aliases_path.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
import { object_invert } from "../../../love/public/src/object_invert.mjs";
export async function function_alias_rename(before, after) {
  async function lambda(aliases) {
    let inverted = object_invert(aliases);
    let n = property_exists_not(inverted, before);
    if (n) {
      return aliases;
    }
    let acronyms = object_property_get(inverted, before);
    function lambda2(acronym) {
      object_property_set(aliases, acronym, after);
    }
    each(acronyms, lambda2);
    return aliases;
  }
  let d_path = data_aliases_path();
  let v = await data_transform("aliases", {}, lambda, d_path);
  return v;
}
