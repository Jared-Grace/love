import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { greater_than_or_equal } from "../../../love/public/src/greater_than_or_equal.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_size_less_1(s) {
  let sz = string_size(s);
  let l = greater_than_or_equal(sz, 1);
  assert_json(l);
  const sz1 = sz - 1;
  return sz1;
}
