import { js_statement_find_call_named } from "./js_statement_find_call_named.mjs";
import { js_select_apply } from "./js_select_apply.mjs";
export function example_select_apply_lambda(call_name, apply_fn) {
  "The corpus half of the selector-and-transform seam. The selector is fixed here";
  "and the transform arrives as an argument, so one lambda covers every example";
  "that finds a statement by the call inside it and then rewrites that statement.";
  "It runs the same middle the command line runs, so an example that passes is";
  "evidence about the real path rather than about a copy of it.";
  async function lambda(ast) {
    let select_args = [call_name];
    let apply_args = [];
    await js_select_apply(
      ast,
      js_statement_find_call_named,
      select_args,
      apply_fn,
      apply_args,
    );
  }
  return lambda;
}
