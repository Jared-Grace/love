import { string_wrap_parenthesis } from "../../../love/public/src/string_wrap_parenthesis.mjs";
export function js_code_wrap_parenthesis(inside) {
  const inside_larger = " " + inside + " ";
  let v = string_wrap_parenthesis(inside_larger);
  return v;
}
