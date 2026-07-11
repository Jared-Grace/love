import { js_operators_to_calls_generic } from "../../../love/public/src/js_operators_to_calls_generic.mjs";
export async function js_operators_to_calls_unary(ast, operators) {
  let properties = ["argument"];
  let type = "UnaryExpression";
  let r = await js_operators_to_calls_generic(ast, operators, properties, type);
  return r;
}
