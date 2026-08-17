import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_function_lambda8 } from "./app_a_function_lambda8.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function app_a_function_fds(r2) {
  arguments_assert(arguments, 1);
  let f_names = property_get(r2, "f_names");
  let content = property_get(r2, "content");
  let root = property_get(r2, "root");
  let ast = property_get(r2, "ast");
  let parsed = property_get(r2, "parsed");
  let app_a_function_on_keydown = property_get(r2, "app_a_function_on_keydown");
  function lambda8(la) {
    let r4 = app_a_function_lambda8(la, ast);
    return r4;
  }
  let fds = list_adder_unique(lambda8);
  let r = {
    f_names,
    content,
    root,
    ast,
    parsed,
    app_a_function_on_keydown,
    fds,
  };
  return r;
}
