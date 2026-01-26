import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_cartesian_product_self } from "../../../love/public/src/list_cartesian_product_self.mjs";
export function app_designs_universal_main(context) {
  let root = object_property_get(context, "root");
  let colors = ["black", "white"];
  let slots = 2;
  let possbilities = list_cartesian_product_self(colors, slots);
  return possbilities;
}
