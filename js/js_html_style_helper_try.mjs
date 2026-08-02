import { list_size_equal } from "./list_size_equal.mjs";
import { not } from "./not.mjs";
import { js_call_callee_name_equal } from "./js_call_callee_name_equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_function_declaration_statements_doing } from "./js_function_declaration_statements_doing.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { list_second } from "./list_second.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_get } from "./list_get.mjs";
import { js_html_style_helper_kind_try } from "./js_html_style_helper_kind_try.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function js_html_style_helper_try(declaration) {
  "Read a function and answer what style property it is a named helper for, or null if it is not one.";
  "The table this builds is derived rather than written down, and that is the point. A hand-kept list of which helper covers which property goes stale the first time somebody adds a helper and does not think to also edit the list, and a codemod driven by a stale table quietly stops migrating the newest cases - the ones most likely to still be spelled by hand.";
  "The body must be that one call and nothing else. A helper that also sets a second property, or reads something first, is not interchangeable with the bare call, so rewriting to it would change behaviour rather than preserve it.";
  let statements = js_function_declaration_statements_doing(declaration);
  let single = list_size_1(statements);
  if (not(single)) {
    return null;
  }
  let statement = list_first(statements);
  let expression_is = js_node_type_is(statement, "ExpressionStatement");
  if (not(expression_is)) {
    return null;
  }
  let call = property_get(statement, "expression");
  let name2 = fn_name("html_style_set");
  let sets = js_call_callee_name_equal(call, name2);
  if (not(sets)) {
    return null;
  }
  let args = js_call_arguments_get(call);
  let three = list_size_equal(args, 3);
  if (not(three)) {
    return null;
  }
  let params = js_function_declaration_params_names(declaration);
  let target = list_first(args);
  let target_is = js_identifier_is(target);
  if (not(target_is)) {
    return null;
  }
  let styled = js_identifier_name(target);
  let first = list_first(params);
  let same = equal(styled, first);
  if (not(same)) {
    return null;
  }
  let key = list_second(args);
  let key_is = js_literal_is(key);
  if (not(key_is)) {
    return null;
  }
  let prop = js_literal_value_get(key);
  let value_node = list_get(args, 2);
  let kind = js_html_style_helper_kind_try(value_node, params);
  if (not(kind)) {
    return null;
  }
  let name = js_function_declaration_name(declaration);
  let helper = object_merge_set(
    {
      name,
      prop,
    },
    kind,
  );
  return helper;
}
