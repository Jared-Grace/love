import { storage_local_exists } from "./storage_local_exists.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function storage_local_set_exists_not(app_fn, key, value) {
  let e = storage_local_exists(app_fn, key);
  not_assert_json(e, {
    hint: "this key shouldn't already be set before setting it fresh — was it already set?",
    key,
  });
  storage_local_set(app_fn, key, value);
}
