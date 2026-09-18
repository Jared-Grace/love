import { arguments_assert } from "./arguments_assert.mjs";
import { functions_walkers_unwaiting } from "./functions_walkers_unwaiting.mjs";
import { js_calls_walk_unwaited } from "./js_calls_walk_unwaited.mjs";
import { functions_ast_offenders_walked_generic } from "./functions_ast_offenders_walked_generic.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_calls_walk_unwaited() {
  arguments_assert(arguments, 0);
  ("Every function in the repo that hands a job which has to be waited for to a walk that cannot wait for it, together with how many functions were walked and how many walkers were found.");
  ("★ BOTH COUNTS TRAVEL WITH THE ANSWER BECAUSE FINDING NOTHING IS ALSO WHAT A BROKEN READING SAYS. A set of walkers that fell to nothing would leave every call in the repo looking innocent, and a sweep pointed at a folder that had moved would leave nothing to look at; either way the verdict is the same green word. The two numbers are the only things that tell a good day apart from a reading that has stopped working.");
  let walkers = await functions_walkers_unwaiting();
  function reader(ast) {
    let found = js_calls_walk_unwaited(walkers, ast);
    return found;
  }
  let walked = await functions_ast_offenders_walked_generic(reader, "calls");
  let offenders = property_get(walked, "offenders");
  let reached = property_get(walked, "walked");
  let r = {
    walkers: list_size(walkers),
    walked: reached,
    offenders,
  };
  return r;
}
