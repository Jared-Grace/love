import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_function_key } from "./app_a_function_key.mjs";
import { app_a_function_f_names } from "./app_a_function_f_names.mjs";
import { app_a_function_fds } from "./app_a_function_fds.mjs";
import { property_get } from "./property_get.mjs";
export async function app_a_function_root(context, on_keydowns, a) {
  arguments_assert(arguments, 3);
  let r = await app_a_function_key(
    context,
    app_a_function_on_keydown,
    on_keydowns,
    a,
  );
  let r2 = await app_a_function_f_names(r);
  let r3 = app_a_function_fds(r2);
  let fds = property_get(r3, "fds");
  let app_a_function_on_keydown = property_get(r3, "app_a_function_on_keydown");
  let parsed = property_get(r3, "parsed");
  let ast = property_get(r3, "ast");
  let root = property_get(r3, "root");
  let r4 = {
    r3,
    fds,
    app_a_function_on_keydown,
    parsed,
    ast,
    root,
  };
  return r4;
}
