import { function_ast } from "./function_ast.mjs";
export async function function_ast_fn(fn) {
  let r = await function_ast(fn.name);
  return r;
}
