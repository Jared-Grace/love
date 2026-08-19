import { property_path_equals_2 } from "./property_path_equals_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_find } from "./js_block_find.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_block_name_taken_is(stack, name) {
  "Whether the block a lifted piece would land in already declares a function of that name.";
  "Only function declarations are looked at, and that is the whole of the silence this answers. A lifted function landing beside a let or a const of the same name is a syntax error, so the file stops loading and the canonicalize says so at once. Two function declarations sharing a name in one body are legal, both are hoisted, and the later one wins for every mention above and below - so the call that was pointing at the first now runs the second, and nothing anywhere goes red.";
  arguments_assert(arguments, 2);
  let v = js_block_find(stack);
  let body = property_get(v, "body");
  for (let node of body) {
    let declared = js_node_type_is(node, "FunctionDeclaration");
    if (declared) {
      let same = property_path_equals_2(node, "id", "name", name);
      if (same) {
        return true;
      }
    }
  }
  return false;
}
