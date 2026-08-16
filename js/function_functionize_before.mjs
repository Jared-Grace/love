import { function_functionize_generic } from "./function_functionize_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_functionize_before(
  f_name,
  name_from,
  name_before,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of work from the first line mentioning one name up to the line before the first line mentioning another out of the named function, into a function of its own under a name you give it.");
  ("The way to ask for a block of work by where it ends rather than by its last line, and it exists because that last line usually cannot be pointed at. A block here opens by naming something new and closes on a call that reuses names introduced further up - the passage panel closes on tokens.forEach, the links bar on the third of three identical calls - so its closing line carries no name written there for the first time, and every address is the name of some earlier line. The line after the block almost always does carry one, because the next block opens by naming what it is about.");
  ("Measured on a single screen: a function of forty-eight lines of work held four blocks any reader would name at once, and not one of the four could be addressed by its own last line. All four can be asked for as everything before the next block begins.");
  ("The twin that takes both chosen lines is still the one to reach for when the run really does end on a line with a name of its own. This one is for the far commoner case where it does not, and the two share everything except which of the two numbers the run stops at.");
  let select_fn_name = fn_name("js_statement_find_name_body");
  let apply_fn_name = fn_name("js_selects_functionize_before");
  let output = await function_functionize_generic(
    f_name,
    name_from,
    name_before,
    f_name_new,
    select_fn_name,
    apply_fn_name,
  );
  return output;
}
