import { js_statement_if_consequent_set } from "../../../love/public/src/js_statement_if_consequent_set.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_statement_if_return_add(ast, selects) {
  let statement_if = list_first(selects);
  js_statement_if_consequent_set(statement_if, expression);
}
