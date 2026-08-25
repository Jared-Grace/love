import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { webpack_watch_app_deps_get } from "./webpack_watch_app_deps_get.mjs";
import { webpack_dev_functions_modified_ms } from "./webpack_dev_functions_modified_ms.mjs";
import { webpack_dev_bundle_path } from "./webpack_dev_bundle_path.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_max } from "./list_max.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
import { or } from "./or.mjs";
export async function webpack_dev_stale_names() {
  "Which dev bundles on disk are behind the code that goes into them.";
  "★ A BUNDLE IS A COPY, AND A COPY IS ONLY EVER RIGHT UNTIL THE NEXT EDIT. Nothing goes red when one falls behind: the page loads, runs, and shows yesterday's answer, so the only way anybody found out was by reading something odd on a phone and disbelieving it. This is that question asked out loud instead.";
  "BEHIND IS DECIDED BY THE FILES THE APP ACTUALLY REACHES, not by everything here. A repository this size is edited constantly and nearly none of it is in any one app, so measuring against the whole folder marks every bundle stale every hour and the answer stops meaning anything.";
  "A bundle that was never written at all counts as behind, because that is the same thing from a reader's side - the page has no answer to give - and it wants the same doing about it.";
  "An app whose reach cannot be worked out is counted rather than dropped, so a set that comes back empty can be told apart from a set that came back empty because nothing could be read.";
  arguments_assert(arguments, 0);
  let a_names = await apps_names_dev();
  let times = await webpack_dev_functions_modified_ms();
  let stale = [];
  let unreadable = [];
  for (let a_name of a_names) {
    let built = await webpack_watch_app_deps_get(a_name);
    if (null_is(built)) {
      list_add(unreadable, a_name);
      continue;
    }
    let deps = property_get(built, "deps");
    let each = [];
    for (let f_name of deps) {
      let ms = property_get_or_null(times, f_name);
      list_add(each, ms);
    }
    let known = list_filter_null_not_is(each);
    let newest = list_max(known);
    let path = await webpack_dev_bundle_path(a_name);
    let written = await path_modified_ms(path);
    let never = null_is(written);
    let behind = less_than(written, newest);
    let old = or(never, behind);
    if (old) {
      list_add(stale, a_name);
    }
  }
  let r = {
    checked: list_size(a_names),
    unreadable,
    stale,
  };
  return r;
}
