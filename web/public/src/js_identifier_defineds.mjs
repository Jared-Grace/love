import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_index_of_next_outside } from "../../../love/public/src/list_index_of_next_outside.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { js_types_function } from "../../../love/public/src/js_types_function.mjs";
import { js_stack_filtered_multiple_each } from "../../../love/public/src/js_stack_filtered_multiple_each.mjs";
import { js_stack_filtered_each } from "../../../love/public/src/js_stack_filtered_each.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder_multiple } from "../../../love/public/src/list_adder_multiple.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function js_identifier_defineds(v) {
  marker("1");
  let stack = object_property_get(v, "stack");
  let e1 = list_get_end_1(stack);
  if (js_node_type_is(e1, "Property")) {
  }
  function lambda4(la) {
    js_stack_filtered_each(stack, "BlockStatement", lambda3);
    function lambda3(bs) {
      let list = list_next(stack, bs);
      let item = list_next(stack, list);
      let index = list_index_of_next_outside(list, item);
      function each_statement_up_to(i) {
        let list_item = list_get(list, i);
        if (js_node_type_is(list_item, "VariableDeclaration")) {
          let declarations = object_property_get(list_item, "declarations");
          let ids = list_map_property(declarations, "id");
          function lambda(id) {
            if (js_node_type_is(id, "ObjectPattern")) {
              let properties = object_property_get(id, "properties");
              let values = list_map_property(properties, "value");
              let names = js_identifiers_to_names(values);
              la(names);
            } else if (js_node_type_is(id, "ArrayPattern")) {
              let elements = object_property_get(id, "elements");
              let names = js_identifiers_to_names(elements);
              la(names);
            } else if (js_node_type_is(id, "Identifier")) {
              let value = object_property_get(id, "name");
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
        if (js_node_type_is(item2, "FunctionDeclaration")) {
          let id2 = object_property_get(item2, "id");
          let ii = js_identifier_is(id2);
          if (ii) {
            let value = object_property_get(id2, "name");
            la([value]);
          }
        }
      }
      each(list, lambda2);
    }
    let types = js_types_function();
    function lambda5(node) {
      let params_names = js_declaration_params_names(node);
      la(params_names);
    }
    js_stack_filtered_multiple_each(stack, types, lambda5);
  }
  let defineds = list_adder_multiple(lambda4);
  return defineds;
}
