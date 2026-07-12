import { js_operators_to_calls_generic } from "./js_operators_to_calls_generic.mjs";
export async function js_operators_to_calls_binary(ast, operators) {
  let properties = ["left", "right"];
  let type = "BinaryExpression";
  let r = await js_operators_to_calls_generic(ast, operators, properties, type);
  return r;
}
