import { function_ast } from "../../../love/public/src/function_ast.mjs";
export async function function_ast_fn(fn) {
  let r = await function_ast(fn.name);
  return r;
}
