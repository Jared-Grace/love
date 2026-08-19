import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_call_no_arguments_kept_is } from "./js_statement_call_no_arguments_kept_is.mjs";
import { list_all_is } from "./list_all_is.mjs";
export function js_statements_call_no_arguments_kept_all_is(statements) {
  "Whether a run of statements is nothing but a shopping list - every line of it putting a name on what some function handed back when it was asked for nothing.";
  "A run like this is worthless to a reading that groups code by its shape, and for the same reason as the run of constants next door: what is left after the private names are taken away is the list of functions asked, and every one of those is already a name the repo holds in one place. So two runs found alike here have nothing between them to collapse - the sharing has already happened, in the getters themselves, and giving the list its own name would only hand back a bundle for each caller to take apart again.";
  "What differs between two such runs is what each function does with the constants afterwards, and that is exactly what a run of this length leaves out.";
  arguments_assert(arguments, 1);
  let all_is = list_all_is(statements, js_statement_call_no_arguments_kept_is);
  return all_is;
}
