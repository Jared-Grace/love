import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { equal } from "./equal.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { qa_gate_names_hinted_grow } from "./qa_gate_names_hinted_grow.mjs";
export async function qa_gate_names_nodes_grow(nodes, names, f_name) {
  "Every name written inside a given run of nodes, added to the list handed in, and then grown by whatever the lines of the function those nodes came from read.";
  "The two sides that ask this differ only in which nodes they start from - one begins at what a gate accuses, the other at what it hints - so the collecting is one piece rather than two that can come to disagree about what counts as a name.";
  "The list is handed in rather than made here, because the hinted side writes its list into the object it remembers by before the work starts, so that a function reached from inside its own hint is answered with what there is so far instead of being asked all over again forever.";
  "The lines that fill a name are gathered two ways and both go next door together, because a value reaches a hint by being declared into something or by being handed to something that gathers it, and a reader that knew only the first called a correctly delegating gate a leak.";
  "Of the second sort it gathers only the calls standing alone as a line of their own. Those are the ones made for what they change, and what a call changes is the only way a value gets anywhere without being written down - a call whose answer is kept is already read by the line that keeps it, which is the first sort.";
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
  let statements = await function_ast_list_type_nodes(
    f_name,
    "ExpressionStatement",
  );
  let calls = [];
  for (let statement of statements) {
    let expression = property_get(statement, "expression");
    let expression_type = property_get(expression, "type");
    if (not_equal(expression_type, "CallExpression")) {
      continue;
    }
    list_add(calls, expression);
  }
  qa_gate_names_hinted_grow(names, declarators, calls);
}
