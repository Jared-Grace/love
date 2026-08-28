import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
export function qa_app_e2e_happy_fns() {
  "the apps that can be walked the whole way through by somebody who gets everything right, each one paired with the name of the walk that does it";
  "It is a written list rather than a name worked out from the app's own name, because a name worked out is a name nothing refers to, and a name nothing refers to is one a rename can take away without anything going red. The single moment this list is read is the moment an app is about to go out, which is the worst moment there is to discover that the check it was counting on had quietly stopped existing.";
  "Both names are written rather than imported. A function belonging to no app may reach into no single app, because everything downstream of it then carries that app - and this list belongs to every app at once, so importing one of them would be the plainest case of it there is. A name written this way is still a name a rename moves, so nothing about the paragraph above is given up.";
  "The app is named by its own function's name rather than by a word typed out beside it, so the two can never say different things.";
  "Two entries today. That is not a judgment that the other apps need no walk - it is only the ones that have one, and an app missing from here is sent exactly as it was sent before any of this was written.";
  "The replacing game names its whole walk rather than the short one that stops after two sets of rules. This is the last moment before an app reaches people, and it is the moment to be thorough at: the walk takes half an hour, and half an hour spent here is spent once, where a set of rules nobody walked is played by everybody who opens the page. The short walk exists for the person waiting at a keyboard, which is not what this is.";
  "It is put here because it was needed. The game could not be played at all for nine days - every symbol was drawn as one no rule could touch - and no gate went red the whole time, because no gate opens a page. The walk that finds it in one click was sitting in the repo the entire nine days, unrun.";
  arguments_assert(arguments, 0);
  let name = fn_name("app_code");
  let name_replace = fn_name("app_replace");
  let fns = [
    {
      app_name: app_shared_name_prefix_without(name),
      happy_f_name: fn_name("app_code_tests_run_e2e_happy"),
    },
    {
      app_name: app_shared_name_prefix_without(name_replace),
      happy_f_name: fn_name("app_replace_tests_run_e2e_dev"),
    },
  ];
  return fns;
}
