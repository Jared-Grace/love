import { list_first } from "../../../love/public/src/list_first.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_statement_if_test_set } from "../../../love/public/src/js_statement_if_test_set.mjs";
import { js_statement_expression_get } from "../../../love/public/src/js_statement_expression_get.mjs";
import { js_statement_if } from "../../../love/public/src/js_statement_if.mjs";
export function js_statement_wrap_if(ast, selects) {
  let node = list_first(selects);
  let expression = js_statement_expression_get(node);
  let statement_if = js_statement_if();
  js_statement_if_test_set(statement_if, expression);
  object_replace(node, statement_if);
}
