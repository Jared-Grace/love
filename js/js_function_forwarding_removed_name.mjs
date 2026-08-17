import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_forwarding_removed_mentions } from "./js_function_forwarding_removed_mentions.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_forwarding_removed_name(id, ast) {
  arguments_assert(arguments, 2);
  let r2 = js_function_forwarding_removed_mentions(id, ast);
  let mentions = property_get(r2, "mentions");
  let name = property_get(r2, "name");
  let r = {
    mentions,
    name,
  };
  return r;
}
