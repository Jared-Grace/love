import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_fold_auto } from "./js_fold_auto.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export function example_fold_auto_lambda(names) {
  "Adapt the auto-fold to the examples-gate transform shape: load each candidate fn's live repo AST by";
  "name, then return a lambda over F's AST that folds whichever candidates match — the discovery layer";
  "picking the right fn from a set without being told which. Non-matching candidates leave F unchanged.";
  arguments_assert(arguments, 1);
  async function lambda(f_ast) {
    let x_asts = await list_map_unordered_async(names, function_ast);
    js_fold_auto(f_ast, x_asts);
    return f_ast;
  }
  return lambda;
}
