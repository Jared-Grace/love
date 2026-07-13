import { list_is_assert_json } from "./list_is_assert_json.mjs";
export function list_filter(list, lambda$item) {
  list_is_assert_json(list, {
    hint: "list_filter expects a list to filter",
  });
  function list_filter_lambda(item) {
    let match = lambda$item(item);
    return match;
  }
  let filtered = list.filter(list_filter_lambda);
  return filtered;
}
