import { js_operator_to_call } from "../../../love/public/src/js_operator_to_call.mjs";
export async function js_operator_to_call_binary(ast, o) {
  let properties = ["left", "right"];
  let type = "BinaryExpression";
  let r = await js_operator_to_call(ast, o, properties, type);
  return r;
}
