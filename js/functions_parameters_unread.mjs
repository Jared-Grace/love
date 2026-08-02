import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parameters_unread } from "./function_parameters_unread.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_parameters_unread() {
  "every love function that takes a parameter its own body never reads";
  "only the exported function is asked, never the lambdas inside it. a callback handed to something else has the shape that thing demands, so ignoring an argument it is given is ordinary and honest; a named function ignoring one it asked for is not, because nothing forced the parameter to be there";
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let finding = await function_parameters_unread(name);
    let any = property_list_empty_not_is(finding, "unread");
    if (any) {
      list_add(offenders, finding);
    }
  }
  return offenders;
}
