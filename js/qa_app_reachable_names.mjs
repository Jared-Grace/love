import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { webpack_build_generic_source_fn_names } from "./webpack_build_generic_source_fn_names.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_app_reachable_names(search) {
  "Every function one app's bundle can reach, so a complaint about anything outside it is a complaint about something that app does not ship. Read-only.";
  "The roots are asked of the builder rather than written down here, because the builder generates the entry file the bundler is pointed at and a second opinion about what that file imports is a thing that can disagree with it. Asked this way, an entry gaining a root is a root this gains too.";
  "There are two roots and missing the second is the whole trap: the app's own function reaches only the screen, while everything the boot does - the corruption net, the storage reads, the asserts underneath them - hangs off the shared initializer instead. Walked from the app alone, a broken assert reads as unrelated to every app in the repo, which is the one wrong answer this must never give.";
  "The app is named the same way the builder names it, by search word, so whatever builds is what is weighed.";
  let info = await app_shared_name_search_info(search);
  let f_name = property_get(info, "f_name");
  let roots = webpack_build_generic_source_fn_names(f_name);
  let all = [];
  for (let root of roots) {
    let reached = await function_reachable_names(root);
    list_add_multiple(all, reached);
  }
  let unique = list_unique(all);
  return unique;
}
