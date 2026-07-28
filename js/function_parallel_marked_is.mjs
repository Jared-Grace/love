import { arguments_assert } from "./arguments_assert.mjs";
import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { function_marked_is } from "./function_marked_is.mjs";
export async function function_parallel_marked_is(f_name) {
  "Whether the named function carries the alike-on-purpose mark, which is the one mark that says two functions share a shape because somebody meant them to.";
  "The reading itself lives in the general reader beside this one, which now asks for a call rather than for a name the body happens to spell - the distinction this function's own prose has been making since it was written, while the general one got it wrong and the check that matters was built on the general one. Naming the mark is all that is left here.";
  arguments_assert(arguments, 1);
  let mark_name = function_duplicate_kind_parallel.name;
  let marked = await function_marked_is(f_name, mark_name);
  return marked;
}
