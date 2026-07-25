import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { function_wrap_generic } from "./function_wrap_generic.mjs";
import { function_open } from "./function_open.mjs";
export async function function_wrap_generic_open(plugin_fn, args_comma) {
  arguments_assert(arguments, 2);
  let r = await function_wrap_generic(plugin_fn, args_comma);
  let name = property_get(r, "name");
  await function_open(name);
  let output = property_get(r, "output");
  return output;
}
