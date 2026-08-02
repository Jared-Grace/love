import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export async function example_arguments_lambda(f_name, args) {
  "An example that names a function and names no address inside the file is asking for that function itself, handed the tree and then the arguments the example already lists. The name and the arguments are the whole specification, so a branch written per function only ever restated them - four of them said return the function whose name this is, one function each, and a fifth had to be written by hand before a new example of the same shape could run at all.";
  "Arity is the admission test. A pass over a file takes the tree and then whatever the example says, so a function declaring exactly one more parameter than the example gives arguments can be driven from the name alone. Anything declaring a different number wants something the example has not said, and gets no lambda - which leaves it a skip, the same loud refusal it met before this existed, rather than a run that goes wrong further in.";
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
  let given = list_size(args);
  let wanted = add(given, 1);
  let drivable_is = equal(declared, wanted);
  if (not(drivable_is)) {
    return null;
  }
  function lambda(ast) {
    let r = fn(ast, ...args);
    return r;
  }
  return lambda;
}
