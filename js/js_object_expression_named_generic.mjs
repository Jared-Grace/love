import { property_list_get_end_1 } from "./property_list_get_end_1.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { equal } from "./equal.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { property_get } from "./property_get.mjs";
export function js_object_expression_named_generic(ast, node_type, search) {
  "instead of this, markers should be used so that the source code explicitly captures reference from another file";
  "Every list or record in a file that is given a name, kept only where the name is the one asked for.";
  "The asking used to do nothing. The name was worked out and compared, and the comparison opened a block with nothing in it, while the finding sat underneath where it ran either way - so a word that named no list in the file selected every list in it, and one that named a single list selected its neighbours too.";
  "What that costs is worst here of all places. This is a selector, and a selector hands whatever it finds to a transform, which edits every one of them - so the failure is not an empty answer to look at but the wrong file quietly rewritten. Being asked for by name is the whole of what a caller has to go on.";
  "It went unseen because both callers happen to stand in front of it. One file holds a single named record, so selecting all of them and selecting the right one are the same answer; the other asks for exactly one back and would have raised rather than gone wrong. Neither would have stayed true of the next caller.";
  function lambda2(la) {
    function lambda(v) {
      let e = property_list_get_end_1(v, "stack");
      function lambda3() {
        let id = property_get(e, "id");
        function lambda4() {
          let name = js_identifier_name(id);
          if (equal(name, search)) {
            let node = property_get(v, "node");
            la(node);
          }
        }
        js_node_type_is_if(id, "Identifier", lambda4);
      }
      js_node_type_is_if(e, "VariableDeclarator", lambda3);
    }
    js_visit_type(ast, node_type, lambda);
  }
  let list = list_adder(lambda2);
  return list;
}
