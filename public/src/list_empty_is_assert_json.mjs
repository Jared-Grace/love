import { marker } from "../../../love/public/src/marker.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
export function list_empty_is_assert_json(list, json) {
  marker("1");
  let e = list_empty_is(list);
  assert_json(e, {
    list,
    json,
  });
}
