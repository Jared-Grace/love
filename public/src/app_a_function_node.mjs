import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_node(a) {
  let { node } = a;
  let type = object_property_get(node, "type");
  let lookup = {
    Program: function lambda3() {
      let body = object_property_get(node, "body");
      function lambda(b) {
        const from = {
          node: b,
        };
        let a2 = object_copy_assign(a, from);
        app_a_function_node(a2);
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
