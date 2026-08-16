import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_escapes_unmatched_generic } from "./js_statements_escapes_unmatched_generic.mjs";
export function js_statements_escapes_unmatched_returns_not(statements) {
  arguments_assert(arguments, 1);
  ("Every place inside these lines that leaves by breaking or by going round again and lands somewhere outside them. Returning is not counted. Reported as how far into the file each one is written.");
  ("Asked before a run that closes a function is pulled out into a function of its own. A return in such a run is the closing function's own return, and the line left in its place returns whatever the new function returns - so the reader sees the same answer come back from the same call, and the return survives the move exactly. A break or a continue with its loop left behind does not survive it, so those two are still refused.");
  ("The narrowing holds only because the run reaches the end of the body. A run stopping short of it has lines after it that a return would have skipped, and the call in its place would run them; that is why the wider twin is what everything else asks.");
  let types_asked = ["BreakStatement", "ContinueStatement"];
  let offsets = js_statements_escapes_unmatched_generic(
    statements,
    types_asked,
  );
  return offsets;
}
