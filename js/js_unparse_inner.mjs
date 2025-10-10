import { generate } from "astring";
export function js_unparse_inner(ast) {
  let output = generate(ast);
  return output;
}
