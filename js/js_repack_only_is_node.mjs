import { arguments_assert } from "./arguments_assert.mjs";
import { js_repack_only_is_silent_is } from "./js_repack_only_is_silent_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_repack_only_is_node(declaration) {
  arguments_assert(arguments, 1);
  let r4 = js_repack_only_is_silent_is(declaration);
  let silent_is = property_get(r4, "silent_is");
  let node = property_get(r4, "node");
  return {
    silent_is,
    node,
  };
}
