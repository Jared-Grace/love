import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_program_step_trace } from "./app_learn_js_program_step_trace.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { list_min } from "./list_min.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_learn_js_items_steps_fewest(items) {
  arguments_assert(arguments, 1);
  ("the items whose program takes the fewest steps to walk through, every one of them that ties, so a guided example is never longer than its set makes it");
  ("2026-11-13, at the human's asking: a guided example of five items took twenty presses where three items took fourteen, and every run past the first few repeats what the learner has already pressed. No fixed limit, such as three runs of a loop, because some lessons need more to show their idea - every third item needs index 3 reached - so the set decides, and every set already holds its smallest size. Not picked: a limit of three runs, which every third item breaks; the same rule for the step-by-step quiz, whose questions are the lesson's own questions and so keep its sizes");
  function steps(item) {
    let question = property_get(item, "question");
    let trace = app_learn_js_program_step_trace(question);
    let size = list_size(trace);
    return size;
  }
  let counts = list_map(items, steps);
  let fewest = list_min(counts);
  function keep(item) {
    let count = steps(item);
    let eq = equal(count, fewest);
    return eq;
  }
  let kept = list_filter(items, keep);
  return kept;
}
