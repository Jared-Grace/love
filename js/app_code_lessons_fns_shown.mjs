import { app_shared_page_stage_prod_is } from "./app_shared_page_stage_prod_is.mjs";
import { app_shared_page_stage_latest_is } from "./app_shared_page_stage_latest_is.mjs";
import { not } from "./not.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_released_fns } from "./app_code_lessons_released_fns.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_lessons_fns_shown() {
  "the lessons the page being read right now hands to whoever opens it: every one of them on the working copy, and on either page a learner is handed only the ones released to them";
  "The cut is made HERE rather than in the list itself, so that everything asking what lessons EXIST - the gates, the sweep over every exercise, the walk over the lenient names - goes on seeing all of them. Those questions are about the repo, and the repo has all of them; only a reader has a stage.";
  "The working copy shows everything, so the person reading through has the whole run in front of them at the address they already use, with nothing to turn on and nothing to remember to turn off again.";
  "LATEST IS CUT TOO, and it is the reason the second question is asked. Latest is not a working copy - it is where the learner is sent whenever the built site cannot be released - so a run cut on the built site and whole on latest is a cut that stops working on exactly the days it is needed. Measured 2026-08-23: thirty-two lessons nobody had read through were reachable there while the cut was believed to be holding.";
  let prod = app_shared_page_stage_prod_is();
  let latest = app_shared_page_stage_latest_is();
  let handed_to_a_learner = prod || latest;
  let whole = not(handed_to_a_learner);
  let fns = app_code_lessons_fns();
  if (whole) {
    return fns;
  }
  ("filtered by a list of released lessons rather than cut at the last one released, because lessons get put in between released ones - a cut hands every one of those over, a list hands over none of them");
  let released = app_code_lessons_released_fns();
  function released_is(lesson) {
    let included = list_includes(released, lesson);
    return included;
  }
  let shown = list_filter(fns, released_is);
  return shown;
}
