import { equal } from "./equal.mjs";
import { qa_gate_hint_nodes } from "./qa_gate_hint_nodes.mjs";
import { qa_gate_names_hinted_grow } from "./qa_gate_names_hinted_grow.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
export async function qa_gate_names_hinted(f_name, remembered, depth) {
  "Every name in one function's body whose value ends up inside a hint - its own locals, and the things it was handed. Read-only.";
  "A sentence is rarely handed straight to the hint slot. It is built into a local, out of another local holding the spelled-out name of a repair command, and only the last of those is written at the slot - so asking whether the spelling itself sits inside a hint answers no about code that is perfectly well behaved.";
  "So it reads backwards instead: start with the names written inside the hints, and keep taking in whatever the lines that filled them read. A parameter among the answer is how the function that called this one learns that the argument it wrote there was safe.";
  "The answer is kept in the object handed in, the same way a tree is, because the runners every gate delegates to are asked this about once per gate otherwise. The keeping is the caller's rather than this file's for the same reason it is there: a caller that only reads shares the saving, and nothing here holds state between one run and the next.";
  "It is written into that object before the work starts rather than after, so that a function reached from inside its own hint is answered with the empty list it has so far instead of being asked all over again forever.";
  let key = f_name + "@" + depth;
  let known_is = property_exists(remembered, key);
  if (known_is) {
    let kept = property_get(remembered, key);
    return kept;
  }
  let hinted = [];
  property_set(remembered, key, hinted);
  let hints = await qa_gate_hint_nodes(f_name, remembered, depth);
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
  qa_gate_names_hinted_grow(hinted, declarators);
  return hinted;
}
