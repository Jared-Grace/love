import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { property_get } from "./property_get.mjs";
export function js_loop_declared_names(node) {
  "the names a loop header declares for itself. A counting loop puts its declaration first, before the two tests, and a loop that walks a list or an object puts it on the left of the word that names what it walks - so the two are read from different places but mean the same thing. Either name lives for the length of the loop and is gone after it, which is why the header is a scope and not merely part of the one around it. A header that only assigns to a name declared elsewhere declares nothing, hence the empty answer.";
  let counting_is = js_node_type_is(node, "ForStatement");
  let part = null;
  if (counting_is) {
    part = property_get(node, "init");
  } else {
    part = property_get(node, "left");
  }
  let declaring = js_node_type_is(part, "VariableDeclaration");
  if (declaring) {
    let names = js_statements_declared_names_direct([part]);
    return names;
  }
  return [];
}
