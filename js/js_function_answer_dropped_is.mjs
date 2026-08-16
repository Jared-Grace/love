import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_statement_string_not_is } from "./js_statement_string_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_get } from "./list_get.mjs";
import { js_statement_call_alone } from "./js_statement_call_alone.mjs";
export function js_function_answer_dropped_is(node) {
  "Whether this function makes one call and throws its answer away, handing back nothing of its own.";
  "A function like that hands back nothing whatever the function it calls hands back, so the two are not the same function even when the arguments line up exactly. Passing the one it calls in its stead would start handing the caller an answer where the caller was given nothing before.";
  let body = property_get(node, "body");
  let block_is = js_node_type_is(body, "BlockStatement");
  if (not(block_is)) {
    return false;
  }
  let statements_all = property_get(body, "body");
  let statements = list_filter(statements_all, js_statement_string_not_is);
  let size = list_size(statements);
  if (equal_not(size, 1)) {
    return false;
  }
  let only = list_get(statements, 0);
  let alone = js_statement_call_alone(only);
  let dropped_is = equal_not(alone, null);
  return dropped_is;
}
