import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { webpack_dev_config_folder_named } from "./webpack_dev_config_folder_named.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { equal } from "./equal.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { or } from "./or.mjs";
import { list_add } from "./list_add.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { js_bundle_function_names } from "./js_bundle_function_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { webpack_watch_app_deps_get } from "./webpack_watch_app_deps_get.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
export async function webpack_app_deps_bundle_omitted(a_name) {
  "$plain a_name";
  "Which functions one app's built files carry that the reading of what that app is made of never names - the built answer checked against the walked one.";
  "IT IS A REPORT AND DELIBERATELY NOT A GATE. A built file is a copy, so an app whose bundle is older than the source carries functions the source no longer reaches, and those come back here as differences nobody did anything wrong to cause. Measured across all thirty apps on the fourth of September 2026: twenty-eight answered with nothing at all, and the two that did not were both explained in one look - one stale bundle still holding five buttons its page had stopped using, and one name a build had given to a helper of its own. Wired to a stop that would be red for a reason no one person can clear, which is the same argument that keeps staleness itself out of the gate beside it.";
  "IT IS THE ONE CHECK ON THE DEP READING THAT COMES FROM SOMEWHERE ELSE. Everything else asking what an app is made of walks the source with the very reader whose blind spot is in question, so it agrees with itself whatever it misses. Run against the picture Bible before the reader was taught to follow a fetch-while-running import, this would have named every picture band at once - which is exactly the hour that was lost to being told nothing was out of date.";
  "A NAME IS KEPT ONLY IF THE REPO ANSWERS TO IT, because a build declares its own helpers and carries a library's besides, and every one of those would otherwise read as a function the reading had missed.";
  arguments_assert(arguments, 1);
  let named = await webpack_dev_config_folder_named(a_name);
  let config_folder = property_get(named, "config_folder");
  let name = property_get(named, "a_name");
  let entry_file = text_combine_multiple([name, ".js"]);
  let chunk_ending = text_combine_multiple([".", name, ".js"]);
  let files = await folder_read_files(config_folder);
  let carried_names = [];
  let read_files = [];
  for (let file of files) {
    let entry_is = equal(file, entry_file);
    let chunk_is = text_ends_with(file, chunk_ending);
    let mine = or(entry_is, chunk_is);
    if (not(mine)) {
      continue;
    }
    list_add(read_files, file);
    let path = path_join([config_folder, file]);
    let text = await file_read_uncached(path);
    let found = js_bundle_function_names(text);
    for (let f of found) {
      list_add(carried_names, f);
    }
  }
  let declared = list_unique(carried_names);
  let repo_names = await functions_names();
  let carried = list_intersect(declared, repo_names);
  let got = await webpack_watch_app_deps_get(a_name);
  let deps = property_get(got, "deps");
  let omitted = list_difference(carried, deps);
  list_sort_text(omitted);
  let r = {
    a_name,
    files: list_size(read_files),
    carried: list_size(carried),
    deps: list_size(deps),
    omitted,
  };
  return r;
}
