import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_difference } from "./list_difference.mjs";
export function app_a_function_f_names_local(r) {
  arguments_assert(arguments, 1);
  let r3 = property_get(r, "r3");
  let fds = property_get(r, "fds");
  let app_a_function_on_keydown = property_get(r, "app_a_function_on_keydown");
  let parsed = property_get(r, "parsed");
  let ast = property_get(r, "ast");
  let root = property_get(r, "root");
  let f_names = property_get(r3, "f_names");
  let f_names_local = list_difference(fds, f_names);
  let r2 = {
    app_a_function_on_keydown,
    parsed,
    ast,
    root,
    f_names,
    f_names_local,
  };
  return r2;
}
