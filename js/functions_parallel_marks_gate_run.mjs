import { arguments_assert } from "./arguments_assert.mjs";
import { functions_parallel_marks_stale } from "./functions_parallel_marks_stale.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export async function functions_parallel_marks_gate_run() {
  "QA gate for a mark that has outlived what it was about. Saying two functions are alike on purpose is a claim, and a claim in code goes stale the moment somebody edits the other one - silently, because a body that still reads perfectly well is exactly what a stale mark looks like.";
  "It matters more than a note going out of date. This mark excuses a function from the duplicate search, so a mark left behind means the next function that really does the same work under a different name is reported as meant, by the very check that exists to catch it. The search would go on saying nothing, forever, and look right doing it.";
  "Two ways to clear it, and the gate refuses to choose: take the mark off, if there is no longer a twin to be alike with, or put the twin back the way it was, if the edit that split them was the mistake.";
  arguments_assert(arguments, 0);
  let stale = await functions_parallel_marks_stale();
  let any = list_empty_not_is(stale);
  if (any) {
    let joined = list_join_comma(stale);
    let message =
      "parallel marks gate: " +
      stale.length +
      " functions still say they are alike on purpose when nothing shares their shape - take the mark off, or put the twin back: " +
      joined;
    throw new Error(message);
  }
  let result = {
    stale: 0,
  };
  return result;
}
