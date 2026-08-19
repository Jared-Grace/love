import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { qa_app_bible_folders } from "./qa_app_bible_folders.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function qa_app_shipped_names(search) {
  "Everything one app ships that a gate might name: every function in its bundle, the app itself, the page it is served as, and every translation of the Bible it can put in front of a reader. Read-only.";
  "Its neighbour answers the functions and answers them well, and for a long while the functions were taken as the whole answer. They are not. A gate is entitled to complain about an app, a page, a file, a translation, a lesson or an example, and a reader that knows only function names reads every one of those as naming nobody at all - which is the one answer that holds EVERY app out of a deployment, because a gate naming nobody cannot be shown to be about somewhere else.";
  "Twelve red gates were in exactly that position in one recorded run and not one of them was silent. Ten of them named their offenders plainly; they were simply being read for the wrong kind of name.";
  "The kinds are added here rather than inside the walk, because the walk follows imports and none of these is reached by importing anything. They are what the app IS rather than what it calls.";
  let reach = await qa_app_reachable_names(search);
  let info = await app_shared_name_search_info(search);
  let a_name = property_get(info, "a_name");
  let f_name = property_get(info, "f_name");
  let shipped = [];
  list_add_multiple(shipped, reach);
  ("the app answers to its own short name, which is how a gate about apps names one");
  list_add(shipped, a_name);
  let page = file_name_html(a_name);
  list_add(shipped, page);
  let folders = await qa_app_bible_folders(reach, f_name);
  list_add_multiple(shipped, folders);
  let unique = list_unique(shipped);
  return unique;
}
