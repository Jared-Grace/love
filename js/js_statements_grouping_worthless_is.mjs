import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_call_no_arguments_kept_all_is } from "./js_statements_call_no_arguments_kept_all_is.mjs";
import { js_statements_names_outside_none_is } from "./js_statements_names_outside_none_is.mjs";
import { or } from "./or.mjs";
export function js_statements_grouping_worthless_is(statements) {
  "Whether there would be nothing to act on if this run of statements turned up in two functions at once.";
  "Two runs are grouped by their shape, and a shape has the private names taken out of it. So the question is always the same one: with the names gone, is anything left that could be given a name of its own? Twice it is not. A run that reads nothing from outside itself is constants written out where they stand, and the names were the whole of what said which constant was which. A run that is nothing but constants fetched by name has already been shared, in the functions doing the fetching, and collapsing it would hand back a bundle for each caller to take apart again.";
  "Both are asked here rather than at each of the three readings, so that a shared opening, a shared ending and a shared middle cannot come to different answers about the same run - and so that a fourth kind of worthless run, when one is found, is written down once.";
  arguments_assert(arguments, 1);
  let nameless = js_statements_names_outside_none_is(statements);
  let fetches_only = js_statements_call_no_arguments_kept_all_is(statements);
  let worthless = or(nameless, fetches_only);
  return worthless;
}
