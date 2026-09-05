import { fn_name } from "./fn_name.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { app_code_review_items_by_id } from "./app_code_review_items_by_id.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_size } from "./list_size.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_review_seeds_live(seeds) {
  "the seeds of a saved review queue that this page can still rebuild - the ones naming a lesson it hands out, and a quiz kind that lesson still has";
  "★ A SAVED QUEUE OUTLIVES THE LIST IT WAS GATHERED FROM. Its seeds are plain words written to a learner's own device, and what a page hands out is a decision made in this repo that moves without anyone looking at what is already saved on a device. So a seed can name something the page reading it back no longer has - and rebuilding one asks for exactly one lesson and throws on none, which kills the boot rather than the item. That is not a screen a learner can get off: every load reads the same saved queue and dies the same way, and no deploy reaches it, because the fault is in what is on their device rather than in what is served.";
  ("Measured 2026-09-04: a learner had been stuck on the did-not-finish-loading screen for days, on the built site and on latest alike, and the page reported the throw itself - an empty list asked for its one item, under ",
    fn_name("app_code_lesson_find_by_id"),
    ".");
  ("Dropped rather than repaired, because there is nothing to repair a seed into: what it names is not being handed out, so the question it holds is one this reader is not meant to be asked yet.");
  ("★ BOTH HALVES OF A SEED CAN GO STALE, AND CHECKING ONLY THE LESSON LEAVES THE SAME DEAD SCREEN. A seed also names which of that lesson's quiz kinds it is, by position, and a lesson that has since lost a kind hands back a list too short to answer - which throws exactly as hard, at exactly the same moment, and looks identical to the learner.");
  ("The kinds are counted once per LESSON rather than once per seed, which is what makes the second half affordable. A queue holds one seed per lesson per kind, so counting per seed would build the same lesson's batch several times over; counted per lesson it is the same work the gathering next door does anyway at this very moment, and the gathering is what runs instead when this drops everything.");
  ("The lesson is answered first and the kinds only for what survives, so a lesson that is no longer handed out is never built to be measured.");
  let lessons = app_code_lessons();
  let ids = list_map_property(lessons, "id");
  function named_is(seed) {
    let lesson_id = property_get(seed, "lesson_id");
    let named = list_includes(ids, lesson_id);
    return named;
  }
  let by_name = list_filter(seeds, named_is);
  let wanted = list_map_property_unique(by_name, "lesson_id");
  let counts = {};
  function count_kinds(lesson_id) {
    let items = app_code_review_items_by_id(lesson_id);
    let kinds = list_first_property(items, "exercises");
    let count = list_size(kinds);
    property_set(counts, lesson_id, count);
  }
  each(wanted, count_kinds);
  function live_is(seed) {
    let lesson_id = property_get(seed, "lesson_id");
    let kind_index = property_get(seed, "kind_index");
    let count = property_get(counts, lesson_id);
    let within = less_than(kind_index, count);
    return within;
  }
  let live = list_filter(by_name, live_is);
  return live;
}
