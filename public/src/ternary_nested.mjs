import { ternary_list } from "../../../love/public/src/ternary_list.mjs";
export function ternary_nested(condition_a, on_a, condition_b, on_b, on_false) {
  let result = ternary_list([condition_a, condition_b], [on_a, on_b], on_false);
  return result;
}
