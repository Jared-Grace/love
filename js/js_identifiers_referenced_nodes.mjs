import { js_identifiers } from "./js_identifiers.mjs";
import { js_identifiers_naming_nodes } from "./js_identifiers_naming_nodes.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_identifiers_referenced_nodes(ast) {
  "every Identifier node that actually references a value — all of them, less the ones merely naming a property or a key";
  let all = js_identifiers(ast);
  let naming = js_identifiers_naming_nodes(ast);
  let referenced = list_difference(all, naming);
  return referenced;
}
