import { function_param_swap_end } from "../../../love/public/src/function_param_swap_end.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "./equal.mjs";
export async function property_equals_try(item, property_name, property_value) {
  await function_param_swap_end(f_name);
  let left = property_get(item, property_name);
  let eq = equal(left, property_value);
  return eq;
}
