import { add } from "../../love/js/add.mjs";
import { list_add_multiple } from "../../love/js/list_add_multiple.mjs";
import { or } from "../../love/js/or.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_list_add_call_try } from "./js_list_add_call_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_is } from "./list_is.mjs";
import { not } from "./not.mjs";
import { js_list_add_run_start_is } from "./js_list_add_run_start_is.mjs";
import { js_list_add_run_gather } from "./js_list_add_run_gather.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { js_list_add_run_apply } from "./js_list_add_run_apply.mjs";
export function js_list_add_combine(ast) {
  text_combine_multiple([
    "this refactors two ",
    or.name,
    " more consecutive ",
    list_add.name,
    " calls on the same list into a single ",
    list_add_multiple.name,
    " call",
  ]);
  let runs = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let add = js_list_add_call_try(node);
    if (null_is(add)) {
      return;
    }
    let stack = property_get(v, "stack");
    let e = list_get_end_1(stack);
    let l = list_is(e);
    if (not(l)) {
      return;
    }
    let start = js_list_add_run_start_is(e, node, add);
    if (not(start)) {
      return;
    }
    let list = property_get(add, "list");
    let statements = js_list_add_run_gather(e, node, list);
    let m = list_multiple_is(statements);
    if (not(m)) {
      return;
    }
    let run = {
      e,
      statements,
    };
    list_add(runs, run);
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
  each(runs, js_list_add_run_apply);
}
