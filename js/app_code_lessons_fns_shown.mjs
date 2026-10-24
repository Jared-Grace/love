import { app_shared_page_stage_prod_is } from "./app_shared_page_stage_prod_is.mjs";
import { not } from "./not.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_latest_held_fns } from "./app_code_lessons_latest_held_fns.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { app_code_lessons_released_fns } from "./app_code_lessons_released_fns.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_lessons_fns_shown() {
  "the lessons the page being read right now hands to whoever opens it: every one not held back on the working copy and on latest, and on the public page a learner is handed only the ones released to them";
  "The cut is made HERE rather than in the list itself, so that everything asking what lessons EXIST - the gates, the sweep over every exercise, the walk over the lenient names - goes on seeing all of them. Those questions are about the repo, and the repo has all of them; only a reader has a stage.";
  "The working copy once showed everything, so the person reading through had the whole run in front of them with nothing to turn on. Since 2026-10-24, at the human's asking, it leaves out what latest holds back, so it shows what latest will; a held lesson is read by taking it off the held list.";
  "LATEST IS CUT TOO, and it is the reason the second question is asked. Latest is not a working copy - it is where the learner is sent whenever the built site cannot be released - so a run cut on the built site and whole on latest is a cut that stops working on exactly the days it is needed. Measured 2026-08-23: thirty-two lessons nobody had read through were reachable there while the cut was believed to be holding.";
  let prod = app_shared_page_stage_prod_is();
  ("latest shows every lesson, the same as a working copy - at the human's request, 2026-09-26, so the whole course can be tried there. Only the public site still shows just the released run");
  let handed_to_a_learner = prod;
  let whole = not(handed_to_a_learner);
  let fns = app_code_lessons_fns();
  if (whole) {
    ("latest leaves out only the lessons held back from it, so one not ready yet can be kept off while the rest are tried there");
    ("2026-10-24, at the human's asking: the working copy leaves the same ones out, so it shows exactly what latest will - one list decides both");
    let held = app_code_lessons_latest_held_fns();
    let kept = list_without_multiple(fns, held);
    return kept;
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
