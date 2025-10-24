import { log } from "../../../love/public/src/log.mjs";
import { storage_local_keys_global_app } from "../../../karate_code/public/src/storage_local_keys_global_app.mjs";
import { storage_local_disable } from "../../../love/public/src/storage_local_disable.mjs";
import { true_is_assert } from "../../../love/public/src/true_is_assert.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { null_is_assert } from "../../../love/public/src/null_is_assert.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
      let value3 = object_property_get(s, storage_local_key);
      return value3;
    },
    setItem: function setItem(storage_local_key, v) {
      v = string_to(v);
      object_property_set(s, storage_local_key, v);
    },
  };
  global.localStorage = localStorage;
  let app_fn = sandbox;
  ("returns null");
  const key = "test";
  let value = storage_local_get(app_fn, key);
  null_is_assert(value);
  ("set and get value");
  const v = 123;
  storage_local_set(app_fn, key, v);
  let value2 = storage_local_get(app_fn, key);
  equal_assert(v, value2);
  let enabled = storage_local_enabled();
  true_is_assert(enabled);
  let keys = storage_local_keys_global_app(context);
  log({
    keys,
  });
  storage_local_disable();
}
