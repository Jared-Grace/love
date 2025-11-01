import { storage_local_enable } from "../../../love/public/src/storage_local_enable.mjs";
import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { storage_local_remove_app } from "../../../love/public/src/storage_local_remove_app.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
import { storage_local_get_global } from "../../../love/public/src/storage_local_get_global.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { storage_local_keys_values } from "../../../karate_code/public/src/storage_local_keys_values.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { object_property_get_or } from "../../../love/public/src/object_property_get_or.mjs";
import { object_properties_size } from "../../../love/public/src/object_properties_size.mjs";
import { storage_local_disable } from "../../../love/public/src/storage_local_disable.mjs";
import { true_is_assert } from "../../../love/public/src/true_is_assert.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { null_is_assert } from "../../../love/public/src/null_is_assert.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
export async function sandbox() {
  marker("1");
  let s = {};
  let localStorage = {
    getItem: function getItem(storage_local_key) {
      let value3 = object_property_get_or(null, s, storage_local_key);
      return value3;
    },
    setItem: function setItem(storage_local_key, v) {
      v = string_to(v);
      object_property_set(s, storage_local_key, v);
    },
    get length() {
      let size = object_properties_size(s);
      return size;
    },
    key: function lambda2(index) {
      let properties = object_properties(s);
      let item = list_get(properties, index);
      return item;
    },
    removeItem: function lambda5(storage_local_key) {
      object_property_delete(s, storage_local_key);
    },
  };
  global.localStorage = localStorage;
  let app_fn = sandbox;
  let context = {
    app_fn,
  };
  ("returns null");
  const key = "test";
  let value = storage_local_get(app_fn, key);
  null_is_assert(value);
  ("set and get value");
  const v = 123;
  storage_local_set(app_fn, key, v);
  let value2 = storage_local_get(app_fn, key);
  equal_assert(v, value2);
  ("by default local storage is enabled");
  let enabled = storage_local_enabled();
  true_is_assert(enabled);
  let dictionary = storage_local_remove_app(context);
  let keys = object_properties(dictionary);
  const expected = {
    test: v,
  };
  json_equal_assert(dictionary, expected);
  storage_local_disable();
  function lambda4(object, property) {
    storage_local_set(app_fn, property, object);
  }
  each_object(dictionary, lambda4);
  let local_disabled_after_migrate = storage_local_keys_values(context, keys);
  json_equal_assert(local_disabled_after_migrate, expected);
  ("global actually uses global");
  let storage_local_key = storage_local_key_get(app_fn, key);
  let value_global = storage_local_get_global(storage_local_key);
  equal_assert(value_global, v);
  let enabled2 = storage_local_enabled();
  false_is_assert(enabled2);
  let dictionary2 = storage_local_remove_app(context);
  let keys2 = object_properties(dictionary);
  storage_local_enable();
}
