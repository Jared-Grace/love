import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function example_rejection_run(e) {
  let fn_mod = await import("./" + e.fn + ".mjs");
  let fn = fn_mod[e.fn];
  function arg_parse(a) {
    if (a.parse === "statement") {
      return js_parse_statement(a.code);
    }
    return js_parse_expression(a.code);
  }
  let args = e.args.map(arg_parse);
  let threw = false;
  try {
    fn(...args);
  } catch (err) {
    threw = true;
  }
  let want = e.expect === "throw";
  return threw === want ? "pass" : "fail";
}
