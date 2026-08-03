import { text_split_comma } from "./text_split_comma.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_not } from "./list_empty_is_not.mjs";

export async function functions_callers_closure(names_comma) {
  "every function that can reach any of these through a chain of calls, however long the chain";
  "who calls a function answers one step. what a change to it can touch is every step, and working that out by grepping one ring and then grepping the ring around that is what a caller does by hand until somebody names it - which was three greps and a guess about when to stop.";
  "the seeds are in the answer, because a function reaches itself in nought steps and leaving them out made every caller add them back";
  "it ends because the repo holds finitely many names and a name already found is never walked twice, so the worst case is one search per function and the usual case is a handful";
  let seeds = text_split_comma(names_comma);
  let found = [];
  let pending = [];
  for (let seed of seeds) {
    list_add(pending, seed);
  }
  while (list_empty_is_not(pending)) {
    let name = pending.pop();
    let seen = list_includes(found, name);
    if (seen) {
      continue;
    }
    list_add(found, name);
    let callers = await data_identifiers_search_names(name);
    for (let caller of callers) {
      let known = list_includes(found, caller);
      if (known) {
        continue;
      }
      list_add(pending, caller);
    }
  }
  return found;
}
