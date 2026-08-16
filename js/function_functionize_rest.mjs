import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_functionize_generic } from "./function_functionize_generic.mjs";
export async function function_functionize_rest(f_name, name_from, f_name_new) {
  arguments_assert(arguments, 3);
  ("Pull the run of work from the first line mentioning a name through the last line of the named function out into a function of its own, under a name you give it.");
  ("The third way of asking for a run, for the block that closes a function. Neither of the others reaches it: there is no line after it to ask for everything before, and its own closing line is nearly always a call that reuses a name introduced further up, which carries no address of its own. Every function that ends in a block of work is this shape.");
  ("Only where the run begins is given, because where it ends is not a choice - it is the end of the body. Nothing about that can be typed wrongly, and nothing about it goes stale when a peer edits the lines in between.");
  ("The name is handed over twice below because the machinery that finds the ends finds one line per name and wants two. Both come back as the same line, and the cutter behind this takes the beginning from it and ignores the rest.");
  let select_fn_name = fn_name("js_statement_find_name_body");
  let apply_fn_name = fn_name("js_selects_functionize_rest");
  let output = await function_functionize_generic(
    f_name,
    name_from,
    name_from,
    f_name_new,
    select_fn_name,
    apply_fn_name,
  );
  return output;
}
