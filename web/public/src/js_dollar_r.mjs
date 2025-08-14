import { list_second } from "./list_second.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { log } from "./log.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_return_empty } from "./js_code_return_empty.mjs";
export function js_dollar_r({ stack1, stack2 }) {
  log(stack2);
  let type_is = js_node_type_is(stack2, "SequenceExpression");
  if (type_is) {
    let second = list_second(list);
    let second2 = list_second(list2);
  }
  let code = js_code_return_empty();
  let from = js_parse_statement(code);
  object_replace(stack1, from);
}
