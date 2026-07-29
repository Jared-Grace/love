import { fn_name } from "./fn_name.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
export function function_prefix_without(app_fn) {
  let skipped = text_prefix_without(fn_name("app_karate_home"), app_fn.name);
  return skipped;
}
