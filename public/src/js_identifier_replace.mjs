import {object_property_set} from './object_property_set.mjs';
import {js_visit_type} from "./js_visit_type.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {list_adder_unique} from "./list_adder_unique.mjs";
export function js_identifier_replace(ast, name_from, name_to) {
  js_visit_type(ast, "Identifier", v => {
    let {node} = v;
    if (object_property_get(node, "name") === name_from) {
      object_property_set(node, "name", name_to);
    }
  });
}
