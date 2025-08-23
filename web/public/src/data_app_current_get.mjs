import {data_property_get} from "./data_property_get.mjs";
export async function data_app_current_get() {
  let v2 = await data_property_get("app_current");
  return v2;
}
