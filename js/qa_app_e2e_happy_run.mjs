import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_e2e_happy_fns } from "./qa_app_e2e_happy_fns.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { function_run_args_none } from "./function_run_args_none.mjs";
export async function qa_app_e2e_happy_run(app_name) {
  "$plain app_name";
  "Walks one app the whole way through as somebody who gets every question right, if that app has such a walk, and answers with nothing at all if it has not.";
  "Answering with nothing rather than refusing is deliberate. A refusal would mean no app could go out until somebody had written a walk for it, which turns a check that helps one app into a wall standing in front of all the others - and the apps with no walk are exactly the ones nobody has got to yet.";
  "It walks the dev copy, which the build immediately before it has just made out of the very same code that is about to be copied out. Walking what is already live would be a check on a copy made days ago, and walking nothing at all is what was happening before.";
  "The walk arrives as a name and is fetched here rather than being imported where the list is written. A list naming every app that has a walk belongs to no app, and a function belonging to no app may import none of them - an import there would hand whichever app it named to everything downstream of this.";
  arguments_assert(arguments, 1);
  let fns = qa_app_e2e_happy_fns();
  let found = list_find_property_or_null(fns, "app_name", app_name);
  if (null_is(found)) {
    return null;
  }
  let happy_f_name = property_get(found, "happy_f_name");
  let walked = await function_run_args_none(happy_f_name);
  return walked;
}
