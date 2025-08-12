import { log } from "./log.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get } from "./list_get.mjs";
import { each_range } from "./each_range.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
import { list_next } from "./list_next.mjs";
import { each } from "./each.mjs";
import { js_stack_filtered } from "./js_stack_filtered.mjs";
import { list_adder_multiple } from "./list_adder_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_identifier_defineds(v) {
  let { stack } = v;
  let defineds = list_adder_multiple((la) => {
    let filtered = js_stack_filtered(stack, "BlockStatement");
    each(filtered, (bs) => {
      let list = list_next(stack, bs);
      let item = list_next(stack, list);
      let index = list_index_of_next(list, item);
      each_range(index, (i) => {
        let list_item = list_get(list, i);
        if (js_node_type_is(list_item, "VariableDeclaration")) {
          let { declarations } = list_item;
          let ids = list_map_property(declarations, "id");
          each(ids, (id) => {
            if (js_node_type_is(id, "ObjectPattern")) {
              let { properties } = id;
              each(properties, (k) => {
                let keys = list_map_property(k, "key");
                let names = js_identifiers_to_names(keys);
                la(names);
              });
            } else if (js_node_type_is(id, "Identifier")) {
              let value = object_property_get(identifiers, "name");
              la(value);
            }
          });
          log(ids);
          let names = js_identifiers_to_names(ids);
        }
      });
    });
  });
  return defineds;
}
