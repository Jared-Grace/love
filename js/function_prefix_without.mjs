import { app_karate_home } from "../../karate_code/js/app_karate_home.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
export function function_prefix_without(app_fn) {
  let skipped = text_prefix_without(app_karate_home.name, app_fn.name);
  return skipped;
}
