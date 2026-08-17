import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_fold_pattern_dropped } from "./js_fold_pattern_dropped.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function js_fold_block_partial_is(x_ast) {
  arguments_assert(arguments, 1);
  ("One fold, in one named run of statements, rather than in whatever run a function");
  ("happens to open with.");
  ("Every check that made this safe is here unchanged - the same contiguous match,");
  ("the same escape gate, the same equivalence assert. The only thing that moved is");
  ("which statements are being looked at, and that is safe to move because a name");
  ("declared between braces cannot be read outside them, so a run that is sound to");
  ("collapse under an if is sound for exactly the reason it is sound at the top.");
  ("A function whose body the pattern cannot carry whole is refused outright, before any");
  ("matching is tried. The pattern keeps only call-declarations, so a list built by hand, a");
  ("loop that fills it, an awaited call - none of those reach it, and a match then claims the");
  ("few lines that did are the whole of what x does. The equivalence check cannot see this: it");
  ("compares the pattern to the block it matched, which is the filtered thing against the");
  ("filtered thing. Two functions were destroyed this way before the refusal was written.");
  let f_name = fn_name("function_fold_pattern_dropped");
  `Ask ${f_name} of a name to see what its pattern would leave out.`;
  let dropped = js_fold_pattern_dropped(x_ast);
  let partial_is = list_empty_not_is(dropped);
  return partial_is;
}
