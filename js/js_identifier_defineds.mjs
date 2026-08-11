import { property_in_list } from "./property_in_list.mjs";
import { js_identifiers_naming_nodes } from "./js_identifiers_naming_nodes.mjs";
import { js_catch_clause_names } from "./js_catch_clause_names.mjs";
import { js_identifier_defineds_function_type_add } from "./js_identifier_defineds_function_type_add.mjs";
import { js_loop_declared_names } from "./js_loop_declared_names.mjs";
import { js_types_loop_node } from "./js_types_loop_node.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_index_of_next_outside } from "./list_index_of_next_outside.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_types_function_node } from "./js_types_function_node.mjs";
import { js_stack_filtered_multiple_each } from "./js_stack_filtered_multiple_each.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get } from "./list_get.mjs";
import { each_range } from "./each_range.mjs";
import { list_next } from "./list_next.mjs";
import { each } from "./each.mjs";
import { list_adder_multiple } from "./list_adder_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { error } from "./error.mjs";
import { json_to } from "./json_to.mjs";
export function js_identifier_defineds(v) {
  "every name already bound where this identifier stands - what is in scope for it.";
  "The top of the file is asked as well as the blocks around it, and the two are";
  "asked the same way because they hold statements the same way. Leaving the top out";
  "made a module-level binding invisible: the step that adds the word let could not";
  "see one, so it wrote a fresh let over an assignment meant for it, and a cache";
  "filled that way read back empty for the life of the process. That shape is a";
  "cache, which is the whole reason a binding sits up there in the first place.";
  let stack = property_get(v, "stack");
  function lambda4(la) {
    let e = list_get_end_1(stack);
    if (js_node_type_is(e, "Property")) {
      ("Only the word standing as the key is answered as bound by itself, and asking the shared judgment settles which word that is rather than treating every name inside a pair as one. A pair has two sides, and the side after the colon is an ordinary name being read - so calling the whole pair a key told every caller that a value written there was already in scope, and a name reached out of an enclosing function that way was invisible. That is how a moved function came to read a colour it was never handed.");
      let naming = js_identifiers_naming_nodes(e);
      let named_is = property_in_list(v, "node", naming);
      if (named_is) {
        let value = property_path_get_2(v, "node", "name");
        la([value]);
      }
    }
    js_identifier_defineds_function_type_add(e, "FunctionExpression", la);
    js_stack_filtered_multiple_each(
      stack,
      ["BlockStatement", "Program"],
      lambda3,
    );
    function lambda3(bs) {
      let bs_list = list_next(stack, bs);
      let item = list_next(stack, bs_list);
      let index = list_index_of_next_outside(bs_list, item);
      function each_statement_up_to(i) {
        let list_item = list_get(bs_list, i);
        if (js_node_type_is(list_item, "VariableDeclaration")) {
          let declarations = js_declaration_declarators_get(list_item);
          let ids = list_map_property(declarations, "id");
          function lambda(id) {
            if (js_node_type_is(id, "ObjectPattern")) {
              let values = property_list_map_property(
                id,
                "properties",
                "value",
              );
              let names = js_identifiers_to_names(values);
              la(names);
            } else if (js_node_type_is(id, "ArrayPattern")) {
              let elements = property_get(id, "elements");
              let names = js_identifiers_to_names(elements);
              la(names);
            } else if (js_node_type_is(id, "Identifier")) {
              let value = property_get(id, "name");
              la([value]);
            } else {
              let message = json_to(id);
              error(message);
            }
          }
          each(ids, lambda);
        }
      }
      each_range(index, each_statement_up_to);
      function lambda2(item2) {
        js_identifier_defineds_function_type_add(
          item2,
          "FunctionDeclaration",
          la,
        );
      }
      each(bs_list, lambda2);
    }
    let types = js_types_function_node();
    function lambda5(node) {
      let params_names = js_function_declaration_params_names(node);
      la(params_names);
    }
    js_stack_filtered_multiple_each(stack, types, lambda5);
    ("A loop header binds a name too, and it is bound nowhere else - the counter or the item, live for the length of the loop and gone after it. Leaving the headers out made every one of those names read as bound by nothing, which is the same answer as a name from outside. The span extractor believed it and handed a loop's own item out as a parameter, so the cut function asked its caller for a word only the loop had ever known: the caller passed a name that was not in scope there at all, and the file it wrote threw on the first line that read it.");
    function lambda6(node) {
      let looped = js_loop_declared_names(node);
      la(looped);
    }
    let types_loop = js_types_loop_node();
    js_stack_filtered_multiple_each(stack, types_loop, lambda6);
    ("A caught error is bound by the clause that names it and by nothing else - it is neither declared nor written in a parameter list, so both of the readings above walk straight past it. Bound by nothing reads the same as coming from outside, so a span cut out of a catch asked its caller for the error, and the caller had never heard of it.");
    function lambda7(node) {
      let caught = js_catch_clause_names(node);
      la(caught);
    }
    js_stack_filtered_multiple_each(stack, ["CatchClause"], lambda7);
  }
  let defineds = list_adder_multiple(lambda4);
  return defineds;
}
