import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_e2e_happy_fns } from "./qa_app_e2e_happy_fns.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_app_e2e_happy_run(app_name) {
  "$plain app_name";
  "Walks one app the whole way through as somebody who gets every question right, if that app has such a walk, and answers with nothing at all if it has not.";
  "Answering with nothing rather than refusing is deliberate. A refusal would mean no app could go out until somebody had written a walk for it, which turns a check that helps one app into a wall standing in front of all the others - and the apps with no walk are exactly the ones nobody has got to yet.";
  "It walks the dev copy, which the build immediately before it has just made out of the very same code that is about to be copied out. Walking what is already live would be a check on a copy made days ago, and walking nothing at all is what was happening before.";
  arguments_assert(arguments, 1);
  let fns = qa_app_e2e_happy_fns();
  let found = list_find_property_or_null(fns, "app_name", app_name);
  if (null_is(found)) {
    return null;
  }
  let happy_fn = property_get(found, "happy_fn");
  let walked = await happy_fn();
  return walked;
}
