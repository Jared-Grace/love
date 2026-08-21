import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { webpack_watch_app_deps_get } from "./webpack_watch_app_deps_get.mjs";
import { probes_at_once } from "./probes_at_once.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_tally_ranked_top } from "./list_tally_ranked_top.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";

export async function webpack_watch_rebuild_fan_out() {
  "How many of the dev apps the watcher rebuilds when one function is edited, counted over every app at once.";
  arguments_assert(arguments, 0);
  ("★ WHAT THIS DECIDES IS WHETHER THE WATCHER NEEDS A CEILING ON HOW MANY BUILDS RUN AT ONCE. The watcher holds one flag per app, so an app already building waits - but nothing holds the apps together, and every app an edited file reaches starts building the moment the pause after the edit runs out. Edit one small piece that everything uses and that is one build per app, all begun in the same instant, on a machine several people are sharing.");
  ("A count is what settles it rather than an argument. The apps have hundreds of pieces each and nearly all of those pieces are small shared ones, so the guess either way is easy to make and easy to get wrong; this says how many apps each piece actually reaches.");
  ("The whole tally is not returned. What a reader wants is the shape - how many pieces reach every app, how many reach more than half - and the ten that reach most, as something to recognise. The tally itself is thousands of lines long and would be scrolled past.");
  let a_names = await apps_names_dev();
  let limit = probes_at_once();
  let built = await list_map_limited_async(
    a_names,
    webpack_watch_app_deps_get,
    limit,
  );
  let indexed = list_filter_null_not_is(built);
  let apps = list_size(indexed);
  let named = [];
  for (let one of indexed) {
    let deps = property_get(one, "deps");
    for (let f_name of deps) {
      list_add(named, f_name);
    }
  }
  let tally = list_tally(named);
  let f_names = properties_get(tally);
  let functions = list_size(f_names);
  let half = apps / 2;
  let every_app = [];
  let more_than_half = [];
  for (let f_name of f_names) {
    let reach = property_get(tally, f_name);
    if (reach === apps) {
      list_add(every_app, f_name);
    }
    if (reach > half) {
      list_add(more_than_half, f_name);
    }
  }
  let top = list_tally_ranked_top(named, 10);
  let r = {
    apps,
    functions,
    every_app: list_size(every_app),
    more_than_half: list_size(more_than_half),
    top,
  };
  return r;
}
