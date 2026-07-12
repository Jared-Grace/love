import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_index_of_next_outside } from "./list_index_of_next_outside.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_types_function_node } from "./js_types_function_node.mjs";
import { js_stack_filtered_multiple_each } from "./js_stack_filtered_multiple_each.mjs";
import { js_stack_filtered_each } from "./js_stack_filtered_each.mjs";
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
  let stack = property_get(v, "stack");
  function lambda4(la) {
    let e = list_get_end_1(stack);
    if (js_node_type_is(e, "Property")) {
      let node = property_get(v, "node");
      let value = property_get(node, "name");
      la([value]);
    }
    function_type_add(e, "FunctionExpression");
    js_stack_filtered_each(stack, "BlockStatement", lambda3);
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
              let properties = property_get(id, "properties");
              let values = list_map_property(properties, "value");
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
        function_type_add(item2, "FunctionDeclaration");
      }
      each(bs_list, lambda2);
    }
    let types = js_types_function_node();
    function function_type_add(item2, f_type) {
      if (js_node_type_is(item2, f_type)) {
        let id2 = property_get(item2, "id");
        let ii = js_identifier_is(id2);
        if (ii) {
          let value = property_get(id2, "name");
          la([value]);
        }
      }
    }
    function lambda5(node) {
      let params_names = js_function_declaration_params_names(node);
      la(params_names);
    }
    js_stack_filtered_multiple_each(stack, types, lambda5);
  }
  let defineds = list_adder_multiple(lambda4);
  return defineds;
}
