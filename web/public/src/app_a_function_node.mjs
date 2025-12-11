import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_node(ast) {
  let type = object_property_get(ast, "type");
  let lookup = {
    Program: function lambda3() {
      let body = object_property_get(ast, "body");
      function lambda(b) {
        app_a_function_node(b);
      }
      each(body, lambda);
    },
    ["ImportDeclaration"]: function lambda4() {},
    ["ExportNamedDeclaration"]: function lambda5() {},
  };
  let value = object_property_get(lookup, type);
  value();
}
