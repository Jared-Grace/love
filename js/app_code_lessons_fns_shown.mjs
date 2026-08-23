import { app_shared_page_stage_latest_is } from "./app_shared_page_stage_latest_is.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_prod_last_fn } from "./app_code_lessons_prod_last_fn.mjs";
import { app_shared_page_stage_prod_is } from "./app_shared_page_stage_prod_is.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_slice_include } from "./list_slice_include.mjs";
import { not } from "./not.mjs";
export function app_code_lessons_fns_shown() {
  "the lessons the page being read right now hands to whoever opens it: every one of them on the working copy, and on either page a learner is handed the run up to the last one that has been read through";
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
  ("naming the last one and cutting there, rather than counting, because a lesson put in ahead of it moves every number and moves no name");
  let last = app_code_lessons_prod_last_fn();
  let index = list_index_of(fns, last);
  let shown = list_slice_include(fns, 0, index);
  return shown;
}
