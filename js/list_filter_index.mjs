import { list_is_assert_json } from "./list_is_assert_json.mjs";
export function list_filter_index(list, lambda$item$index) {
  list_is_assert_json(list, {
    hint: "list_filter_index expects a list to filter",
  });
  function list_filter_lambda(item, index) {
    let match = lambda$item$index(item, index);
    return match;
  }
  let filtered = list.filter(list_filter_lambda);
  return filtered;
}
