import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { data_transform } from "./data_transform.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_invert } from "./object_invert.mjs";
export async function function_aliases_restore(before, after) {
  marker("1");
  async function lambda(aliases) {
    let inverted = object_invert(aliases);
    let n = object_property_exists_not(inverted, before);
    if (n) {
      return;
    }
    let acronyms = object_property_get(inverted, before);
    function lambda2(item) {}
    each(list, lambda2);
    object_property_set(aliases, acronyms, after);
    return aliases;
  }
  let v = await data_transform("aliases", {}, lambda);
  return v;
}
