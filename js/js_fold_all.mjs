import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_fold } from "./js_fold.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_fold_all(x_ast, f_ast) {
  "Fold EVERY contiguous occurrence of pure fn x's body inside F, not just the first. Each pass is the";
  `proven-safe single-occurrence ${fn_name("js_fold")} (contiguous match + escape gate); loop to fixpoint, i.e. keep`;
  `folding until ${fn_name("js_fold")} declines. Returns the mutated f_ast when at least one fold applied, null when`;
  `none did — so ${fn_name("js_fold_all")} keeps ${fn_name("js_fold")}'s refuse-when-nothing-matches contract for callers and gate.`;
  arguments_assert(arguments, 2);
  let folded_any = false;
  let result = js_fold(x_ast, f_ast);
  let b = null_is(result);
  while (not(b)) {
    folded_any = true;
    result = js_fold(x_ast, f_ast);
    ("Asked again every time round, because the answer is what ends the loop. Read");
    ("once before the loop it can never change, and a first fold that succeeds then");
    ("spins here forever.");
    b = null_is(result);
  }
  if (not(folded_any)) {
    return null;
  }
  return f_ast;
}
