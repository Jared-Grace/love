import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export async function sandbox_3() {
  let expression = js_parse_expression("c=b");
  return expression;
}
