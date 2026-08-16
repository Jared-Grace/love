import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_functionize } from "./js_selects_functionize.mjs";
import { js_statement_find_name_holder_last } from "./js_statement_find_name_holder_last.mjs";
import { list_single } from "./list_single.mjs";
export async function js_selects_functionize_through(
  ast,
  selects,
  name_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull everything from a chosen line through the last line that mentions a given name out into a function of its own.");
  ("The two ends of a span are found two different ways here, and that is the whole of what this adds. Every cut until now named both ends the same way, and the runner underneath says as much - it runs one reader once per word, and its own account of itself says ends found by two different kinds of reader could wait until something asked. A run of paint asks: it opens by naming something, which is an earliest mention, and closes by spending it, which is a latest one.");
  ("So the opening end arrives already chosen, by whichever reader the caller ran, and only the closing end is looked for here. That keeps the choosing of the opening end where it belongs - outside, with the caller - rather than fixing both ends to one way of reading.");
  let statement_from = list_single(selects);
  let statement_to = js_statement_find_name_holder_last(ast, name_to);
  let ends = [statement_from, statement_to];
  await js_selects_functionize(ast, ends, f_name_new);
}
