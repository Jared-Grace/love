import { catch_null_async } from "./catch_null_async.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export async function example_whole_file_lambda(f_name) {
  "An example that names a function, gives it no arguments and names no address inside the file is asking for that function itself. Every whole-file pass is that shape, so the name is the whole specification and a branch written per function only ever restated it - four of them said return the function whose name this is, one function each, and a fifth had to be written by hand before a new example of the same shape could run at all.";
  "Arity is the admission test. A pass over a file takes the tree and nothing else, so a function declaring exactly one parameter can be handed straight back as the verb. Anything declaring a different number wants something the example has not said, and gets no lambda - which leaves it a skip, the same loud refusal it met before this existed, rather than a run that goes wrong further in.";
  "A name nothing answers to also comes back empty rather than throwing. The emptiness is not swallowed: the corpus runner turns it into a skip and the gate over the corpus counts a skip as a failure naming the example, so the case that used to reach the end of a branch list still reports itself.";
  async function import_lambda() {
    let found = await function_import_unalias(f_name);
    return found;
  }
  let fn = await catch_null_async(import_lambda);
  if (not(fn)) {
    return null;
  }
  let declared = fn.length;
  let whole_file_is = equal(declared, 1);
  if (not(whole_file_is)) {
    return null;
  }
  return fn;
}
