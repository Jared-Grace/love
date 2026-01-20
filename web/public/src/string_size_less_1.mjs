import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { greater_than_or_equal } from "../../../love/public/src/greater_than_or_equal.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_size_less_1(s) {
  let sz = string_size(s);
  const right = 1;
  let left = sz;
  let l = greater_than_or_equal(sz, right);
  function lambda() {
    let v = {
      left,
      right,
    };
    return v;
  }
  assert_json_get(l, lambda);
  const sz1 = sz - 1;
  return sz1;
}
