import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_names } from "./functions_reachable_names.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { function_name_app_try } from "./function_name_app_try.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_reachable_app_names(f_names) {
  arguments_assert(arguments, 1);
  ("Of everything the named functions can reach, only the parts an app owns, gathered under the name of the app that owns each. Read-only.");
  ("IT IS THE WHOLE OF WHAT A PROMOTION HAS TO KNOW. Moving a function into the shared namespace is safe exactly when everything it reaches either already belongs to nobody or comes with it, so the answer that decides is which apps appear here and how much of each. One app and a short list means the move is closed and provable before anything runs; two apps, or a list that turns out to be most of an app, means it is a design question and not a rename.");
  ("IT EXISTS BECAUSE THE FILTERING WAS BEING DONE BY HAND, and the hand got it wrong. The reachable answer is thousands of names long, so it is filed rather than printed, and picking the app-owned ones out of what the screen showed reads a truncated list as if it were the whole one - which answers with a closure smaller than the real one and makes an unsafe move look proved. A count that has to be filtered after it is printed is a count that will eventually be filtered wrongly.");
  ("IT GROUPS RATHER THAN FLATTENS, because one app in the answer and two apps in the answer call for completely different work, and a flat list buries that distinction under the length of the longest app.");
  ("THE NAMES ARRIVE JOINED BY COMMAS, which is how every command here is handed a list, because a command line gives each word over separately and a list written as words would be read as further parameters.");
  let reached = await functions_reachable_names(f_names);
  let app_name_list = await apps_names_prefixed();
  let owned = {};
  for (let f_name of reached) {
    let app_name = function_name_app_try(f_name, app_name_list);
    let nobody = text_empty_is(app_name);
    if (nobody) {
      continue;
    }
    let seen = property_exists(owned, app_name);
    if (not(seen)) {
      property_set(owned, app_name, []);
    }
    let held = property_get(owned, app_name);
    list_add(held, f_name);
  }
  return owned;
}
