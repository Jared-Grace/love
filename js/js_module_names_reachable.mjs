import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_module_binding_names } from "./js_module_binding_names.mjs";
import { list_concat } from "./list_concat.mjs";
export async function js_module_names_reachable(ast) {
  arguments_assert(arguments, 1);
  ("Every name a function landing at the top of this file can already read where it stands - the ones this repo answers to, and the ones the file itself binds at its outermost level.");
  ("The question both cuts have to ask. A run of lines or a closure being given a name of its own reaches for names it does not bind, and each of those is either something to hand it as a parameter or something already within reach. Getting the second half wrong is the quiet failure: the new function is handed the file's own import, or the helper cut out of it a moment earlier, and it runs - reading as though the two were related.");
  ("Asked in one place because two copies drifted once already. The closure lift subtracted both halves and the span cut subtracted only the repo's names, so the same file gave two different answers depending on which command was pointed at it.");
  let other = await functions_names();
  let here = js_module_binding_names(ast);
  let reachable = list_concat(other, here);
  return reachable;
}
