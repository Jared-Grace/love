import { null_not_is } from "./null_not_is.mjs";
import { data_property_get } from "./data_property_get.mjs";
export async function data_app_current_get() {
  let a = await data_property_get("app_current");
  let nn = null_not_is(value);
  return a;
}
