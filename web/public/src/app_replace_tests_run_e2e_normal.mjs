import { object_wrap_multiple } from "../../../love/public/src/object_wrap_multiple.mjs";
import { object_merge_multiple } from "../../../love/public/src/object_merge_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { each_range_unordered_async } from "../../../love/public/src/each_range_unordered_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { app_replace_tests_run_e2e_generic } from "../../../love/public/src/app_replace_tests_run_e2e_generic.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_normal() {
  let rule_sets = app_replace_rule_sets();
  function lambda2(rule_set) {
    let goals = property_get(rule_set, "goals");
    let mapped = object_wrap_multiple(goals, "goal");
    let merged = {
      rule_set,
    };
    object_merge_multiple(mapped, merged);
    return mapped;
  }
  let squashed = list_map_squash(rule_sets, lambda2);
  let count = 1;
  let chunks = list_chunk(squashed, count);
  async function each_chunk(chunk) {
    async function each_rs(m) {
      let rule_set = property_get(m, "rule_set");
      let goal = property_get(m, "goal");
      await app_replace_tests_run_e2e_generic(
        rule_set,
        goal,
        app_replace_tests_run_e2e_normal_fn,
      );
    }
    await each_unordered_async(chunk, each_rs);
  }
  await each_async(chunks, each_chunk);
  return;
  async function lambda(index) {}
  await each_range_unordered_async(count, lambda);
}
