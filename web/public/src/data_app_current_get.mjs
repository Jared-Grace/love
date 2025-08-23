import { null_not_is_assert } from "./null_not_is_assert.mjs";
import { data_property_get } from "./data_property_get.mjs";
export async function data_app_current_get() {
  let a = await data_property_get("app_current");
  null_not_is_assert(a);
  return a;
}
