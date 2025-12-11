import { app_a_brace_right } from "../../../love/public/src/app_a_brace_right.mjs";
import { app_a_brace_left } from "../../../love/public/src/app_a_brace_left.mjs";
import { js_code_parenthesis_right } from "../../../love/public/src/js_code_parenthesis_right.mjs";
import { js_code_parenthesis_left } from "../../../love/public/src/js_code_parenthesis_left.mjs";
import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { app_a_keyword_blue_space } from "../../../love/public/src/app_a_keyword_blue_space.mjs";
import { js_keyword_async } from "../../../love/public/src/js_keyword_async.mjs";
import { app_a_identifier } from "../../../love/public/src/app_a_identifier.mjs";
import { js_keyword_function } from "../../../love/public/src/js_keyword_function.mjs";
import { list_empty_is_assert } from "../../../love/public/src/list_empty_is_assert.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { js_keyword_export } from "../../../love/public/src/js_keyword_export.mjs";
import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { app_a_keyword } from "../../../love/public/src/app_a_keyword.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { app_a_function_node_child_parent } from "../../../love/public/src/app_a_function_node_child_parent.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { js_keyword_from } from "../../../love/public/src/js_keyword_from.mjs";
import { object_property_get_double_equal_assert } from "../../../love/public/src/object_property_get_double_equal_assert.mjs";
import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { js_keyword_import } from "../../../love/public/src/js_keyword_import.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_node(a) {
  let { node, parent } = a;
  let type = object_property_get(node, "type");
  let lookup = {
    Program: function lambda3() {
      let body = object_property_get(node, "body");
      function lambda(b) {
        let div = html_div(parent);
        app_a_function_node_child_parent(a, b, div);
      }
      each(body, lambda);
    },
    ["ImportDeclaration"]: function lambda4() {
      let source = object_property_get(node, "source");
      let text = js_keyword_import();
      app_a_keyword(parent, text);
      let s = app_a_brace_left(parent);
      let specifiers = object_property_get(node, "specifiers");
      function lambda2(specifier) {
        app_a_function_node_child(a, specifier);
      }
      each(specifiers, lambda2);
      let span2 = app_a_brace_right(parent);
      let text2 = js_keyword_from();
      app_a_keyword(parent, text2);
      html_span_space(parent);
      let value2 = object_property_get(source, "value");
      let s3 = js_code_string(value2);
      let span3 = html_span_text(parent, s3);
      html_font_color_set(span3, "#d07200ff");
      let text3 = js_code_semicolon();
      let span4 = html_span_text(parent, text3);
    },
    ["ImportSpecifier"]: function lambda6() {
      let imported = object_property_get(node, "imported");
      js_identifier_is_assert(imported);
      let local = object_property_get(node, "local");
      const property_name = "name";
      object_property_get_double_equal_assert(imported, local, property_name);
      app_a_identifier(parent, local);
    },
    ["ExportNamedDeclaration"]: function lambda5() {
      let text4 = js_keyword_export();
      app_a_keyword(parent, text4);
      html_span_space(parent);
      let declaration = object_property_get(node, "declaration");
      let specifiers = object_property_get(node, "specifiers");
      list_empty_is_assert(specifiers);
      app_a_function_node_child(a, declaration);
    },
    ["FunctionDeclaration"]: function lambda5() {
      let generator = object_property_get(node, "generator");
      false_is_assert(generator);
      let v = js_keyword_function();
      app_a_keyword_blue_space(parent, v);
      let async = object_property_get(node, "async");
      if (async) {
        let v2 = js_keyword_async();
        app_a_keyword_blue_space(parent, v2);
      }
      let id = object_property_get(node, "id");
      app_a_identifier(parent, id);
      let l = js_code_parenthesis_left();
      let span = html_span_text(parent, l);
      let params = object_property_get(node, "params");
      list_empty_is_assert(params);
      let r = js_code_parenthesis_right();
      let span5 = html_span_text(parent, r);
      let s = app_a_brace_left(parent);
      let body2 = object_property_get(node, "body");
      let span2 = app_a_brace_right(parent);
    },
    ["BlockStatement"]: function lambda7() {
      $l;
    },
  };
  let value = object_property_get(lookup, type);
  value();
}
