import { string_pad_space } from "../../../love/public/src/string_pad_space.mjs";
import { app_a_comma } from "../../../love/public/src/app_a_comma.mjs";
import { js_code_bracket_open } from "../../../love/public/src/js_code_bracket_open.mjs";
import { js_code_bracket_close } from "../../../love/public/src/js_code_bracket_close.mjs";
import { app_a_body_inner } from "../../../love/public/src/app_a_body_inner.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { js_code_colon } from "../../../love/public/src/js_code_colon.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { app_a_braces_wrap } from "../../../love/public/src/app_a_braces_wrap.mjs";
import { js_code_equals_padded } from "../../../love/public/src/js_code_equals_padded.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_a_nodes_list } from "../../../love/public/src/app_a_nodes_list.mjs";
import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { app_a_api_cache_global } from "../../../love/public/src/app_a_api_cache_global.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { app_a_semicolon } from "../../../love/public/src/app_a_semicolon.mjs";
import { app_a_parenthesis_wrap } from "../../../love/public/src/app_a_parenthesis_wrap.mjs";
import { js_keyword_await } from "../../../love/public/src/js_keyword_await.mjs";
import { app_a_keyword_purple_space } from "../../../love/public/src/app_a_keyword_purple_space.mjs";
import { app_a_body } from "../../../love/public/src/app_a_body.mjs";
import { app_a_brace_right } from "../../../love/public/src/app_a_brace_right.mjs";
import { app_a_brace_left } from "../../../love/public/src/app_a_brace_left.mjs";
import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { app_a_keyword_blue_space } from "../../../love/public/src/app_a_keyword_blue_space.mjs";
import { js_keyword_async } from "../../../love/public/src/js_keyword_async.mjs";
import { app_a_identifier } from "../../../love/public/src/app_a_identifier.mjs";
import { js_keyword_function } from "../../../love/public/src/js_keyword_function.mjs";
import { list_empty_is_assert } from "../../../love/public/src/list_empty_is_assert.mjs";
import { js_keyword_export } from "../../../love/public/src/js_keyword_export.mjs";
import { app_a_keyword_purple } from "../../../love/public/src/app_a_keyword_purple.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { js_keyword_from } from "../../../love/public/src/js_keyword_from.mjs";
import { object_property_get_double_equal_assert } from "../../../love/public/src/object_property_get_double_equal_assert.mjs";
import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { js_keyword_import } from "../../../love/public/src/js_keyword_import.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_node(a) {
  let { node, parent, context } = a;
  let type = object_property_get(node, "type");
  let lookup = {
    Program: function lambda3() {
      app_a_body(node, parent, a);
    },
    ["ImportDeclaration"]: function lambda4() {
      let source = object_property_get(node, "source");
      let text = js_keyword_import();
      app_a_keyword_purple(parent, text);
      app_a_braces_wrap(parent, inner);
      let text2 = js_keyword_from();
      app_a_keyword_purple_space(parent, text2);
      app_a_function_node_child(a, source);
      app_a_semicolon(parent);
      function inner() {
        let specifiers = object_property_get(node, "specifiers");
        function lambda2(specifier) {
          app_a_function_node_child(a, specifier);
        }
        each(specifiers, lambda2);
      }
    },
    ["ImportSpecifier"]: function lambda6() {
      let imported = object_property_get(node, "imported");
      js_identifier_is_assert(imported);
      let local = object_property_get(node, "local");
      const property_name = "name";
      object_property_get_double_equal_assert(imported, local, property_name);
      app_a_function_node_child(a, local);
    },
    ["ExportNamedDeclaration"]: function lambda5() {
      let text4 = js_keyword_export();
      app_a_keyword_purple_space(parent, text4);
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
      app_a_function_node_child(a, id);
      app_a_parenthesis_wrap(parent, inner);
      function inner() {
        let params = object_property_get(node, "params");
        app_a_nodes_list(a, params, parent);
      }
      let s = app_a_brace_left(parent);
      let body2 = object_property_get(node, "body");
      app_a_function_node_child(a, body2);
      let span2 = app_a_brace_right(parent);
    },
    ["BlockStatement"]: function lambda7() {
      app_a_body(node, parent, a);
    },
    ["ExpressionStatement"]: function lambda7() {
      let expression = object_property_get(node, "expression");
      app_a_function_node_child(a, expression);
      app_a_semicolon(parent);
    },
    ["AwaitExpression"]: function lambda() {
      let k = js_keyword_await();
      app_a_keyword_purple_space(parent, k);
      let argument = object_property_get(node, "argument");
      app_a_function_node_child(a, argument);
    },
    ["CallExpression"]: function lambda8() {
      let callee = object_property_get(node, "callee");
      app_a_function_node_child(a, callee);
      let arguments2 = object_property_get(node, "arguments");
      app_a_parenthesis_wrap(parent, inner);
      function inner() {
        app_a_nodes_list(a, arguments2, parent);
      }
    },
    ["Identifier"]: function lambda9() {
      app_a_identifier(parent, node);
    },
    ["Literal"]: function lambda10() {
      let raw = object_property_get(node, "raw");
      let span3 = html_span_text(parent, raw);
      html_font_color_set(span3, "#d07200ff");
      async function lambda12() {
        let value2 = object_property_get(node, "value");
        let function_name = fn_name("functions_names");
        let f_names = await app_a_api_cache_global(function_name, []);
        let includes = list_includes(f_names, value2);
        if (includes) {
          app_a_function_select(context, value2);
        }
      }
      html_on_pointerdown(span3, lambda12);
    },
    ["VariableDeclaration"]: function lambda11() {
      let kind = object_property_get(node, "kind");
      app_a_keyword_blue_space(parent, kind);
      let declarations = object_property_get(node, "declarations");
      app_a_nodes_list(a, declarations, parent);
      app_a_semicolon(parent);
    },
    ["VariableDeclarator"]: function lambda13() {
      let id = object_property_get(node, "id");
      app_a_function_node_child(a, id);
      let text3 = js_code_equals_padded();
      let span = html_span_text(parent, text3);
      let init = object_property_get(node, "init");
      app_a_function_node_child(a, init);
    },
    ["ObjectExpression"]: function lambda14() {
      function lambda16() {
        let properties = object_property_get(node, "properties");
        app_a_body_inner(parent, properties, a);
      }
      app_a_braces_wrap(parent, lambda16);
      log({
        node,
      });
    },
    ["Property"]: function lambda14() {
      let kind2 = object_property_get(node, "kind");
      equal_assert(kind2, "init");
      let key = object_property_get(node, "key");
      if (false) {
        let b = js_code_bracket_open();
        let span5 = html_span_text(parent, b);
      }
      app_a_function_node_child(a, key);
      if (false) {
        let v3 = js_code_bracket_close();
        let span6 = html_span_text(parent, v3);
      }
      let c = js_code_colon();
      let span4 = html_span_text(parent, c);
      html_span_space(parent);
      let shorthand = object_property_get(node, "shorthand");
      false_is_assert(shorthand);
      let method = object_property_get(node, "method");
      false_is_assert(method);
      let computed = object_property_get(node, "computed");
      false_is_assert(computed);
      let value3 = object_property_get(node, "value");
      app_a_function_node_child(a, value3);
      app_a_comma(parent);
    },
    ["BinaryExpression"]: function lambda15() {
      let left = object_property_get(node, "left");
      app_a_function_node_child(a, left);
      let operator = object_property_get(node, "operator");
      let padded = string_pad_space(operator);
      html_span_text(parent, padded);
      let right = object_property_get(node, "right");
      app_a_function_node_child(a, right);
    },
    ["ArrayExpression"]: function lambda17() {
      log({
        node,
      });},
  };
  let value = object_property_get(lookup, type);
  value();
}
