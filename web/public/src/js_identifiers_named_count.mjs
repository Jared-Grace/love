import {counter} from "./counter.mjs";
import {js_visit_type} from "./js_visit_type.mjs";
import {object_property_get} from "./object_property_get.mjs";
export function js_identifiers_named_count(ast, i_name) {
  function lambda3(c) {
    function lambda2(v) {
      let node = object_property_get(v, "node");
      let name = object_property_get(node, "name");
      if (name === i_name) {
        c();
      }
    }
    js_visit_type(ast, "Identifier", lambda2);
  }
  let count_import = counter(lambda3);
  return count_import;
}
