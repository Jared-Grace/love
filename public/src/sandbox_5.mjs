import { object_property_swap } from "../../../love/public/src/object_property_swap.mjs";
import { object_property_subtract_1 } from "../../../love/public/src/object_property_subtract_1.mjs";
import { object_property_set_if_exists_not } from "../../../love/public/src/object_property_set_if_exists_not.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_rename } from "../../../love/public/src/object_property_rename.mjs";
import { object_property_lambda_async } from "../../../love/public/src/object_property_lambda_async.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { object_property_initialize_lambda_async } from "../../../love/public/src/object_property_initialize_lambda_async.mjs";
import { object_property_initialize_lambda } from "../../../love/public/src/object_property_initialize_lambda.mjs";
import { object_property_initialize_empty } from "../../../love/public/src/object_property_initialize_empty.mjs";
import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
import { object_property_get_or } from "../../../love/public/src/object_property_get_or.mjs";
import { object_property_get_name } from "../../../love/public/src/object_property_get_name.mjs";
import { object_property_get_double_equal_assert } from "../../../love/public/src/object_property_get_double_equal_assert.mjs";
import { object_property_get_curry_right } from "../../../love/public/src/object_property_get_curry_right.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_from } from "../../../love/public/src/object_property_from.mjs";
import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { object_property_exists_if_async } from "../../../love/public/src/object_property_exists_if_async.mjs";
import { object_property_exists_equals } from "../../../love/public/src/object_property_exists_equals.mjs";
import { object_property_exists_assert } from "../../../love/public/src/object_property_exists_assert.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { property_equals_lambda } from "../../../love/public/src/property_equals_lambda.mjs";
import { property_equals_json_lambda } from "../../../love/public/src/property_equals_json_lambda.mjs";
import { property_equals_json } from "../../../love/public/src/property_equals_json.mjs";
import { property_equals } from "../../../love/public/src/property_equals.mjs";
import { property_delete_multiple } from "../../../love/public/src/property_delete_multiple.mjs";
import { property_delete_if_exists } from "../../../love/public/src/property_delete_if_exists.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { property_change_async } from "../../../love/public/src/property_change_async.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { property_add_subtract_1 } from "../../../love/public/src/property_add_subtract_1.mjs";
import { property_add_1 } from "../../../love/public/src/property_add_1.mjs";
import { properties_size } from "../../../love/public/src/properties_size.mjs";
import { properties_from_empty } from "../../../love/public/src/properties_from_empty.mjs";
import { properties_from } from "../../../love/public/src/properties_from.mjs";
import { properties_each_async } from "../../../love/public/src/properties_each_async.mjs";
import { properties_delete_if_exists } from "../../../love/public/src/properties_delete_if_exists.mjs";
import { properties_delete_all } from "../../../love/public/src/properties_delete_all.mjs";
import { properties_delete } from "../../../love/public/src/properties_delete.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { js_call_object_property_get } from "../../../love/public/src/js_call_object_property_get.mjs";
import { js_assign_object_property_get } from "../../../love/public/src/js_assign_object_property_get.mjs";
import { html_hash_object_property_set } from "../../../love/public/src/html_hash_object_property_set.mjs";
export async function sandbox_5() {
  let o = {
    html_hash_object_property_set:
      "public/src/html_hash_object_property_set.mjs",
    js_assign_object_property_get:
      "public/src/js_assign_object_property_get.mjs",
    js_call_object_property_get: "public/src/js_call_object_property_get.mjs",
    properties_get: "public/src/object_properties.mjs",
    properties_delete: "public/src/object_properties_delete.mjs",
    properties_delete_all: "public/src/object_properties_delete_all.mjs",
    properties_delete_if_exists:
      "public/src/object_properties_delete_if_exists.mjs",
    properties_each_async: "public/src/object_properties_each_async.mjs",
    properties_from: "public/src/object_properties_from.mjs",
    properties_from_empty: "public/src/object_properties_from_empty.mjs",
    properties_size: "public/src/object_properties_size.mjs",
    property_add_1: "public/src/object_property_add_1.mjs",
    property_add_subtract_1: "public/src/object_property_add_subtract_1.mjs",
    property_change: "public/src/object_property_change.mjs",
    property_change_async: "public/src/object_property_change_async.mjs",
    property_delete: "public/src/object_property_delete.mjs",
    property_delete_if_exists:
      "public/src/object_property_delete_if_exists.mjs",
    property_delete_multiple: "public/src/object_property_delete_multiple.mjs",
    property_equals: "public/src/object_property_equals.mjs",
    property_equals_json: "public/src/object_property_equals_json.mjs",
    property_equals_json_lambda:
      "public/src/object_property_equals_json_lambda.mjs",
    property_equals_lambda: "public/src/object_property_equals_lambda.mjs",
    object_property_exists: "public/src/object_property_exists.mjs",
    object_property_exists_assert:
      "public/src/object_property_exists_assert.mjs",
    object_property_exists_equals:
      "public/src/object_property_exists_equals.mjs",
    object_property_exists_if_async:
      "public/src/object_property_exists_if_async.mjs",
    object_property_exists_not: "public/src/object_property_exists_not.mjs",
    object_property_exists_not_assert:
      "public/src/object_property_exists_not_assert.mjs",
    object_property_from: "public/src/object_property_from.mjs",
    object_property_get: "public/src/object_property_get.mjs",
    object_property_get_curry_right:
      "public/src/object_property_get_curry_right.mjs",
    object_property_get_double_equal_assert:
      "public/src/object_property_get_double_equal_assert.mjs",
    object_property_get_name: "public/src/object_property_get_name.mjs",
    object_property_get_or: "public/src/object_property_get_or.mjs",
    object_property_initialize: "public/src/object_property_initialize.mjs",
    object_property_initialize_empty:
      "public/src/object_property_initialize_empty.mjs",
    object_property_initialize_lambda:
      "public/src/object_property_initialize_lambda.mjs",
    object_property_initialize_lambda_async:
      "public/src/object_property_initialize_lambda_async.mjs",
    object_property_initialize_list:
      "public/src/object_property_initialize_list.mjs",
    object_property_lambda_async: "public/src/object_property_lambda_async.mjs",
    object_property_rename: "public/src/object_property_rename.mjs",
    object_property_set: "public/src/object_property_set.mjs",
    object_property_set_exists_not:
      "public/src/object_property_set_exists_not.mjs",
    object_property_set_if_exists_not:
      "public/src/object_property_set_if_exists_not.mjs",
    object_property_subtract_1: "public/src/object_property_subtract_1.mjs",
    object_property_swap: "public/src/object_property_swap.mjs",
  };
}
