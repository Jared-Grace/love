import { list_is_assert_json } from "./list_is_assert_json.mjs";
export function list_is_assert(list) {
  function lambda() {
    let v = {
      list,
    };
    return v;
  }
  list_is_assert_json(list, lambda);
}
