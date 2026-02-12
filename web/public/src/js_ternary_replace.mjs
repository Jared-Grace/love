import { js_list_type_each } from "../../../love/public/src/js_list_type_each.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_statement } from "../../../love/public/src/js_code_statement.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { js_left_right_set } from "../../../love/public/src/js_left_right_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_assign_default } from "../../../love/public/src/js_assign_default.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_all_equal } from "../../../love/public/src/list_all_equal.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { js_assignment_expression_is } from "../../../love/public/src/js_assignment_expression_is.mjs";
import { js_expression_statement_is } from "../../../love/public/src/js_expression_statement_is.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_block_statement_is } from "../../../love/public/src/js_block_statement_is.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_block_to_body } from "../../../love/public/src/js_block_to_body.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ternary } from "./ternary.mjs";
export function js_ternary_replace(ast) {
  async function lambda(v) {
    let node = property_get(v, "node");
    let alternate = property_get(node, "alternate");
    let consequent = property_get(node, "consequent");
    const list = [alternate, consequent];
    let bs = list_all(list, js_block_statement_is);
    if (not(bs)) {
      return false;
    }
    let mapped = list_map(list, js_block_to_body);
    let bb = list_all(mapped, list_size_1);
    if (not(bb)) {
      return false;
    }
    let mapped2 = list_map(mapped, list_single);
    let esi = list_all(mapped2, js_expression_statement_is);
    if (not(esi)) {
      return false;
    }
    let ess = list_map_property(mapped2, "expression");
    let ae = list_all(ess, js_assignment_expression_is);
    if (not(ae)) {
      return false;
    }
    let identifiers = list_map_property(ess, "left");
    let i = list_all(identifiers, js_identifier_is);
    if (not(i)) {
      return false;
    }
    let names = list_map(identifiers, js_identifier_name);
    let eq = list_all_equal(names);
    if (not(eq)) {
      return false;
    }
    let first = list_first(names);
    let expression = js_parse_expression(first);
    let a = js_assign_default();
    let code_expression = js_code_call(ternary.name);
    let e = js_parse_expression(code_expression);
    let arguments2 = property_get(e, "arguments");
    let test = property_get(node, "test");
    list_add(arguments2, test);
    let rights = list_map_property(ess, "right");
    list_add_multiple(arguments2, rights);
    js_left_right_set(a, expression, e);
    let stack = property_get(v, "stack");
    let e1 = list_get_end_1(stack);
    let c = js_code_statement("a");
    let statement = js_parse_statement(c);
    property_set(statement, "expression", e1);
    object_replace(node, statement);
  }
  js_list_type_each(ast, "IfStatement", lambda);
  return;
  let index_selected = null;
  if (index_selected === index) {
    index_selected = null;
  } else {
    index_selected = index;
  }
}
