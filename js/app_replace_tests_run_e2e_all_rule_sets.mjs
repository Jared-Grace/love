import { playwright_test_url } from "./playwright_test_url.mjs";
import { each_async } from "./each_async.mjs";
import { each_range_unordered_async } from "./each_range_unordered_async.mjs";
import { list_empty_not_is_while_async } from "./list_empty_not_is_while_async.mjs";
import { app_replace_tests_run_e2e_goal } from "./app_replace_tests_run_e2e_goal.mjs";
import { list_pop_first } from "./list_pop_first.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { object_merge_multiple } from "./object_merge_multiple.mjs";
import { object_wrap_multiple } from "./object_wrap_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_tests_parallel_count } from "./app_replace_tests_parallel_count.mjs";
export async function app_replace_tests_run_e2e_all_rule_sets(
  url_prefix,
  e2e_inner_fns,
  rule_sets,
) {
  "$plain url_prefix";
  "Walks every goal of every set of rules on a page, several pages at a time so a whole run finishes in an evening rather than overnight.";
  "Which sets these are is received rather than looked up, because the page being tested is not always the page this code was built from - a copy kept from an earlier build offers the goals of its own day, and asking today's list for them names goals that page never had.";
  let rule_sets_goals = list_map_squash(rule_sets, lambda2);
  function lambda2(rule_set) {
    let goals = property_get(rule_set, "goals");
    let mapped = object_wrap_multiple(goals, "goal");
    let merged = {
      rule_set,
    };
    object_merge_multiple(mapped, merged);
    return mapped;
  }
  let remaining = rule_sets_goals;
  let parallel_count = app_replace_tests_parallel_count();
  async function lambda(index) {
    async function on_page(page) {
      async function while_non_empty() {
        let next = list_pop_first(remaining);
        let rule_set = property_get(next, "rule_set");
        let goal = property_get(next, "goal");
        async function each_e2e_inner_fn(e2e_inner_fn) {
          await app_replace_tests_run_e2e_goal(
            page,
            goal,
            rule_set,
            e2e_inner_fn,
          );
        }
        await each_async(e2e_inner_fns, each_e2e_inner_fn);
      }
      await list_empty_not_is_while_async(remaining, while_non_empty);
    }
    await playwright_test_url(url_prefix, on_page);
  }
  await each_range_unordered_async(parallel_count, lambda);
}
