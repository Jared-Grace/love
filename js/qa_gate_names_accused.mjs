import { qa_gate_accused_nodes } from "./qa_gate_accused_nodes.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { equal } from "./equal.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { qa_gate_names_hinted_grow } from "./qa_gate_names_hinted_grow.mjs";
export async function qa_gate_names_accused(f_name) {
  "Every name in one gate's body whose value ends up in the list of offenders it throws. Read-only.";
  "It reads backwards, the same way the hinted side does and for the same reason: the list handed to the throw is almost never the one the names were spelled into. Four doors are spelled into a list, the list is narrowed to the ones that failed, and only the narrowed one is written at the slot - so asking whether a spelling sits inside the thrown list answers no about a gate accusing exactly the right thing.";
  "The growing step is the hinted side's own, unchanged. What a name reaches is the same question whichever slot it is heading for, so only the set it starts from differs.";
  "Nothing is remembered between calls and no depth is followed, because this channel does not cross a function boundary. A gate that hands its complaint to a shared runner is not doing its own throwing, and the one caller has already put that gate aside before it asks.";
  let nodes = await qa_gate_accused_nodes(f_name);
  let accused = [];
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
  return accused;
}
