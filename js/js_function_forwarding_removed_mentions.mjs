import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
export function js_function_forwarding_removed_mentions(id, ast) {
  arguments_assert(arguments, 2);
  let name = property_get(id, "name");
  ("its own name where it is declared, and one other place. anything more is a use this does not look at");
  let mentions = js_identifiers_named_count(ast, name);
  let r = {
    name,
    mentions,
  };
  return r;
}
