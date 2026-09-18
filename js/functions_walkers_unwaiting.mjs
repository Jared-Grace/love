import { arguments_assert } from "./arguments_assert.mjs";
import { js_walker_parameter_or_null } from "./js_walker_parameter_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
export async function functions_walkers_unwaiting() {
  arguments_assert(arguments, 0);
  ("Every function in the repo that calls a job it was handed from inside a loop, and so has no way of waiting for one that has to be waited for.");
  ("These are the receivers a job may not be handed to without first being made into something that does not need waiting for. The set is asked of the repo every time rather than written down, because a walker added tomorrow and not added to a list here would be a hole in the reading that stayed green.");
  function reader(ast) {
    let param = js_walker_parameter_or_null(ast);
    let none_is = null_is(param);
    let found = none_is ? [] : [param];
    return found;
  }
  let offenders = await functions_ast_offenders_generic(reader, "parameter");
  let names = list_map(offenders, property_get_f_name);
  return names;
}
