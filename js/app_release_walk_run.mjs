import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { app_release_walks } from "./app_release_walks.mjs";
export async function app_release_walk_run(search) {
  arguments_assert(arguments, 1);
  ("$plain search");
  ("Runs the browser walk the app named by search must pass before it is released, if it has one, and throws if the walk fails. Answers the walk's report, or null for an app with no walk.");
  let a_name = await app_shared_name_search(search);
  let walks = app_release_walks();
  let b = Object.hasOwn(walks, a_name);
  if (not(b)) {
    return null;
  }
  let walk = walks[a_name];
  let walked = await walk();
  return walked;
}
