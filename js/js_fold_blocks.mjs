import { js_fold_block } from "./js_fold_block.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_fold_blocks(x_ast, f_ast, blocks) {
  arguments_assert(arguments, 3);
  ("The first of these runs of statements in F where x's body was written out by hand, folded into a call.");
  ("The same question the twin without the suffix asks, except that the runs of statements are handed over rather than looked for. Which runs F holds depends on F alone and never on x, and the sweep across the repo pairs one F against many x - so the twin walked the whole of F again for every pairing. Measured 2026-08-12 across this repo: 56,751 pairings over 2,790 different F, twenty-two and a half seconds spent finding the same runs over and over, against nine tenths of a second to find them once for each F and keep them.");
  ("Whoever keeps them owes the keeping the same care the kept shape is owed: a fold writes the call back into the shape it was given, so the runs handed over here belong to the tree as it was before, and a caller that succeeds must give up both.");
  for (let f_block of blocks) {
    let result = js_fold_block(x_ast, f_ast, f_block);
    let folded = null_not_is(result);
    if (folded) {
      return result;
    }
  }
  return null;
}
