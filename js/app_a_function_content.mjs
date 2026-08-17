import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_function_root } from "./app_a_function_root.mjs";
import { property_get } from "./property_get.mjs";
export async function app_a_function_content(context, on_keydowns, a) {
  arguments_assert(arguments, 3);
  let r = await app_a_function_root(context, on_keydowns, a);
  let root = property_get(r, "root");
  let ast = property_get(r, "ast");
  let parsed = property_get(r, "parsed");
  let app_a_function_on_keydown = property_get(r, "app_a_function_on_keydown");
  let fds = property_get(r, "fds");
  let r3 = property_get(r, "r3");
  let content = property_get(r3, "content");
  let r2 = {
    root,
    ast,
    parsed,
    app_a_function_on_keydown,
    fds,
    r3,
    content,
  };
  return r2;
}
