import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_fold_pattern_dropped } from "./js_fold_pattern_dropped.mjs";
export async function functions_fold_pattern_dropped() {
  arguments_assert(arguments, 0);
  ("Every function in the repo that cannot stand as a fold pattern, with the lines of its own work the pattern would leave out.");
  ("It is the coverage of the repo's duplicate finder, asked directly. The pattern the fold matches on keeps one line shape only: a plain name bound to a call written straight out, as in let x = f(a). A bare call that keeps nothing, a call waited on, a call reached through a dot, a list, a condition, a loop - none of those reach the pattern. A function written mostly in those is therefore not one the fold declines; it is one the fold cannot be asked about, and the gate built on it stays quiet there, which reads exactly like clean.");
  ("Measured on 2026-08-26 over 13434 functions: 3044 could stand as a pattern and 10390 could not, holding 26038 lines of work the pattern leaves out between them. The two largest kinds are a bare call that keeps nothing (5443) and a call waited on (4744), both of them calls, dropped for how they are written rather than for what they do. So the finder covers about a quarter of what is here, and the rest need a run pointed at a name by hand.");
  ("A count rather than a fault, so nothing ratchets on it. A function whose work is a list being built is written correctly; what the list here says is which functions one particular reading cannot reach.");
  let offenders = await functions_ast_offenders_generic(
    js_fold_pattern_dropped,
    "dropped",
  );
  return offenders;
}
