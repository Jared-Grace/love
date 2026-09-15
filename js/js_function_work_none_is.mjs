import { js_function_declaration_statements_doing } from "./js_function_declaration_statements_doing.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { fn_name } from "./fn_name.mjs";
import { markers_names } from "./markers_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_free_names_generic } from "./js_free_names_generic.mjs";
export function js_function_work_none_is(declaration) {
  "Whether a function takes nothing and calls nothing. Such a function can only be handing back a fixed value, or doing nothing at all - there is no third thing left for it to be.";
  "This is asked when looking for the same work under two names, and it is asked in order to leave these out. Two functions that hand back the same fixed value are not one function written twice: the slash that divides two numbers and the slash that separates two words are the same character and two different ideas, and where a value belongs is a separate question from whether a job is duplicated. An empty body is left out for the same reason - two functions that do nothing are alike in doing nothing, which says nothing about either.";
  "an empty body is asked about before the parameters are, because taking something and then doing nothing with it is still doing nothing - reading the parameters first said such a function does work, and two of them under one shape were held to the ratchet as a duplicate pair when what they share is that neither is written";
  "★ THE LINE COUNTING ITS ARGUMENTS AND THE MARKS ARE NOT CALLS IT MAKES. Until 2026-09-15 they were read as reaching outside, so a number handed back under a guard the pass wrote - and every fixed value that had been marked as one of a parallel pair - counted as work, and seventeen fixed values were held to the ratchet as duplicated jobs. Marking them did not help, because the mark itself was then the call that made them work.";
  let doing = js_function_declaration_statements_doing(declaration);
  let nothing = list_empty_is(doing);
  if (nothing) {
    return true;
  }
  let params = js_function_declaration_params_names(declaration);
  let takes_something = list_empty_not_is(params);
  if (takes_something) {
    return false;
  }
  let own = js_function_declaration_name(declaration);
  let guard = fn_name("arguments_assert");
  let markers = markers_names();
  let not_reaching = list_concat_multiple([[own, guard], markers]);
  let free = js_free_names_generic(declaration, not_reaching);
  let none = list_empty_is(free);
  return none;
}
