import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_fold_all } from "./js_fold_all.mjs";
export function example_fold_lambda(x_name) {
  // Adapt js_fold_all (two ASTs) to the examples-gate's one-file transform shape: bind pure fn x by name
  // (read its real repo AST live) and return a lambda over F's AST. On refusal js_fold_all returns null
  // and mutates nothing, so the gate's after === before proves the fold was correctly declined.
  arguments_assert(arguments, 1);
  async function lambda(f_ast) {
    let x_ast = await function_ast(x_name);
    let result = js_fold_all(x_ast, f_ast);
    return result;
  }
  return lambda;
}
