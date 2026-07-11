import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_operator_to_call } from "../../../love/public/src/js_operator_to_call.mjs";
export async function js_bang_to_not(ast) {
  let name = js_flo_name(ast);
  if (equal(name, not.name)) {
    return;
  }
  let operator = "!";
  let fn = not;
  let o = {
    fn,
    operator,
  };
  let properties = ["argument"];
  let type = "UnaryExpression";
  await js_operator_to_call(ast, o, properties, type);
  return;
}
