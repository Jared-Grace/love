import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { folder_repo_love_public } from "./folder_repo_love_public.mjs";
import { webpack_watch_app_deps_get } from "./webpack_watch_app_deps_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { git_here_run_text } from "./git_here_run_text.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { path_name } from "./path_name.mjs";
import { list_size } from "./list_size.mjs";
export async function apps_published_sources_changed_since_build() {
  arguments_assert(arguments, 0);
  ("Every app on the public site whose code has been committed since the copy waiting to be sent was last committed - so a change that was finished and never sent shows up here, by app, with the functions that moved. Read-only.");
  ("Measured 2026-11-21: the games came off the front page in the code on 2026-11-12, and the copy waiting to be sent was still the one committed on 2026-11-08, so the live site went on offering an unfinished game for nine days with nothing saying so.");
  ("It counts commits to the files and not what they changed, so it says more apps are behind than really are: a function whose only change was its prose, or one canonicalized again, is counted the same as one that changes what a reader sees. Read the functions it names before deciding an app needs sending; an app it calls current is current.");
  ("An app whose waiting copy was never committed is listed apart, because there is no moment to compare against, and calling it either behind or current would be a guess.");
  let names = await apps_published_names();
  let folder = folder_repo_love_public();
  let behind = [];
  let current = [];
  let unrecorded = [];
  for (let a_name of names) {
    let ad = await webpack_watch_app_deps_get(a_name);
    if (null_is(ad)) {
      list_add(unrecorded, a_name);
      continue;
    }
    let deps = property_get(ad, "deps");
    let paths = list_map(deps, function_name_to_path_relative);
    let r2 = file_name_js(a_name);
    let bundle = path_join([folder, r2]);
    let built = await git_here_run_text([
      "log",
      "-1",
      "--format=%H %cs",
      "--",
      bundle,
    ]);
    if (text_empty_is(built)) {
      list_add(unrecorded, a_name);
      continue;
    }
    let [commit, built_on] = built.split(" ");
    let changed_text = await git_here_run_text([
      "diff",
      "--name-only",
      commit,
      "HEAD",
      "--",
      ...paths,
    ]);
    if (text_empty_is(changed_text)) {
      list_add(current, a_name);
      continue;
    }
    let list = text_split_newline(changed_text);
    let changed = list_map(list, path_name);
    list_add(behind, {
      a_name,
      built_on,
      count: list_size(changed),
      functions: changed,
    });
  }
  let r = {
    behind,
    current,
    unrecorded,
  };
  return r;
}
