import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_includes } from "./list_includes.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { not } from "./not.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { list_empty_not_is_while_async } from "./list_empty_not_is_while_async.mjs";
export async function function_callers_calling_closure(name) {
  "Every function that reaches this one through a chain of real calls, however long the chain, leaving out the ones that only spell its name in prose.";
  "The neighbour that walks callers the same way answers off the search index alone, and that index is deliberately wider than calling - it finds a name written in a sentence about a function as readily as a call to it. That width is right for a person asking what a change could touch, and wrong for anything deciding whether a thing is genuinely reached, because a paragraph mentioning a corpus would then count as reading it.";
  "So each step is confirmed against the caller's own code before it is walked: the name has to be one the caller actually refers to, not one it merely talks about. The names the search hands back that no function answers to are passed over for the same reason, since a mention in a data file is not a call either.";
  "The one asked about is in the answer, because a function reaches itself in nought steps and every caller was adding it back.";
  "It ends because the repo holds finitely many names and a name already found is never walked twice.";
  arguments_assert(arguments, 1);
  let known = await functions_names();
  let found = [];
  let pending = [];
  list_add(pending, name);
  async function step() {
    let one = list_pop(pending);
    let seen = list_includes(found, one);
    if (seen) {
      return;
    }
    list_add(found, one);
    let callers = await data_identifiers_search_names(one);
    for (let caller of callers) {
      let is_function = list_includes(known, caller);
      if (not(is_function)) {
        continue;
      }
      let ast = await function_ast(caller);
      let names = js_identifiers_referenced_names(ast);
      let real = list_includes(names, one);
      if (real) {
        list_add(pending, caller);
      }
    }
  }
  await list_empty_not_is_while_async(pending, step);
  return found;
}
