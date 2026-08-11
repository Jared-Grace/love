import { property_get } from "./property_get.mjs";
import { app_shared_home_name } from "./app_shared_home_name.mjs";
export function app_shared_home_name_context(context) {
  let app_fn = property_get(context, "app_fn");
  let combined = app_shared_home_name(app_fn);
  return combined;
}
