import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_exists_equals } from "./property_exists_equals.mjs";

export function webpack_watch_building_count(building) {
  "$plain building";
  "How many apps the watcher is building at this moment, read off the flags it already keeps.";
  arguments_assert(arguments, 1);
  ("Nothing new is written down. The watcher already sets a flag while an app builds and clears it afterwards, so the number of apps in flight is a reading of what is there rather than a second record beside it - which matters because a second record can disagree with the first, and this one is used to decide whether to start work.");
  ("An app that has finished is left in the map with its flag turned off rather than taken out, so the names here are every app that has ever been built and only the ones set true are counted.");
  let a_names = properties_get(building);
  let count = 0;
  for (let a_name of a_names) {
    let busy = property_exists_equals(building, a_name, true);
    if (busy) {
      count = count + 1;
    }
  }
  return count;
}
