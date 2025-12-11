import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_node({ node }) {
  let type = object_property_get(node, "type");
  let lookup = {
    Program: function lambda3() {
      let body = object_property_get(node, "body");
      function lambda(b) {
        object_property_set(object, property_name, value2);
        app_a_function_node({
          node,
        });
      }
      each(body, lambda);
    },
    ["ImportDeclaration"]: function lambda4() {
      log(node);
    },
    ["ExportNamedDeclaration"]: function lambda5() {
      log(node);
    },
  };
  let value = object_property_get(lookup, type);
  value();
}
