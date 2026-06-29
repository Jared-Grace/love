import { list_index_of_insert } from "../../../love/public/src/list_index_of_insert.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_returns } from "../../../love/public/src/js_visit_returns.mjs";
export function js_find_return_insert_statement(ast, statement) {
  function lambda(la) {
    js_visit_returns(ast, la);
  }
  let list = list_adder(lambda);
  let only = list_single(list);
  let stack = property_get(only, "stack");
  let node = property_get(only, "node");
  let e1 = list_get_end_1(stack);
  list_index_of_insert(e1, node, statement);
}
