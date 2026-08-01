import { fn_name } from "./fn_name.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
import { js_fold_block } from "./js_fold_block.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_fold(x_ast, f_ast) {
  arguments_assert(arguments, 2);
  ("The first place in F where x's body was written out by hand, folded into a call.");
  ("Every run of statements in F is offered, not only the one it opens with. The two");
  ("lines an atom is made of are written under an if and inside a loop as often as");
  ("they are written at the top, and a reading that saw the body alone reported those");
  ("files as having nothing to fold - which reads as a repo already tidy.");
  ("Nothing about what makes a fold safe changed with the reach: see");
  (fn_name("js_fold_block"),
    " for the checks, all of which are per-run of statements");
  ("and none of which ever asked where the run sat.");
  let blocks = js_blocks_all(f_ast);
  for (let f_block of blocks) {
    let result = js_fold_block(x_ast, f_ast, f_block);
    let folded = null_not_is(result);
    if (folded) {
      return result;
    }
  }
  return null;
}
