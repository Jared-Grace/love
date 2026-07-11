import { js_operator_to_call } from "../../../love/public/src/js_operator_to_call.mjs";
import { js_operator_triple_equal } from "../../../love/public/src/js_operator_triple_equal.mjs";
export async function js_triple_equal_to_equal(ast) {
  let o = js_operator_triple_equal();
  let properties = ["left", "right"];
  let type = "BinaryExpression";
  let r = await js_operator_to_call(o, ast, properties, type);
  return r;
}
