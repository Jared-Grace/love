import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace } from "./text_replace.mjs";
export function app_shared_route_slash(a_name) {
  "$plain a_name";
  arguments_assert(arguments, 1);
  ("The address an app's name reads as when each underscore is taken as a folder: learn_en reads as /learn/en.");
  let r = "/" + text_replace(a_name, "_", "/");
  return r;
}
