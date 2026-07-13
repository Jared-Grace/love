import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_map } from "./list_map.mjs";
import { js_list_add_multiple_call } from "./js_list_add_multiple_call.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function js_list_add_run_apply(run) {
  let e = property_get(run, "e");
  let statements = property_get(run, "statements");
  let fr = list_first_remaining(statements);
  let first = property_get(fr, "first");
  let remaining = property_get(fr, "remaining");
  let first_call = js_statement_expression_get(first);
  let first_args = js_call_arguments_get(first_call);
  let list_node = list_first(first_args);
  function value_get(statement) {
    let call = js_statement_expression_get(statement);
    let args = js_call_arguments_get(call);
    let value = list_second(args);
    return value;
  }
  let values = list_map(statements, value_get);
  let call = js_list_add_multiple_call(list_node, values);
  object_replace(first_call, call);
  function remove(statement) {
    list_remove(e, statement);
  }
  each(remaining, remove);
}
