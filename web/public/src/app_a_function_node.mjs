import { list_add } from "../../../love/public/src/list_add.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { app_a_cut } from "../../../love/public/src/app_a_cut.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { app_a_variable_declaration } from "../../../love/public/src/app_a_variable_declaration.mjs";
import { app_a_function_declaration } from "../../../love/public/src/app_a_function_declaration.mjs";
import { app_a_if_statement } from "../../../love/public/src/app_a_if_statement.mjs";
import { list_last_not_is } from "../../../love/public/src/list_last_not_is.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { app_a_literal } from "../../../love/public/src/app_a_literal.mjs";
import { html_span } from "../../../love/public/src/html_span.mjs";
import { app_a_raw } from "../../../love/public/src/app_a_raw.mjs";
import { app_a_symbol_string_template } from "../../../love/public/src/app_a_symbol_string_template.mjs";
import { each_pair_or_null } from "../../../love/public/src/each_pair_or_null.mjs";
import { app_a_keyword_blue } from "../../../love/public/src/app_a_keyword_blue.mjs";
import { js_keyword_return } from "../../../love/public/src/js_keyword_return.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { app_a_identifier } from "../../../love/public/src/app_a_identifier.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { a_brackets_wrap } from "../../../love/public/src/a_brackets_wrap.mjs";
import { string_pad_space } from "../../../love/public/src/string_pad_space.mjs";
import { app_a_comma } from "../../../love/public/src/app_a_comma.mjs";
import { app_a_body_inner } from "../../../love/public/src/app_a_body_inner.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { js_code_colon } from "../../../love/public/src/js_code_colon.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { app_a_braces_wrap } from "../../../love/public/src/app_a_braces_wrap.mjs";
import { js_code_equals_padded } from "../../../love/public/src/js_code_equals_padded.mjs";
import { app_a_nodes_list } from "../../../love/public/src/app_a_nodes_list.mjs";
import { app_a_semicolon } from "../../../love/public/src/app_a_semicolon.mjs";
import { app_a_parenthesis_wrap } from "../../../love/public/src/app_a_parenthesis_wrap.mjs";
import { js_keyword_await } from "../../../love/public/src/js_keyword_await.mjs";
import { app_a_keyword_purple_space } from "../../../love/public/src/app_a_keyword_purple_space.mjs";
import { app_a_body } from "../../../love/public/src/app_a_body.mjs";
import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { list_empty_is_assert } from "../../../love/public/src/list_empty_is_assert.mjs";
import { js_keyword_export } from "../../../love/public/src/js_keyword_export.mjs";
import { app_a_keyword_purple } from "../../../love/public/src/app_a_keyword_purple.mjs";
import { js_keyword_from } from "../../../love/public/src/js_keyword_from.mjs";
import { object_property_get_double_equal_assert } from "../../../love/public/src/object_property_get_double_equal_assert.mjs";
import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { js_keyword_import } from "../../../love/public/src/js_keyword_import.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_node(a) {
  let node = object_property_get(a, "node");
  let parent = object_property_get(a, "parent");
  let type = object_property_get(node, "type");
  let lookup = {
    Program: function lambda3() {
      app_a_body(node, parent, a, false);
    },
    ["ImportDeclaration"]: function lambda4() {
      let source = object_property_get(node, "source");
      let text = js_keyword_import();
      app_a_keyword_purple_space(parent, text);
      app_a_braces_wrap(parent, inner);
      html_span_space(parent);
      let text2 = js_keyword_from();
      app_a_keyword_purple_space(parent, text2);
      app_a_function_node_child(a, source);
      app_a_semicolon(parent);
      function inner() {
        let specifiers = object_property_get(node, "specifiers");
        function lambda2(specifier) {
          html_span_space(parent);
          app_a_function_node_child(a, specifier);
          let n2 = list_last_not_is(specifiers, specifier);
          if (n2) {
            app_a_comma(parent);
          }
        }
        each(specifiers, lambda2);
        html_span_space(parent);
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
      app_a_function_declaration(a);
    },
    ["FunctionExpression"]: function lambda5() {
      app_a_function_declaration(a);
    },
    ["BlockStatement"]: function lambda7() {
      function lambda20() {
        app_a_body(node, parent, a, true);
      }
      let r = app_a_braces_wrap(parent, lambda20);
      return r;
    },
    ["ReturnStatement"]: function lambda7() {
      let k = js_keyword_return();
      app_a_keyword_purple(parent, k);
      let argument2 = object_property_get(node, "argument");
      let nn2 = null_not_is(argument2);
      if (nn2) {
        html_span_space(parent);
        app_a_function_node_child(a, argument2);
      }
      app_a_semicolon(parent);
    },
    ["ExpressionStatement"]: function lambda7() {
      let expression = object_property_get(node, "expression");
      app_a_function_node_child(a, expression);
      app_a_semicolon(parent);
    },
    ["AwaitExpression"]: function lambda() {
      let k = js_keyword_await();
      let v = app_a_keyword_purple_space(parent, k);
      let keyword = object_property_get(v, "keyword");
      function lambda19(o, choices) {
        let c = app_a_cut(o, a);
        list_add(choices, c);
      }
      app_a_overlay_choices(a, keyword, lambda19);
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
      app_a_identifier(a);
    },
    ["Literal"]: function lambda10() {
      let v3 = app_a_raw(node, parent);
      let component = object_property_get(v3, "component");
      let raw = object_property_get(v3, "raw");
      app_a_literal(a, component, node, on_change, raw);
      function on_change(value_new) {
        object_property_set(node, "raw", value_new);
      }
    },
    ["VariableDeclaration"]: function lambda11() {
      app_a_variable_declaration(a);
    },
    ["VariableDeclarator"]: function lambda13() {
      let id = object_property_get(node, "id");
      app_a_function_node_child(a, id);
      let text3 = js_code_equals_padded();
      let span = html_span_text(parent, text3);
      let init = object_property_get(node, "init");
      app_a_function_node_child(a, init);
    },
    ["ObjectExpression"]: o_props,
    ["Property"]: function lambda14() {
      let kind2 = object_property_get(node, "kind");
      equal_assert(kind2, "init");
      let key = object_property_get(node, "key");
      app_a_function_node_child(a, key);
      let shorthand = object_property_get(node, "shorthand");
      let method = object_property_get(node, "method");
      false_is_assert(method);
      let computed = object_property_get(node, "computed");
      false_is_assert(computed);
      if (not(shorthand)) {
        let c = js_code_colon();
        let span4 = html_span_text(parent, c);
        html_span_space(parent);
        let value3 = object_property_get(node, "value");
        app_a_function_node_child(a, value3);
      }
      app_a_comma(parent);
    },
    ["BinaryExpression"]: binary,
    ["ArrayExpression"]: function lambda17() {
      a_brackets_wrap(parent, inner);
      function inner() {
        let elements = object_property_get(node, "elements");
        app_a_nodes_list(a, elements, parent);
      }
    },
    ["IfStatement"]: function lambda18() {
      app_a_if_statement(a);
    },
    ["LogicalExpression"]: binary,
    ["AssignmentExpression"]: binary,
    ["ImportExpression"]: function lambda15() {
      let k2 = js_keyword_import();
      app_a_keyword_blue(parent, k2);
      function lambda20() {
        let source2 = object_property_get(node, "source");
        app_a_function_node_child(a, source2);
      }
      app_a_parenthesis_wrap(parent, lambda20);
    },
    ["MemberExpression"]: function lambda21() {
      let computed2 = object_property_get(node, "computed");
      false_is_assert(computed2);
      let optional = object_property_get(node, "optional");
      false_is_assert(optional);
      let object = object_property_get(node, "object");
      app_a_function_node_child(a, object);
      html_span_text(parent, ".");
      let property = object_property_get(node, "property");
      app_a_function_node_child(a, property);
    },
    ["ObjectPattern"]: o_props,
    ["TemplateLiteral"]: function lambda12() {
      let quasis = object_property_get(node, "quasis");
      let expressions = object_property_get(node, "expressions");
      let container = html_span(parent);
      app_a_symbol_string_template(container);
      function lambda22(q, e) {
        let value = object_property_get(q, "value");
        app_a_raw(value, container);
        if (null_not_is(e)) {
          app_a_keyword_purple(container, "$");
          function lambda24() {
            app_a_function_node_child(a, e);
          }
          app_a_braces_wrap(container, lambda24);
        }
      }
      each_pair_or_null(quasis, expressions, lambda22);
      app_a_symbol_string_template(container);
      let code = js_unparse(node);
      app_a_literal(a, container, node, on_change, code);
      function on_change(value_new) {
        let node_new = js_parse_expression(value_new);
        object_replace(node, node_new);
      }
    },
  };
  function o_props() {
    function lambda16() {
      let properties = object_property_get(node, "properties");
      app_a_body_inner(parent, properties, a, true);
    }
    app_a_braces_wrap(parent, lambda16);
  }
  function binary() {
    let left = object_property_get(node, "left");
    app_a_function_node_child(a, left);
    let operator = object_property_get(node, "operator");
    let padded = string_pad_space(operator);
    html_span_text(parent, padded);
    let right = object_property_get(node, "right");
    app_a_function_node_child(a, right);
  }
  let n = object_property_exists_not(lookup, type);
  if (n) {
    log_keep({
      node,
    });
    let json = json_to({
      type,
      msg: "TODO",
    });
    alert(json);
  }
  let value = object_property_get(lookup, type);
  let r = value();
  return r;
}
