import { negative_not_is_assert_json } from "./negative_not_is_assert_json.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function list_slice_end(list, count) {
  let end = list_size(list);
  let start = subtract(end, count);
  negative_not_is_assert_json(start, {
    hint: "the count to slice from the end shouldn't exceed the list size — did count go past the start?",
    count,
  });
  let result = list_slice(list, start, end);
  return result;
}
