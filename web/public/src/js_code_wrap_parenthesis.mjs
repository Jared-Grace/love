import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
export function js_code_wrap_parenthesis(inside) {
  const inside_larger = " " + inside + " ";
  let v = text_wrap_parenthesis(inside_larger);
  return v;
}
