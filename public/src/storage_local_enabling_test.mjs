import { storage_local_enable } from "../../../love/public/src/storage_local_enable.mjs";
import { global_function_initialize_object } from "../../../love/public/src/global_function_initialize_object.mjs";
import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { storage_local_get_global } from "../../../love/public/src/storage_local_get_global.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
import { storage_local_keys_value_dictionary } from "../../../love/public/src/storage_local_keys_value_dictionary.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
import { storage_local_disable } from "../../../love/public/src/storage_local_disable.mjs";
import { true_is_assert } from "../../../love/public/src/true_is_assert.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { null_is_assert } from "../../../love/public/src/null_is_assert.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_global_empty_assert } from "../../../love/public/src/storage_local_global_empty_assert.mjs";
import { sandbox } from "../../../love/public/src/sandbox.mjs";
import { storage_local_mock_enable } from "../../../love/public/src/storage_local_mock_enable.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_enabling_test() {
  marker("1");
  storage_local_mock_enable();
  let app_fn = sandbox;
  let context = {
    app_fn,
  };
  const key = "test";
  const v = 123;
  const expected = {
    test: v,
  };
  ("global object is empty initially");
  {
    storage_local_global_empty_assert();
  }
  ("before setting value, get returns null");
  {
    let value = storage_local_get(app_fn, key);
    null_is_assert(value);
  }
  ("set a value and get the value");
  {
    storage_local_set(app_fn, key, v);
    let value2 = storage_local_get(app_fn, key);
    equal_assert(v, value2);
  }
  ("by default local storage is enabled");
  {
    let enabled = storage_local_enabled();
    true_is_assert(enabled);
  }
  ("disabling local storage returns a dictionary");
  {
    let dictionary = storage_local_disable(context);
    json_equal_assert(dictionary, expected);
    ("disabled local storage returns correct dictionary");
    let local_disabled = storage_local_keys_value_dictionary(
      dictionary,
      context,
    );
    json_equal_assert(local_disabled, expected);
  }
  ("global actually uses global");
  {
    let storage_local_key = storage_local_key_get(app_fn, key);
    let value_global = storage_local_get_global(storage_local_key);
    equal_assert(value_global, v);
  }
  ("disabling local storage returns disabled flag");
  {
    let enabled2 = storage_local_enabled();
    false_is_assert(enabled2);
  }
  ("global object is correct");
  {
    let fn_object = global_function_initialize_object(storage_local_set);
    json_equal_assert(fn_object, {
      [storage_local_key_get(app_fn, key)]: v,
    });
  }
  ("enabling local storage returns dictionary");
  {
    let dictionary2 = storage_local_enable(context);
    json_equal_assert(dictionary2, expected);
    let local_reenabled = storage_local_keys_value_dictionary(
      dictionary2,
      context,
    );
    json_equal_assert(local_reenabled, expected);
  }
  ("global object is empty after enable");
  {
    storage_local_global_empty_assert();
  }
}
