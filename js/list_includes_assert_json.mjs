import { assert_json } from "./assert_json.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_includes_assert_json(all, item, json) {
  let includes = list_includes(all, item);
  assert_json(includes, {
    all,
    item,
    json,
  });
}
