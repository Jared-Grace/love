import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_code_confined_refusals } from "./js_code_confined_refusals.mjs";
export function eval_expression_confined(source) {
  "The value of a piece of code, worked out only when the code can reach nothing outside itself.";
  ("The twin of ",
    fn_name("eval_console_log_confined"),
    " for code that answers with a value rather than printing. It asks the same reading, ",
    fn_name("js_code_confined_refusals"),
    ", and runs nothing when the answer is not empty, so whatever is handed in can touch only its own values.");
  ("It runs inside a function made for the purpose rather than at the top level, so a var the code declares stays inside that function instead of becoming a name every later piece of code in the same process would find. The one name that function binds is the code itself, and the reading refuses any program naming it, because it is not on the short list of harmless outside names.");
  let refusals = js_code_confined_refusals(source);
  if (greater_than(refusals.length, 0)) {
    throw new Error(
      "the code reaches outside itself, so it is not run: " +
        refusals.join(", ") +
        "\n" +
        source,
    );
  }
  let value = new Function("source", "return eval(source);")(source);
  return value;
}
