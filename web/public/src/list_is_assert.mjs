import { list_is_assert_json } from "../../../love/public/src/list_is_assert_json.mjs";
export function list_is_assert(list) {
  function lambda() {
    let v = {
      n: list_is_assert,
      list,
    };
    return v;
  }
  list_is_assert_json(list, lambda);
  return;
}
