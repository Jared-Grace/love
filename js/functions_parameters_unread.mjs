import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { function_parameters_unread } from "./function_parameters_unread.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { function_name_value_use_names } from "./function_name_value_use_names.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { function_calls_wrapper_handed_is } from "./function_calls_wrapper_handed_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_parameters_unread() {
  arguments_assert(arguments, 0);
  ("every love function that takes a parameter its own body never reads");
  ("only the exported function is asked, never the lambdas inside it. a callback handed to something else has the shape that thing demands, so ignoring an argument it is given is ordinary and honest; a named function ignoring one it asked for is not, because nothing forced the parameter to be there");
  ("that same sentence decides one more case, and it was missing. a named function is a callback too the moment some file hands it over as a value rather than calling it - whoever it was handed to then decides how many arguments it gets, and the parameter list belongs to that caller. so one is asked of each function that would otherwise be named here, and it is asked only of those: the search behind it opens every file mentioning the name, which is far too much to spend on the fourteen thousand functions that have nothing wrong with them");
  ("the repair arm refuses exactly this case with exactly this reading, so before this the gate would name a function the repair arm would then decline to touch - the one shape a reading must never have, since it leaves a reader nothing to do but write the name into the baseline");
  ("the same sentence a third time, one hop further out. the canonicalizing pass lifts a function written inline in a slot into a file of its own and leaves a wrapper behind in the slot. the wrapper is handed over as a value, so the reading above lets it be - and the lifted body it calls, which is the same code and stands in the same slot, is named here instead. asking whether every caller is such a wrapper puts the two back together");
  let love = await repo_love_functions_names();
  let offenders = [];
  for (let name of love) {
    let finding = await function_parameters_unread(name);
    let any = property_list_empty_not_is(finding, "unread");
    if (any) {
      let handing = await function_name_value_use_names(name);
      let handed = list_empty_not_is(handing);
      if (handed) {
        continue;
      }
      let lifted = await function_calls_wrapper_handed_is(name);
      if (lifted) {
        continue;
      }
      list_add(offenders, finding);
    }
  }
  return offenders;
}
