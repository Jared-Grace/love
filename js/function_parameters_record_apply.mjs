import { arguments_assert } from "./arguments_assert.mjs";
import { functions_transform_list } from "./functions_transform_list.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_arguments_assert_count_repair } from "./function_arguments_assert_count_repair.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_parameters_record_apply(
  f_name,
  f_names,
  arguments_record,
  params_record,
) {
  arguments_assert(arguments, 4);
  ("Write the gathering of a function's row into a record: every call in the given files first, then the declaration, then the line at its head saying how many things arrive, then canonicalize all of them.");
  ("THE ORDER IS THE WHOLE CONTENT OF THIS. Either half alone leaves the repo disagreeing with itself about how anything arrives, and the disagreement is silent in the direction that matters - a row handed to something now expecting a record arrives as one thing whose pieces are all missing, which reads as nothing having been sent.");
  ("The line at the head saying how many things arrive was written when the function was made to stand on its own, and gathering the row into a record does not go back to it. Left alone it goes on saying the old number and every correct call throws, blaming the caller for a count that is now always one.");
  ("The two transforms are handed in rather than chosen here, because gathering the whole row and gathering a chosen few differ in exactly those two and in nothing else that happens afterwards. Both moves had written this tail out in full and a step added to one of them would have been a step the other quietly went without.");
  await functions_transform_list(f_names, arguments_record);
  await function_transform(f_name, params_record);
  await function_arguments_assert_count_repair(f_name);
  let names_comma = list_join_comma(f_names);
  await function_auto_multiple(names_comma);
}
