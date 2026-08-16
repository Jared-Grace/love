import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { each } from "./each.mjs";
export function js_identifier_defineds_each_statement_up_to(i, bs_list, la) {
  arguments_assert(arguments, 3);
  let list_item = list_get(bs_list, i);
  if (js_node_type_is(list_item, "VariableDeclaration")) {
    let declarations = js_declaration_declarators_get(list_item);
    let ids = list_map_property(declarations, "id");
    function lambda(id) {
      if (js_node_type_is(id, "ObjectPattern")) {
        let values = property_list_map_property(id, "properties", "value");
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
