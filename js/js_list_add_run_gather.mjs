import { list_next_try } from "./list_next_try.mjs";
import { js_list_add_call_try } from "./js_list_add_call_try.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifiers_names_equal } from "./js_identifiers_names_equal.mjs";
import { not } from "./not.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function js_list_add_run_gather(e, node, list) {
  let statements = [node];
  let next = list_next_try(e, node);
  let next_add = js_list_add_call_try(next);
  if (null_is(next_add)) {
    return statements;
  }
  let next_list = property_get(next_add, "list");
  let same = js_identifiers_names_equal(next_list, list);
  if (not(same)) {
    return statements;
  }
  let rest = js_list_add_run_gather(e, next, list);
  list_add_multiple(statements, rest);
  return statements;
}
