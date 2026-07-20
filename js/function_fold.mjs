import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_fold } from "./js_fold.mjs";
export async function function_fold(x_name, f_name) {
  // Brick 5b: the CLI wrapper over js_fold. Read pure fn x's AST (read-only), then transform F in
  // place — fold the first contiguous occurrence of x's body inside F into a call to x. When no sound
  // fold applies js_fold mutates nothing (returns null) and F is written back unchanged.
  // Run: `node scripts/r.mjs function_fold <x_name> <f_name>`. Both should already be atomized (the
  // watcher keeps repo files atomized); the match is on the atomized dataflow DAG.
  arguments_assert(arguments, 2);
  let x_ast = await function_ast(x_name);
  async function lambda(f_ast) {
    let result = js_fold(x_ast, f_ast);
    return result;
  }
  let output = await function_transform(f_name, lambda);
  return output;
}
