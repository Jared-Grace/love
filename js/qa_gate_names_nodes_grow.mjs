import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { equal } from "./equal.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { qa_gate_names_hinted_grow } from "./qa_gate_names_hinted_grow.mjs";
export async function qa_gate_names_nodes_grow(nodes, accused, f_name) {
  arguments_assert(arguments, 3);
  for (let node of nodes) {
    let identifiers = js_list_type_nodes(node, "Identifier");
    for (let identifier of identifiers) {
      let named = property_get(identifier, "name");
      list_add_unique(accused, named);
    }
    let type = property_get(node, "type");
    if (equal(type, "Identifier")) {
      let named2 = property_get(node, "name");
      list_add_unique(accused, named2);
    }
  }
  let declarators = await function_ast_list_type_nodes(
    f_name,
    "VariableDeclarator",
  );
  qa_gate_names_hinted_grow(accused, declarators);
}
