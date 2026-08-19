import { property_list_map_property } from "./property_list_map_property.mjs";
import { function_worker_generation_holder } from "./function_worker_generation_holder.mjs";
import { function_worker_pool_holder } from "./function_worker_pool_holder.mjs";
import { function_worker_pool_run } from "./function_worker_pool_run.mjs";
import { identity } from "./identity.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { log } from "./log.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
export async function function_worker_pool_retire_try() {
  "Proves that raising the retirement count replaces the pool, that the workers of the pool being replaced are told to drain, and that a call landing afterwards is still answered correctly.";
  "The other proof next door fires twelve calls at once and checks no two answers cross. That is the whole of the happy path and none of the reload, so the count going up, the old pool being drained and the new one being built had nothing watching them at all - which is exactly the half that broke when the count stopped living at the top of one file and became something two files share.";
  "The count is raised by hand here rather than by saving a file. What saves a file is a watcher, and this is not a test of the watcher: the wiring from a save to the count was left alone, and the wiring from the count to a fresh pool is what moved. Touching a file would also make every other watcher in the repo retire its own workers, for a question that can be asked without troubling them.";
  "The pool being replaced is held onto before the count is raised, because the point is that the thing handed back afterwards is a different one. Asked only afterwards there would be nothing to compare it against, and a pool that was never replaced would look exactly like a pool that was.";
  "Draining rather than killing is checked through the workers of the old pool, each of which should have been told it is retired. A worker still carrying a job keeps its own process alive until it has answered; the mark is what tells it to leave once it has.";
  let f_name = identity.name;
  let first = await function_worker_pool_run(f_name, [1]);
  let held = function_worker_pool_holder();
  let before = property_get(held, "current");
  let generations = function_worker_generation_holder();
  let count = property_get(generations, "count");
  let raised = count + 1;
  generations.count = raised;
  let second = await function_worker_pool_run(f_name, [2]);
  let after = property_get(held, "current");
  let crossed = [];
  if (not_equal(first, 1)) {
    list_add(crossed, "the first answer");
  }
  if (not_equal(second, 2)) {
    list_add(crossed, "the answer after the count went up");
  }
  if (after === before) {
    list_add(crossed, "the pool, which was not replaced");
  }
  let retirements = property_list_map_property(before, "workers", "retired");
  for (let retired of retirements) {
    if (not_equal(retired, true)) {
      list_add(
        crossed,
        "a worker of the replaced pool, which was never told to drain",
      );
    }
  }
  let hint = {
    advice:
      "raising the retirement count should build a fresh pool and drain the one it replaces - the count and the pool each live under their own name, so a write that goes to a copy rather than to the shared one would look exactly like this",
    errand: f_name,
    generation: raised,
  };
  list_empty_is_assert_json(crossed, {
    hint,
  });
  let r = {
    generation: raised,
    retired: retirements.length,
  };
  log(function_worker_pool_retire_try.name, r);
  return r;
}
