import { js_call_add_before_return } from "./js_call_add_before_return.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_find_call_name_includes } from "./js_find_call_name_includes.mjs";
import { list_single_item } from "./list_single_item.mjs";
import { js_call_argument_named_identifier_set } from "./js_call_argument_named_identifier_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function js_call_add_before_return_argument_returned(
  ast,
  f_name,
  param_name,
) {
  arguments_assert(arguments, 3);
  ("$plain param_name");
  ("Writes a call to a function on the line above a function's return, and points one of that call's arguments at the very value the return is about to hand back.");
  ("A GENERATED CALL ARRIVES HOLDING THE CALLED FUNCTION'S OWN PARAMETER NAMES, which name nothing where the call now sits. Left as written it reads a name nobody bound, and the file parses, and the throw waits until somebody runs it. So the second half is not a decoration on the first - a call added before a return is only finished once its arguments say something true about where it landed.");
  ("The returned value is the argument worth naming because that is what a line above a return is nearly always for: doing one more thing with the answer before it leaves. Copying it, logging it, checking it - the value is already sitting in a local, and this is the verb that reaches it.");
  ("Which argument is said by name rather than by position, so a called function growing a parameter in front does not silently move the value to the wrong slot.");
  await js_call_add_before_return(ast, f_name);
  let name_returned = js_return_name(ast);
  let found = js_find_call_name_includes(ast, f_name);
  let selects = list_single_item(found);
  await js_call_argument_named_identifier_set(
    ast,
    selects,
    param_name,
    name_returned,
  );
}
