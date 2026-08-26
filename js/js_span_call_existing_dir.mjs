import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_find_name_body } from "./js_statement_find_name_body.mjs";
import { js_span_call_existing_dir_generic } from "./js_span_call_existing_dir_generic.mjs";
export async function js_span_call_existing_dir(
  dir,
  f_name,
  address_from,
  address_to,
  f_name_call,
) {
  arguments_assert(arguments, 5);
  ("The hermetic core of the climbing fold: both ends of the run are taken at the top of the body, so a name written anywhere inside a loop addresses the whole loop.");
  ("Everything it does is held one name down, and the only thing said here is which reader finds the two ends.");
  let select_statement = js_statement_find_name_body;
  let output = await js_span_call_existing_dir_generic(
    dir,
    f_name,
    address_from,
    address_to,
    f_name_call,
    select_statement,
  );
  return output;
}
