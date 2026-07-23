import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_fold_all } from "./js_fold_all.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function function_fold(x_name, f_name) {
  // Brick 5b: the CLI wrapper over js_fold_all. Read pure fn x's AST (read-only), then transform F in
  // place — fold EVERY contiguous occurrence of x's body inside F into a call to x. When no sound fold
  // applies js_fold_all mutates nothing (returns null) and F is written back unchanged.
  // Run: `node scripts/r.mjs function_fold <x_name> <f_name>`. Both should already be atomized (the
  // watcher keeps repo files atomized); the match is on the atomized dataflow DAG.
  arguments_assert(arguments, 2);
  let x_ast = await function_ast(x_name);
  async function lambda(f_ast) {
    let result = js_fold_all(x_ast, f_ast);
    // A fold introduces a call to x and can orphan the callee imports it replaced, so repair imports
    // (add x, drop now-unused) whenever a fold actually happened. No fold => leave F untouched.
    let folded = null_not_is(result);
    if (folded) {
      await js_imports_fix(f_ast);
    }
    return result;
  }
  let output = await function_transform(f_name, lambda);
  return output;
}
