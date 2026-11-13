import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_program_step_trace } from "./app_learn_js_program_step_trace.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_min } from "./list_min.mjs";
export function app_learn_js_items_loop_runs_fewest(items) {
  arguments_assert(arguments, 1);
  ("the items whose loops run the fewest times, counting only items whose loops run at all, every one of them that ties; when no item's loop runs, every item, so a program with no loop is never cut");
  ("2026-11-13, at the human's asking: a guided example of five items took twenty presses where three items took fourteen, and every run past the first few repeats what the learner has already pressed. No fixed limit, such as three runs of a loop, because some lessons need more to show their idea - every third item needs index 3 reached - so the set decides, and every set already holds its smallest size. Not picked: a limit of three runs, which every third item breaks; the same rule for the step-by-step quiz, whose questions are the lesson's own questions and so keep its sizes");
  ("2026-11-13, the human asked whether a cut breaks a lesson that shows either of two outcomes, yes taking five steps where no takes four. It did: cutting to the fewest STEPS, as this first did, always kept the shorter outcome - the if that is false, or the loop that never runs - and so lost an outcome in 48 of 201 guided lessons over 30 sets each. Counting only the runs of a loop, and only runs above zero, lost none. Not picked: fewest steps; fewest runs counting zero, which keeps the loop that never runs");
  function runs(item) {
    let question = property_get(item, "question");
    let trace = app_learn_js_program_step_trace(question);
    function run_is(step) {
      let alternate = property_get_or(step, "alternate", null);
      let condition = property_get_or(step, "condition", null);
      let r = equal(alternate, "loop") && equal(condition, true);
      return r;
    }
    let ran = list_filter(trace, run_is);
    let size = list_size(ran);
    return size;
  }
  let counts = list_map(items, runs);
  function above_zero(count) {
    let r = greater_than(count, 0);
    return r;
  }
  let ran_counts = list_filter(counts, above_zero);
  if (list_empty_is(ran_counts)) {
    return items;
  }
  let fewest = list_min(ran_counts);
  function keep(item) {
    let count = runs(item);
    let eq = equal(count, fewest);
    return eq;
  }
  let kept = list_filter(items, keep);
  return kept;
}
