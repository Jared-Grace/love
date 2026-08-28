import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { equal } from "./equal.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { qa_gate_names_hinted_grow } from "./qa_gate_names_hinted_grow.mjs";
export async function qa_gate_names_nodes_grow(nodes, names, f_name) {
  "Every name written inside a given run of nodes, added to the list handed in, and then grown by whatever the lines of the function those nodes came from read.";
  "The two sides that ask this differ only in which nodes they start from - one begins at what a gate accuses, the other at what it hints - so the collecting is one piece rather than two that can come to disagree about what counts as a name.";
  "The list is handed in rather than made here, because the hinted side writes its list into the object it remembers by before the work starts, so that a function reached from inside its own hint is answered with what there is so far instead of being asked all over again forever.";
  arguments_assert(arguments, 3);
  for (let node of nodes) {
    let identifiers = js_list_type_nodes(node, "Identifier");
    for (let identifier of identifiers) {
      let named = property_get(identifier, "name");
      list_add_unique(names, named);
    }
    let type = property_get(node, "type");
    if (equal(type, "Identifier")) {
      let named2 = property_get(node, "name");
      list_add_unique(names, named2);
    }
  }
  let declarators = await function_ast_list_type_nodes(
    f_name,
    "VariableDeclarator",
  );
  qa_gate_names_hinted_grow(names, declarators);
}
