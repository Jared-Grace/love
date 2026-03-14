import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_set_first } from "../../../love/public/src/list_set_first.mjs";
import { js_expression_fn_name } from "../../../love/public/src/js_expression_fn_name.mjs";
import { list_size_assert } from "../../../love/public/src/list_size_assert.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_log_f_name_add(ast) {
  let log_fns = [log_keep, log];
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
