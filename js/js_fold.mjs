import { js_fold_blocks } from "./js_fold_blocks.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
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
  ("Finding the runs and asking about them are separate here, because a caller pairing one F against many x wants the finding done once. That one calls the sibling directly and keeps what it found; this stays the way to ask when there is only the one question.");
  let blocks = js_blocks_all(f_ast);
  let result = js_fold_blocks(x_ast, f_ast, blocks);
  return result;
}
