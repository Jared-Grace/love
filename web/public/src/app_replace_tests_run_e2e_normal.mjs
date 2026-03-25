import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { each_range_unordered_async } from "../../../love/public/src/each_range_unordered_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { app_replace_tests_run_e2e_generic } from "../../../love/public/src/app_replace_tests_run_e2e_generic.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_normal() {
  let rule_sets = app_replace_rule_sets();
  let squashed = list_map_squash(properties, fn);
  const property_name = "goals";
  let unsquashed = list_map_property(rule_sets, property_name);
  let goals = list_squash(unsquashed);
  let count = 20;
  let chunks = list_chunk(rule_sets, count);
  async function each_chunk(chunk) {
    async function each_rs(rule_set) {
      await app_replace_tests_run_e2e_generic(
        rule_set,
        goal,
        app_replace_tests_run_e2e_normal_fn,
      );
    }
    await each_unordered_async(chunk, each_rs);
  }
  await each_async(chunks, each_chunk);
  async function lambda(index) {}
  await each_range_unordered_async(count, lambda);
}
