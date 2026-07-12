import { each_range } from "./each_range.mjs";
import { list_random_item_invoke } from "./list_random_item_invoke.mjs";
export function list_random_item_invoke_count(choices, la, count) {
  let r = list_random_item_invoke(choices, la);
  each_range(count, r);
}
