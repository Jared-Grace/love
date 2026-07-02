import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { range_map } from "../../../love/public/src/range_map.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { equal_0 } from "../../../love/public/src/equal_0.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function integer_positive_random_digits_text(digit_count) {
  let dsa = digits();
  let dps = digits_positive();
  function lambda2(item) {
    let first_is = equal_0(item);
    let choices = ternary(first_is, dps, dsa);
    let choice = list_random_item(choices);
    return choice;
  }
  let ds = range_map(digit_count, lambda2);
  let joined = list_join_empty(list);
  return ds;
}
