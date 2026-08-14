import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_first } from "./list_first.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { add } from "./add.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function js_body_list_declaration_index(body) {
  "Where among a function's statements the one that writes out a list is, counted from the first, so something can be put in just above it.";
  "It is the place a register grows at. A function that answers a list of names holds a run of bindings and then the list that gathers them, and a new name belongs at the end of that run - which is to say immediately before this statement, and nowhere else that would still work.";
  "Anywhere above the list is legal JavaScript, and the top of the body is far easier to find, so it is worth saying why that is not what this answers. The bindings of a register are written in the order the entries arrived, and each one has the paragraph explaining it directly above. An entry added at the top lands under somebody else's explanation and above its own, and reads ever after as though it belonged to the group it interrupted.";
  "The first list is the answer rather than the only one, unlike the neighbour that refuses when a function writes out more than one. This is asked after that refusal has already been made, by a caller that has the list in hand and only wants to know where it sits.";
  "Finding no list at all is refused rather than answered with the top of the body. A caller asking this has been told there is a list, so no list means the tree is not the one it thinks it has, and putting the binding somewhere plausible would leave a register quietly holding a name in the wrong place.";
  arguments_assert(arguments, 1);
  let index = 0;
  for (let statement of body) {
    let declaration_is = js_node_type_is(statement, "VariableDeclaration");
    if (declaration_is) {
      let declarators = js_declaration_declarators_get(statement);
      let declarator = list_first(declarators);
      let init = js_declare_init_get(declarator);
      let array_is = js_node_type_is(init, "ArrayExpression");
      if (array_is) {
        return index;
      }
    }
    index = add(index, 1);
  }
  let statements = list_size(body);
  assert_json(false, {
    hint: "this wants a function that writes a list out into a name of its own - would you like to name one that does?",
    statements,
  });
}
