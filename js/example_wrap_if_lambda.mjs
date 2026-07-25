import { js_statement_find_call_named } from "./js_statement_find_call_named.mjs";
import { js_statement_wrap_if } from "./js_statement_wrap_if.mjs";
export function example_wrap_if_lambda(call_name) {
  "The selector-plus-transform seam in one lambda: a SELECTOR finds the block";
  "item (the statement holding a call to call_name), then a TRANSFORM rewrites";
  "that node — wrapping the call in an if-test. Two halves, paired by a list of";
  "selected nodes, so any selector composes with any transform written this way.";
  async function lambda(ast) {
    let node = await js_statement_find_call_named(ast, call_name);
    let selects = [node];
    js_statement_wrap_if(ast, selects);
  }
  return lambda;
}
