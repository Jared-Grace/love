import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_app_gates_sorted } from "./qa_app_gates_sorted.mjs";
import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { apps_names } from "./apps_names.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { git_commit_behind_count } from "./git_commit_behind_count.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { number_is } from "./number_is.mjs";
import { null_is } from "./null_is.mjs";
import { and } from "./and.mjs";
export async function qa_commit_named_apps_report() {
  "Which apps could be sent out right now, and from how far back - every app in the folder weighed against every commit anybody has already judged. Asks no gates and ships nothing.";
  "Its neighbour counts a commit sound only when every gate was green there, and says so, and says that the per-app question is a different one. This is that different one, asked of the whole record at once. A commit red on a gate no app can reach is useless by the strict count and shippable by every app, and only this one can tell you so.";
  "No floor is named here and none could be. Whether a judged commit carries the work you mean to ship is known to whoever did that work - so this answers what the record holds for whom, and the question of whether a particular commit carries a particular change stays with the walk that takes a floor.";
  "How a red gate is placed is not decided here. The sorting is asked for, exactly as the one-app question asks for it, so the four silent faults found in it over three days stay found in one place and this cannot drift from what a deploy would actually do.";
  "Every app is weighed once and every commit then costs nothing, which is the whole reason this is worth having as one command. Asking the one-app question app by app would walk each app's imports again for every commit in the record.";
  "An app whose reach cannot be worked out is named rather than passed over. It usually means the app is spelled a way the builder's search cannot place, and an app quietly missing from a list of what can ship reads exactly like an app that can ship from nothing.";
  let known = await qa_commit_named();
  let head = await git_head_commit();
  let commits = properties_get(known);
  ("How far back each judged commit stands is asked once here rather than once per app, because it is a fact about the folder and the app being weighed has nothing to do with it");
  let distances = {};
  for (let commit of commits) {
    distances[commit] = await git_commit_behind_count(commit, head);
  }
  let named_all = await apps_names();
  let apps_unique = list_unique(named_all);
  let looked = [];
  let unweighed = [];
  for (let app of apps_unique) {
    async function reached() {
      let names = await qa_app_reachable_names(app);
      return names;
    }
    let reach = await catch_null_async(reached);
    let missing = null_is(reach);
    if (missing) {
      list_add(unweighed, app);
      continue;
    }
    let able = [];
    for (let commit of commits) {
      let entry = property_get_or_null(known, commit);
      let green = property_get_or_null(entry, "green");
      let failed = property_get_or_null(entry, "failed");
      let blamed = property_get_or_null(entry, "named");
      let sorted = qa_app_gates_sorted(green, failed, blamed, reach);
      let blocking = property_get(sorted, "blocking");
      let clear = list_empty_is(blocking);
      let distance = property_get_or_null(distances, commit);
      let placed = number_is(distance);
      let both = and(clear, placed);
      if (both) {
        list_add(able, {
          commit,
          behind: distance,
        });
      }
    }
    ("Nearest to the folder first, so the freshest commit this app could ship from is the one at the front");
    function behind_of(one) {
      let counted = property_get(one, "behind");
      return counted;
    }
    list_sort_number_mapper(able, behind_of);
    let freshest = list_get_or_null(able, 0);
    list_add(looked, {
      app,
      reach: list_size(reach),
      shippable: list_size(able),
      freshest,
    });
  }
  let r = {
    head,
    entries: list_size(commits),
    apps: looked,
    unweighed,
  };
  return r;
}
