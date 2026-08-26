import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { fn_name } from "./fn_name.mjs";
export function qa_app_e2e_happy_fns() {
  "the apps that can be walked the whole way through by somebody who gets everything right, each one paired with the name of the walk that does it";
  "It is a written list rather than a name worked out from the app's own name, because a name worked out is a name nothing refers to, and a name nothing refers to is one a rename can take away without anything going red. The single moment this list is read is the moment an app is about to go out, which is the worst moment there is to discover that the check it was counting on had quietly stopped existing.";
  "Both names are written rather than imported. A function belonging to no app may reach into no single app, because everything downstream of it then carries that app - and this list belongs to every app at once, so importing one of them would be the plainest case of it there is. A name written this way is still a name a rename moves, so nothing about the paragraph above is given up.";
  "The app is named by its own function's name rather than by a word typed out beside it, so the two can never say different things.";
  "One entry today. That is not a judgment that the other apps need no walk - it is only the ones that have one, and an app missing from here is sent exactly as it was sent before any of this was written.";
  arguments_assert(arguments, 0);
  let fns = [
    {
      app_name: app_shared_name_prefix_without(fn_name("app_code")),
      happy_f_name: fn_name("app_code_tests_run_e2e_happy"),
    },
  ];
  return fns;
}
