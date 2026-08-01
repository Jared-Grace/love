import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { functions_shadowing } from "./functions_shadowing.mjs";
import { js_operator_function_names } from "./js_operator_function_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_shadowing_operator() {
  "The hidings that the tooling itself will act on. Every hidden name is a bug";
  "waiting for somebody to read the wrong line, but these are worse in kind: the";
  "auto pass WRITES calls to these names, so the next comparison anybody puts in";
  "one of these files is turned into a call that lands on the local. Nobody has";
  "to misread anything for it to go wrong.";
  "Both kinds of hiding count. A name bound over the repo function and a name";
  "bound over an outer binding both leave the word meaning something else where";
  "the pass writes it.";
  let names = js_operator_function_names();
  let offenders = await functions_shadowing();
  let found = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let outer = property_get(offender, "shadows_outer");
    let over_function = property_get(offender, "shadows_function");
    let hidden = list_concat(outer, over_function);
    function operator_is(word) {
      let b = list_includes(names, word);
      return b;
    }
    let dangerous = list_filter(hidden, operator_is);
    let any = list_empty_not_is(dangerous);
    if (any) {
      let finding = {
        name: f_name,
        hides: dangerous,
      };
      list_add(found, finding);
    }
  }
  return found;
}
