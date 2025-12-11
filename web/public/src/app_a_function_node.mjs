import { js_keyword_from } from "../../../love/public/src/js_keyword_from.mjs";
import { object_property_get_double_equal_assert } from "../../../love/public/src/object_property_get_double_equal_assert.mjs";
import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { js_keyword_import } from "../../../love/public/src/js_keyword_import.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
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
        app_a_function_node_child(a, b);
      }
      each(body, lambda);
    },
    ["ImportDeclaration"]: function lambda4() {
      let source = object_property_get(node, "source");
      let value2 = object_property_get(source, "value");
      let s3 = js_string(value2);
      let text = js_keyword_import();
      let s = html_span_text(parent, text + " ");
      let specifiers = object_property_get(node, "specifiers");
      function lambda2(specifier) {
        app_a_function_node_child(a, specifier);
      }
      each(specifiers, lambda2);
      let text2 = js_keyword_from();
      let span2 = html_span_text(parent, " " + text2 + " " + s3);
      log(node);
    },
    ["ImportSpecifier"]: function lambda6() {
      let imported = object_property_get(node, "imported");
      js_identifier_is_assert(imported);
      let local = object_property_get(node, "local");
      const property_name = "name";
      let name = object_property_get_double_equal_assert(
        imported,
        local,
        property_name,
      );
      let span = html_span_text(parent, name);
      js_identifier_is_assert(local);
      log(node);
    },
    ["ExportNamedDeclaration"]: function lambda5() {
      log(node);
    },
  };
  let value = object_property_get(lookup, type);
  value();
}
