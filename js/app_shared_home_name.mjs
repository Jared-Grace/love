import { property_get } from "./property_get.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function app_shared_home_name(app_fn) {
  "the name of an app's home screen, which is its own name with home on the end; the screens list is searched by name, so this is how a caller says go home without importing the screen itself";
  let name = property_get(app_fn, "name");
  let combined = function_name_combine(name, "home");
  return combined;
}
