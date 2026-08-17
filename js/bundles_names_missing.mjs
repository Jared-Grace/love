import { folder_read_files } from "./folder_read_files.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { functions_names_set } from "./functions_names_set.mjs";
import { path_join } from "./path_join.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { bundle_names_missing } from "./bundle_names_missing.mjs";
export async function bundles_names_missing() {
  "Every built file under the dev folder that reads a name of this repo's own it never defines, answered as the file and the names it is short of.";
  "Every file rather than the entry points alone, because a lazily loaded piece is a page's boot just as much as the file naming it - it simply fails later, when the reader reaches whatever needed it.";
  "Which files exist is asked of the folder rather than written down, so a newly built app is covered the day it is built and nobody has to remember to add it here.";
  let f_path2 = app_shared_name_dev_text();
  let folder = folder_public_join(f_path2);
  let files = await folder_read_files(folder);
  function built_is(name) {
    let js_is = text_ends_with(name, ".js");
    return js_is;
  }
  let built = list_filter(files, built_is);
  let known = await functions_names_set();
  async function ask(name) {
    let f_path = path_join([folder, name]);
    let missing = await bundle_names_missing(f_path, known);
    let answer = {
      name,
      missing,
    };
    return answer;
  }
  let asked = await list_map_unordered_async(built, ask);
  function short_is(answer) {
    let missing = property_get(answer, "missing");
    let any = greater_than(missing.length, 0);
    return any;
  }
  let offenders = list_filter(asked, short_is);
  ("A file that looked short is read once more before it is named, because a build writing that same file while this was reading it hands over half of one - and half a bundle is short of names the finished one carries. Measured 2026-08-17, three files came back short during a minute in which peers were rebuilding four apps, and every one of them read clean minutes later with its bytes never having changed since.");
  ("Only the ones that looked short are read again, so the second reading costs nothing on the ordinary green run and the gate stops going red at whoever happened to be building at the time.");
  async function again(answer) {
    let name = property_get(answer, "name");
    let asked_again = await ask(name);
    return asked_again;
  }
  let answered_again = await list_map_unordered_async(offenders, again);
  let still = list_filter(answered_again, short_is);
  return still;
}
