import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { webpack_build_generic_source_fn_names } from "./webpack_build_generic_source_fn_names.mjs";
import { function_dependencies_bundled } from "./function_dependencies_bundled.mjs";
export async function qa_app_reachable_names(search) {
  "Every function one app's bundle can reach, so a complaint about anything outside it is a complaint about something that app does not ship. Read-only.";
  "The roots are asked of the builder rather than written down here, because the builder generates the entry file the bundler is pointed at and a second opinion about what that file imports is a thing that can disagree with it. Asked this way, an entry gaining a root is a root this gains too.";
  "There are two roots and missing the second is the whole trap: the app's own function reaches only the screen, while everything the boot does - the corruption net, the storage reads, the asserts underneath them - hangs off the shared initializer instead. Walked from the app alone, a broken assert reads as unrelated to every app in the repo, which is the one wrong answer this must never give.";
  "The app is named the same way the builder names it, by search word, so whatever builds is what is weighed.";
  "IT COUNTS A FETCHED-WHILE-RUNNING IMPORT AS REACHING, which is why it asks the builder's walk rather than the plain one. A piece the bundler sets aside beside the main file is still that app's, still served to whoever opens the page, and a complaint about it is still a complaint about what this app ships. Measured 2026-09-04 over all thirty-one dev apps: the wider answer is a superset of the narrower one every time, adding between five names and two and a half thousand. The sandbox was the extreme - a hundred and seventeen names by the narrow reading against two thousand seven hundred and ten by this one, and its own twenty-four built files declare two thousand six hundred and three of them, so the narrow answer understated what that page carries about twenty-two fold and let it deploy past almost any complaint there is.";
  let info = await app_shared_name_search_info(search);
  let f_name = property_get(info, "f_name");
  let roots = webpack_build_generic_source_fn_names(f_name);
  let reached = await function_dependencies_bundled(roots);
  return reached;
}
