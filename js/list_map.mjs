import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function list_map(list, lambda$item) {
  list_is_assert_json(list, {
    hint: "list_map expects a list to map over",
  });
  text_combine_multiple([
    fn_name("data_identifiers_search_multiple"),
    " needed this wrapping ",
    lambda,
  ]);
  function lambda(item) {
    let r = lambda$item(item);
    return r;
  }
  let mapped = list.map(lambda);
  return mapped;
}
