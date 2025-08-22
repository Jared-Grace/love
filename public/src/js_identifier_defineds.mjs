import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { js_types_function } from "./js_types_function.mjs";
import { js_stack_filtered_multiple_each } from "./js_stack_filtered_multiple_each.mjs";
import { js_stack_filtered_each } from "./js_stack_filtered_each.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get } from "./list_get.mjs";
import { each_range } from "./each_range.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
import { list_next } from "./list_next.mjs";
import { each } from "./each.mjs";
import { list_adder_multiple } from "./list_adder_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { error } from "./error.mjs";
export function js_identifier_defineds(v) {
  let { stack } = v;
  function lambda4(la) {
    js_stack_filtered_each(stack, "BlockStatement", lambda3);
    function lambda3(bs) {
      let list = list_next(stack, bs);
      let item = list_next(stack, list);
      let index = list_index_of_next(list, item);
      function lambda2(i) {
        let list_item = list_get(list, i);
        if (js_node_type_is(list_item, "VariableDeclaration")) {
          let { declarations } = list_item;
          let ids = list_map_property(declarations, "id");
          function lambda(id) {
            if (js_node_type_is(id, "ObjectPattern")) {
              let { properties } = id;
              let values = list_map_property(properties, "value");
              let names = js_identifiers_to_names(values);
              la(names);
            } else if (js_node_type_is(id, "Identifier")) {
              let value = object_property_get(id, "name");
              la([value]);
            } else {
              error();
            }
          }
          each(ids, lambda);
        }
      }
      each_range(index, lambda2);
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
