import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function sandbox() {
  let list = await ebible_verses("engbsb", "GEN01");
  function lambda(item) {
    let text = object_property_get(item, "text");
  }
  each(list, lambda);
  return list;
}
