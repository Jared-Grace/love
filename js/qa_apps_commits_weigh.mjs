import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_app_gates_sorted } from "./qa_app_gates_sorted.mjs";
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
