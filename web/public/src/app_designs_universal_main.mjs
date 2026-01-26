import { list_cartesian_product_self } from "../../../love/public/src/list_cartesian_product_self.mjs";
export function app_designs_universal_main() {
  let colors = ["black", "white"];
  let slots = 2;
  let possbilities = list_cartesian_product_self(colors, slots);
  return possbilities;
}
