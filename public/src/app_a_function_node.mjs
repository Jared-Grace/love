import { js_keyword_import } from "../../../love/public/src/js_keyword_import.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_node(a) {
  let { node, parent } = a;
  let type = object_property_get(node, "type");
  let lookup = {
    Program: function lambda3() {
      let body = object_property_get(node, "body");
      function lambda(b) {
        let a2 = object_copy_assign(a, {
          node: b,
        });
        app_a_function_node(a2);
      }
      each(body, lambda);
    },
    ["ImportDeclaration"]: function lambda4() {
      let source = object_property_get(node, "source");
      let value2 = object_property_get(source, "value");
      let s3 = js_string(value2);
      let specifiers = object_property_get(node, "specifiers");
      let text = js_keyword_import();
      let s = html_span_text(parent, text);
      let s2 = html_span_text(parent, s3);
      log(node);
    },
    ["ExportNamedDeclaration"]: function lambda5() {
      log(node);
    },
  };
  let value = object_property_get(lookup, type);
  value();
}
