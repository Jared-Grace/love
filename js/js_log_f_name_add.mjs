import { each } from "./each.mjs";
import { log } from "./log.mjs";
import { list_set_first } from "./list_set_first.mjs";
import { js_expression_fn_name } from "./js_expression_fn_name.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { property_get } from "./property_get.mjs";
import { log_keep } from "./log_keep.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { log_unparse } from "./log_unparse.mjs";
export function js_log_f_name_add(ast) {
  let log_fns = [log_keep, log, log_unparse];
  let f_name = js_flo_name(ast);
  function lambda(log_fn) {
    function lambda2(a) {
      let args = property_get(a, "args");
      list_size_assert(args, 2);
      let expression = js_expression_fn_name(f_name);
      list_set_first(args, expression);
    }
    js_visit_calls_named(ast, log_fn.name, lambda2);
  }
  each(log_fns, lambda);
}
