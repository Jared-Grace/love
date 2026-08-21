import { function_names_app_grouped } from "./function_names_app_grouped.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_names } from "./functions_reachable_names.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
export async function functions_reachable_app_names(f_names) {
  arguments_assert(arguments, 1);
  ("Of everything the named functions can reach, only the parts an app owns, gathered under the name of the app that owns each. Read-only.");
  ("IT IS THE WHOLE OF WHAT A PROMOTION HAS TO KNOW. Moving a function into the shared namespace is safe exactly when everything it reaches either already belongs to nobody or comes with it, so the answer that decides is which apps appear here and how much of each. One app and a short list means the move is closed and provable before anything runs; two apps, or a list that turns out to be most of an app, means it is a design question and not a rename.");
  ("IT EXISTS BECAUSE THE FILTERING WAS BEING DONE BY HAND, and the hand got it wrong. The reachable answer is thousands of names long, so it is filed rather than printed, and picking the app-owned ones out of what the screen showed reads a truncated list as if it were the whole one - which answers with a closure smaller than the real one and makes an unsafe move look proved. A count that has to be filtered after it is printed is a count that will eventually be filtered wrongly.");
  ("IT GROUPS RATHER THAN FLATTENS, because one app in the answer and two apps in the answer call for completely different work, and a flat list buries that distinction under the length of the longest app.");
  ("THE NAMES ARRIVE JOINED BY COMMAS, which is how every command here is handed a list, because a command line gives each word over separately and a list written as words would be read as further parameters.");
  ("THE SORTING ITSELF IS ONE NAME ALONG, so that it can be checked. Everything here reads the repo, so every answer this gives changes the next time anybody edits an import and nothing written over it would stay true for a day. The judging it rests on takes two plain lists and nothing else, which makes it a question with a fixed answer and so a thing a case can be written for.");
  let reached = await functions_reachable_names(f_names);
  let app_name_list = await apps_names_prefixed();
  let owned = function_names_app_grouped(reached, app_name_list);
  return owned;
}
