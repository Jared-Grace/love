import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { functions_name_value_use_names } from "./functions_name_value_use_names.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_call_named_arity_other_names } from "./functions_call_named_arity_other_names.mjs";
export async function function_parameters_record_callers(f_name, names) {
  arguments_assert(arguments, 2);
  ("Every file naming this function, once it has been established that all of them call it the ordinary way with the row of things it declares - so that a move gathering that row into a record can rewrite them all.");
  ("BOTH REFUSALS HERE ARE THE SAME QUESTION ASKED OF THE TWO WAYS A CALL CAN BE OUT OF REACH. A function handed over as a value is called by whoever it was handed to, and that call is nowhere in this repo to be rewritten. A call handing over some other number of things cannot be filed under the parameter names, because there is no saying which name each thing was meant for. Either one left standing would mean rewriting the declaration and leaving a caller behind still calling the old way.");
  ("WHAT MAKES A LEFT-BEHIND CALLER WORSE THAN A MISCOUNT is that it does not announce itself. A wrong number of things is caught out loud by the line at the head of every function; a row handed to something now expecting a record arrives as one thing whose pieces are all missing, which reads as nothing having been sent at all.");
  ("The two moves that gather a row into a record asked this in the same words, down to the sentences the refusals are worded with, and a refusal reworded on one side only would be the two moves quietly disagreeing about what they will not do.");
  let f_names = await data_identifiers_search_names(f_name);
  let handing = await functions_name_value_use_names(f_names, f_name);
  list_empty_is_assert_json(handing, {
    f_name,
    handing,
    hint: "this function is handed over as a value, so whoever it was handed to decides how it is called and that call is nowhere in sight - the shape of its arguments belongs to that caller and cannot be changed from here",
  });
  let other = await functions_call_named_arity_other_names(
    f_names,
    f_name,
    names,
  );
  list_empty_is_assert_json(other, {
    f_name,
    names,
    other,
    hint: "these files call it handing over some other number of things, so there is no way to say which name each thing was meant for - put those calls right first",
  });
  return f_names;
}
