import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { app_code } from "./app_code.mjs";
import { app_code_tests_run_e2e_happy } from "./app_code_tests_run_e2e_happy.mjs";
export function qa_app_e2e_happy_fns() {
  "the apps that can be walked the whole way through by somebody who gets everything right, each one paired with the walk that does it";
  "It is a written list rather than a name worked out from the app's own name, because a name worked out is a name nothing imports, and a name nothing imports is one a rename can take away without anything going red. The single moment this list is read is the moment an app is about to go out, which is the worst moment there is to discover that the check it was counting on had quietly stopped existing.";
  "The app is named by its own function for that same reason, and the word is taken off the front of that function rather than typed out beside it, so the two can never say different things.";
  "One entry today. That is not a judgment that the other apps need no walk - it is only the ones that have one, and an app missing from here is sent exactly as it was sent before any of this was written.";
  arguments_assert(arguments, 0);
  let fns = [
    {
      app_name: app_shared_name_prefix_without_fn(app_code),
      happy_fn: app_code_tests_run_e2e_happy,
    },
  ];
  return fns;
}
