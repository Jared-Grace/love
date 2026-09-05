import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_commit_judged_gates_sorted } from "./qa_commit_judged_gates_sorted.mjs";
import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { number_is } from "./number_is.mjs";
import { and } from "./and.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_apps_commits_weigh(
  apps_unique,
  unweighed,
  commits,
  known,
  distances,
  looked,
) {
  arguments_assert(arguments, 6);
  ("Weighs every app against every judged commit, adding one weighed entry per app to the list of what was looked at, and naming in the other list any app whose reach could not be worked out at all.");
  ("How far back each commit stands is handed in already counted, because that is a fact about the folder rather than about the app, and counting it once per app would walk the same history over and over.");
  ("A judged commit is read by the SAME reader a deployment reads it with, and that is the whole of what this is careful about. Read here field by field instead, the offenders a gate wrote down when it threw were never looked at - only the functions scraped out of its sentence were - so every gate that complains in a record rather than in English came back naming nobody, and a gate naming nobody is counted against every app there is. Measured 2026-09-05: four gates were in that state at the newest judged commits, between them holding the whole repo out of a deployment, while the very same record read through the shared reader placed all four somewhere else.");
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
      let sorted = qa_commit_judged_gates_sorted(entry, reach);
      let clear = property_list_empty_is(sorted, "blocking");
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
}
