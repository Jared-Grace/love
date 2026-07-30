import { function_import } from "./function_import.mjs";
import { equal } from "./equal.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function example_rejection_run(e) {
  "A rejection example names the guard it is asking to refuse, and the name is turned into the function the one way the repo turns any name into a function. This used to build the path itself, spelling the folder the function files happen to sit in - which was a second place holding that knowledge, and the wrong answer the moment a file is somewhere else.";
  let fn = await function_import(e.fn);
  function arg_parse(a) {
    if (equal(a.parse, "value")) {
      let r = a.value;
      return r;
    }
    if (equal(a.parse, "statement")) {
      let statement = js_parse_statement(a.code);
      return statement;
    }
    if (equal(a.parse, "statements")) {
      ("A guard that asks a question about several lines at once takes a list of");
      ("them, so the corpus needs a way to write one — without it such a guard can");
      ("only be checked through a whole transform, which tests the arithmetic");
      ("around it rather than the judgement inside it.");
      let r2 = a.code.map(js_parse_statement);
      return r2;
    }
    let expression = js_parse_expression(a.code);
    return expression;
  }
  let args = e.args.map(arg_parse);
  let threw = false;
  try {
    fn(...args);
  } catch (err) {
    threw = true;
  }
  let want = equal(e.expect, "throw");
  let r3 = equal(threw, want) ? "pass" : "fail";
  return r3;
}
