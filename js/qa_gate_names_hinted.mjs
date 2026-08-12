import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { qa_gate_hint_nodes } from "./qa_gate_hint_nodes.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gate_names_hinted(f_name) {
  "Every local in one function's body whose value ends up inside a hint, however many lines it took to get there. Read-only.";
  "A sentence is rarely handed straight to the hint slot. It is built into a local, out of another local holding the spelled-out name of a repair command, and only the last of those is written at the slot - so asking whether the spelling itself sits inside a hint answers no about code that is perfectly well behaved.";
  "So it reads backwards instead. Start with the names written inside the hints, and for each one find the line that filled it and take in every name that line read; repeat until nothing new arrives. What comes out is every local the hint is made of.";
  "Backwards rather than forwards because a hint is the destination, and the question being asked is only ever about what reaches it. Walking forward from every local would answer a larger question at a larger cost and then throw most of it away.";
  let hints = await qa_gate_hint_nodes(f_name);
  let hinted = [];
  for (let node of hints) {
    let identifiers = js_list_type_nodes(node, "Identifier");
    for (let identifier of identifiers) {
      let named = property_get(identifier, "name");
      list_add_unique(hinted, named);
    }
    let type = property_get(node, "type");
    if (equal(type, "Identifier")) {
      let named2 = property_get(node, "name");
      list_add_unique(hinted, named2);
    }
  }
  let declarators = await function_ast_list_type_nodes(
    f_name,
    "VariableDeclarator",
  );
  let growing = true;
  while (growing) {
    growing = false;
    for (let declarator of declarators) {
      let id = property_get(declarator, "id");
      let bound = property_get(id, "name");
      let bound_hinted_is = list_includes(hinted, bound);
      if (not(bound_hinted_is)) {
        continue;
      }
      let init = property_get(declarator, "init");
      if (equal(init, null)) {
        continue;
      }
      let identifiers2 = js_list_type_nodes(init, "Identifier");
      for (let identifier2 of identifiers2) {
        let named3 = property_get(identifier2, "name");
        let known_is = list_includes(hinted, named3);
        if (known_is) {
          continue;
        }
        list_add(hinted, named3);
        growing = true;
      }
    }
  }
  return hinted;
}
