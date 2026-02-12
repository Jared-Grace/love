import { js_assign_default } from "../../../love/public/src/js_assign_default.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
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
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_ternary_replace(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let alternate = property_get(node, "alternate");
    let consequent = property_get(node, "consequent");
    const list = [alternate, consequent];
    let b = list_all(list, js_block_statement_is);
    if (not(b)) {
      return false;
    }
    let mapped = list_map(list, js_block_to_body);
    let a = list_all(mapped, list_size_1);
    if (not(a)) {
      return false;
    }
    let mapped2 = list_map(mapped, list_single);
    let es = list_all(mapped2, js_expression_statement_is);
    if (not(es)) {
      return false;
    }
    let mapped3 = list_map_property(mapped2, "expression");
    let ae = list_all(mapped3, js_assignment_expression_is);
    if (not(ae)) {
      return false;
    }
    let mapped4 = list_map_property(mapped2, "left");
    let i = list_all(mapped4, js_identifier_is);
    if (not(i)) {
      return false;
    }
    let mapped5 = list_map(mapped, js_identifier_name);
    let eq = list_all_equal(mapped5);
    if (not(eq)) {
      return false;
    }
    let first = list_first(mapped5);
    let assign = js_declare(name, init);
    let s = js_assign_default();
  }
  js_visit_type(ast, "IfStatement", lambda);
  return;
  let index_selected = null;
  if (index_selected === index) {
    index_selected = null;
  } else {
    index_selected = index;
  }
}
