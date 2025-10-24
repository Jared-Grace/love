import { string_to } from "../../../love/public/src/string_to.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { null_is_assert } from "../../../love/public/src/null_is_assert.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let s = {};
  let localStorage = {
    getItem: function getItem(storage_local_key) {
      let exists = object_property_exists(s, storage_local_key);
      if (not(exists)) {
        let v2 = null;
        return v2;
      }
    },
    setItem: function setItem(storage_local_key, v) {
      v = string_to(v);
      object_property_set(s, storage_local_key, v);
    },
  };
  global.localStorage = localStorage;
  let app_fn = sandbox;
  const key = "test";
  let value = storage_local_get(app_fn, key);
  null_is_assert(value);
  const v = 123;
  storage_local_set(app_fn, key, v);
  let value2 = storage_local_get(app_fn, key);
}
