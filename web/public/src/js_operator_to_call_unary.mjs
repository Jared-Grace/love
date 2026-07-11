import { js_operator_to_call } from "../../../love/public/src/js_operator_to_call.mjs";
export async function js_operator_to_call_unary(ast, o) {
  let properties = ["argument"];
  let type = "UnaryExpression";
  await js_operator_to_call(ast, o, properties, type);
}
