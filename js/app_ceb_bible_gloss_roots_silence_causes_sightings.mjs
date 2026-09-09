import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_classes_backing_mark } from "./gloss_classes_backing_mark.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { app_ceb_bible_gloss_roots_silence_causes_reachable_now } from "./app_ceb_bible_gloss_roots_silence_causes_reachable_now.mjs";
export function app_ceb_bible_gloss_roots_silence_causes_sightings(
  classes,
  known,
  folded_index,
) {
  arguments_assert(arguments, 3);
  let marked = gloss_classes_backing_mark(classes, known);
  function silent_is(one_class) {
    let backing = property_get_or_null(one_class, "backing");
    let answer = equal(backing, "silent");
    return answer;
  }
  let silent = list_filter(marked, silent_is);
  let totals = {
    silent: 0,
  };
  function sighting_add(one_class) {
    let count = property_get(one_class, "count");
    let so_far = property_get(totals, "silent");
    let total = add(so_far, count);
    property_set(totals, "silent", total);
  }
  each(silent, sighting_add);
  let by_cause = {};
  let r2 = app_ceb_bible_gloss_roots_silence_causes_reachable_now(
    known,
    folded_index,
    by_cause,
    silent,
  );
  let reachable_now = property_get(r2, "reachable_now");
  let classes_counted = property_get(r2, "classes_counted");
  let sightings = property_get(r2, "sightings");
  let r = {
    marked,
    silent,
    totals,
    reachable_now,
    classes_counted,
    sightings,
  };
  return r;
}
