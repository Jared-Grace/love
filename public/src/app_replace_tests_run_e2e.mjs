import { playwright_by_attribute_all } from "../../../love/public/src/playwright_by_attribute_all.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { html_attribute_get_unwrapped_curried_right } from "../../../love/public/src/html_attribute_get_unwrapped_curried_right.mjs";
import { html_data_set_test_attribute } from "../../../love/public/src/html_data_set_test_attribute.mjs";
import { html_attribute_data_prefix } from "../../../love/public/src/html_attribute_data_prefix.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_set_attribute_hint } from "../../../love/public/src/app_replace_rule_set_attribute_hint.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { app_replace_button_symbol_style_valid_if_attribute } from "../../../love/public/src/app_replace_button_symbol_style_valid_if_attribute.mjs";
import { html_data_set_test_suffixes_attribute } from "../../../love/public/src/html_data_set_test_suffixes_attribute.mjs";
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
        refresh_count =
          await app_replace_rule_set_attribute_refresh_count_assert(
            refresh_count,
            page,
          );
        let se = app_replace_start_end_get(goal);
        let start = property_get(se, "start");
        let end = property_get(se, "end");
        let path = app_replace_rule_set_verify_goal_path(
          rules_parsed,
          start,
          end,
        );
        async function lambda3(p) {
          let symbol_id = null;
          if (true) {
            ({ refresh_count, symbol_id } = await hinted(
              refresh_count,
              page,
              symbol_id,
            ));
          } else {
            let rule = property_get(p, "rule");
            let original = property_get(rule, "original");
            refresh_count = await app_replace_rule_set_attribute_refresh_click(
              page,
              original,
              refresh_count,
            );
            let index = property_get(p, "index");
            symbol_id = app_replace_rule_set_attribute_symbol(index);
          }
          refresh_count = await app_replace_rule_set_attribute_refresh_click(
            page,
            symbol_id,
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
  async function hinted(refresh_count, page, symbol_id) {
    while (true) {
      let hint = app_replace_rule_set_attribute_hint();
      refresh_count = await app_replace_rule_set_attribute_refresh_click(
        page,
        hint,
        refresh_count,
      );
      let suffix = app_replace_button_symbol_style_valid_if_attribute();
      let combined = html_data_set_test_suffixes_attribute([suffix]);
      log(app_replace_tests_run_e2e.name, {
        combined,
      });
      let left = html_attribute_data_prefix();
      let name = text_combine(left, combined);
      let values = await playwright_by_attribute_all(page, name, "true");
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
        symbol_id = list_single(filtered2);
        break;
      }
    }
    let r2 = {
      refresh_count,
      symbol_id,
    };
    return r2;
  }
}
