import { arguments_assert } from "./arguments_assert.mjs";
import { permission_plain_marker } from "./permission_plain_marker.mjs";
import { js_statements_with_string_starting_with } from "./js_statements_with_string_starting_with.mjs";
import { list_map } from "./list_map.mjs";
import { text_replace } from "./text_replace.mjs";
export function function_params_plain_ast(ast) {
  arguments_assert(arguments, 1);
  ("the parameters a tree declares to carry ordinary data, named one per marker in its own body");
  ("asked of a tree rather than of a name, so a caller that already has the tree in hand is not made to go and find the file again. The one that starts from a name is a line on top of this.");
  ("a marker naming a parameter the function does not declare matches nothing and so changes nothing, which is the direction a mistake here has to fail in.");
  let plain_prefix = permission_plain_marker();
  let marked = js_statements_with_string_starting_with(ast, plain_prefix);
  function lambda(text) {
    let name = text_replace(text, plain_prefix, "");
    return name;
  }
  let names = list_map(marked, lambda);
  return names;
}
