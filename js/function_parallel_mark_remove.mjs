import { function_parallel_marked_is } from "./function_parallel_marked_is.mjs";
import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_call_remove } from "./js_statement_call_remove.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
import { not } from "./not.mjs";
export async function function_parallel_mark_remove(f_name) {
  "Take the alike-on-purpose mark back off one function, for when the twin it was alike with is gone.";
  "The mark is a claim that another function shares this shape and was meant to, and the gate over stale marks is what notices the claim has gone false. Until now it could only be answered by hand, which is the one repair a gate should never ask for: the check is run far more often than the shape changes, so the reading that finds the fault is cheap and the fix that clears it was the expensive half.";
  "Which of the two repairs to make is still nobody's business but the reader's. This one only does the taking off, and says nothing about whether the twin should have come back instead - a function that would choose between them would be choosing without having read either body.";
  "A function that is not carrying the mark is left exactly as it is, so this can be run over a name twice, or over a name somebody already cleared, without the second run meaning anything different from the first.";
  arguments_assert(arguments, 1);
  let marked = await function_parallel_marked_is(f_name);
  if (not(marked)) {
    return f_name;
  }
  function unmark(ast) {
    js_statement_call_remove(ast, function_duplicate_kind_parallel);
  }
  await function_transform(f_name, unmark);
  await function_auto(f_name);
  return f_name;
}
