import { arguments_assert } from "./arguments_assert.mjs";
import { functions_shadowing_offender_hidden } from "./functions_shadowing_offender_hidden.mjs";
import { functions_shadowing_remembered } from "./functions_shadowing_remembered.mjs";
import { js_operator_function_names } from "./js_operator_function_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_shadowing_operator_walked() {
  "The hidings that the tooling itself will act on, and how many hidings were opened to find them.";
  "Every hidden name is a bug waiting for somebody to read the wrong line, but these are worse in kind: the auto pass WRITES calls to these names, so the next comparison anybody puts in one of these files is turned into a call that lands on the local. Nobody has to misread anything for it to go wrong.";
  "Both kinds of hiding count. A name bound over the repo function and a name bound over an outer binding both leave the word meaning something else where the pass writes it.";
  "What is counted is the hidings this read, not the sixteen names it reads them against. The sixteen are the same sixteen whether this opened everything or nothing, so a gate reporting them was reporting a number that could not fall - and the one thing worth knowing on a clean run is whether the list it filters arrived full or arrived empty.";
  arguments_assert(arguments, 0);
  let names = js_operator_function_names();
  let offenders = await functions_shadowing_remembered();
  let found = [];
  let walked = 0;
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let hidden = functions_shadowing_offender_hidden(offender);
    walked = walked + 1;
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
  let r = {
    walked,
    offenders: found,
  };
  return r;
}
