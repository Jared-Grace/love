import { list_find } from "./list_find.mjs";
import { assert_json } from "./assert_json.mjs";
export function probe_dead_hint_zz(items, same_is) {
  "A throwaway wearing the fault on purpose so the detector can be seen to fire";
  let found = list_find(items, same_is);
  assert_json(found, {
    hint: "this list holds no such thing",
  });
  return found;
}
