import { function_ast } from "./function_ast.mjs";
import { js_statements_with_string_starting_with } from "./js_statements_with_string_starting_with.mjs";
import { permission_plain_marker } from "./permission_plain_marker.mjs";
import { list_map } from "./list_map.mjs";
import { text_replace } from "./text_replace.mjs";
export async function function_params_plain(unaliased) {
  "The parameters this function declares to carry ordinary data, named one per marker in its own body.";
  "A marker naming a parameter the function does not declare matches nothing and so changes nothing, which is the direction a mistake here has to fail in.";
  let ast = await function_ast(unaliased);
  let marker = permission_plain_marker();
  let marked = js_statements_with_string_starting_with(ast, marker);
  function lambda(text) {
    let name = text_replace(text, marker, "");
    return name;
  }
  let names = list_map(marked, lambda);
  return names;
}
