import { list_join_empty } from "./list_join_empty.mjs";
import { range_map } from "./range_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { ternary } from "./ternary.mjs";
import { equal_0 } from "./equal_0.mjs";
import { digits_positive } from "./digits_positive.mjs";
import { digits } from "./digits.mjs";
export function integer_positive_random_digits_text(digit_count) {
  let dsa = digits();
  let dps = digits_positive();
  function lambda(item) {
    let first_is = equal_0(item);
    let choices = ternary(first_is, dps, dsa);
    let choice = list_random_item(choices);
    return choice;
  }
  let ds = range_map(digit_count, lambda);
  let joined = list_join_empty(ds);
  return joined;
}
