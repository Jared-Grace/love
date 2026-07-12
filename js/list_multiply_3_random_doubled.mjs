import { list_transform_at } from "./list_transform_at.mjs";
import { text_multiply } from "./text_multiply.mjs";
import { list_random_index } from "./list_random_index.mjs";
import { list_multiply } from "./list_multiply.mjs";
export function list_multiply_3_random_doubled(separators) {
  let multiplied = list_multiply(separators, 3);
  let multiplied_index = list_random_index(multiplied);
  function lambda(value) {
    let multiplied2 = text_multiply(value, 2);
    return multiplied2;
  }
  list_transform_at(multiplied, multiplied_index, lambda);
  return multiplied;
}
