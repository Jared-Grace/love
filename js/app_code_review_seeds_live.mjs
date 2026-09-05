import { fn_name } from "./fn_name.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_review_seeds_live(seeds) {
  "the seeds of a saved review queue that this page can still rebuild - the ones naming a lesson it hands out";
  "★ A SAVED QUEUE OUTLIVES THE LIST IT WAS GATHERED FROM. Its seeds are plain words written to a learner's own device, and the run of lessons a page hands out is a decision made in this repo that moves without anyone looking at what is already saved on a device. So a seed can name a lesson that the page reading it back no longer has - and the lookup that rebuilds one asks for exactly one lesson and throws on none, which kills the boot rather than the item. That is not a screen a learner can get off: every load reads the same saved queue and dies the same way, and no deploy reaches it, because the fault is in what is on their device rather than in what is served.";
  ("Measured 2026-09-04: a learner had been stuck on the did-not-finish-loading screen for days, on the built site and on latest alike, and the page reported the throw itself - an empty list asked for its one item, under ",
    fn_name("app_code_lesson_find_by_id"),
    ".");
  ("Dropped rather than repaired, because there is nothing to repair a seed into: the lesson it names is not being handed out, so the question it holds is one this reader is not meant to be asked yet.");
  ("Only the lesson is checked, not the quiz kind inside it. Checking the kind would mean building every lesson's batch at load - real work, once per saved seed - to guard a staleness nothing has shown; the lesson is answered from a list already in hand.");
  let lessons = app_code_lessons();
  let ids = list_map_property(lessons, "id");
  function live_is(seed) {
    let item = property_get(seed, "lesson_id");
    let known = list_includes(ids, item);
    return known;
  }
  let live = list_filter(seeds, live_is);
  return live;
}
