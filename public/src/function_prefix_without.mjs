import { app_karate_home } from "../../../karate_code/public/src/app_karate_home.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
export function function_prefix_without(app_fn) {
  let skipped22 = string_prefix_without(app_karate_home.name, app_fn.name);
  return skipped22;
}
