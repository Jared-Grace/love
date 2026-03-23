import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { html_attribute_get_unwrapped_curried_right } from "../../../love/public/src/html_attribute_get_unwrapped_curried_right.mjs";
import { html_data_set_test_attribute } from "../../../love/public/src/html_data_set_test_attribute.mjs";
import { html_attribute_data_prefix } from "../../../love/public/src/html_attribute_data_prefix.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_size_half_ceil } from "../../../love/public/src/list_size_half_ceil.mjs";
import { app_replace_rule_set_attribute_hint } from "../../../love/public/src/app_replace_rule_set_attribute_hint.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { log_exit } from "../../../love/public/src/log_exit.mjs";
import { app_replace_button_symbol_style_valid_if_attribute } from "../../../love/public/src/app_replace_button_symbol_style_valid_if_attribute.mjs";
import { html_data_set_test_suffixes_attribute } from "../../../love/public/src/html_data_set_test_suffixes_attribute.mjs";
import { playwright_by_attribute_named_all } from "../../../love/public/src/playwright_by_attribute_named_all.mjs";
import { app_replace_rule_set_attribute_refresh_click } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_click.mjs";
import { app_replace_rule_set_attribute_refresh_count_assert } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_count_assert.mjs";
import { app_replace_rule_set_verify_goal_path } from "../../../love/public/src/app_replace_rule_set_verify_goal_path.mjs";
import { app_replace_rule_set_success_attribute_next } from "../../../love/public/src/app_replace_rule_set_success_attribute_next.mjs";
import { app_replace_rule_set_attribute_symbol } from "../../../love/public/src/app_replace_rule_set_attribute_symbol.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { playwright_by_attribute_test_click } from "../../../love/public/src/playwright_by_attribute_test_click.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_replace_tests_run_e2e() {
  let rule_sets = app_replace_rule_sets();
  async function lambda(page) {
    let first = list_first(rule_sets);
    let name2 = property_get(first, "name");
    await playwright_by_attribute_test_click(page, name2);
    let goals_first_rs = property_get(first, "goals");
    let g = list_first(goals_first_rs);
    let json = json_to(g);
    await playwright_by_attribute_test_click(page, json);
    async function lambda_each(rule_set) {
      let goals = property_get(rule_set, "goals");
      let rules_parsed = app_replace_rule_set_rules_get(rule_set);
      async function lambda2(goal) {
        let refresh_count = 0;
        let se = app_replace_start_end_get(goal);
        let start = property_get(se, "start");
        let end = property_get(se, "end");
        let path = app_replace_rule_set_verify_goal_path(
          rules_parsed,
          start,
          end,
        );
        async function lambda3(p) {
          refresh_count =
            await app_replace_rule_set_attribute_refresh_count_assert(
              refresh_count,
              page,
            );
          let rule = property_get(p, "rule");
          let index = property_get(p, "index");
          let attribute_value = property_get(rule, "original");
          if (true) {
            while (true) {
              let hint = app_replace_rule_set_attribute_hint();
              refresh_count =
                await app_replace_rule_set_attribute_refresh_click(
                  page,
                  hint,
                  refresh_count,
                );
              let suffix = app_replace_button_symbol_style_valid_if_attribute();
              let combined = html_data_set_test_suffixes_attribute([suffix]);
              let values = await playwright_by_attribute_named_all(
                page,
                combined,
              );
              let a = html_data_set_test_attribute();
              let r = html_attribute_data_prefix();
              let combined2 = text_combine(r, a);
              let ag = html_attribute_get_unwrapped_curried_right(combined2);
              let waited = await list_map_unordered_async(values, ag);
              let filtered2 = list_filter_null_not_is(waited);
              log(app_replace_tests_run_e2e.name, {
                filtered2,
              });
              let s = list_size_1(filtered2);
              if (s) {
                let only = list_single(filtered2);
                attribute_value = only;
                break;
              }
              let ceiling = list_size_half_ceil(start_indices);
            }
          }
          refresh_count = await app_replace_rule_set_attribute_refresh_click(
            page,
            attribute_value,
            refresh_count,
          );
          log_exit({
            waited,
          });
          let value = app_replace_rule_set_attribute_symbol(index);
          refresh_count = await app_replace_rule_set_attribute_refresh_click(
            page,
            value,
            refresh_count,
          );
        }
        await each_async(path, lambda3);
        let name = app_replace_rule_set_success_attribute_next();
        await playwright_by_attribute_test_click(page, name);
      }
      await each_async(goals, lambda2);
    }
    await each_async(rule_sets, lambda_each);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
