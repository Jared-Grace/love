import { app_replace_rule_set_verify_goal_depth_max } from "../../../love/public/src/app_replace_rule_set_verify_goal_depth_max.mjs";
import { each_range_async } from "../../../love/public/src/each_range_async.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { html_attribute_get_unwrapped_curried_right } from "../../../love/public/src/html_attribute_get_unwrapped_curried_right.mjs";
import { html_data_set_test_attribute } from "../../../love/public/src/html_data_set_test_attribute.mjs";
import { playwright_by_attribute_all } from "../../../love/public/src/playwright_by_attribute_all.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_attribute_data_prefix } from "../../../love/public/src/html_attribute_data_prefix.mjs";
import { html_data_set_test_suffixes_attribute } from "../../../love/public/src/html_data_set_test_suffixes_attribute.mjs";
import { app_replace_button_symbol_style_valid_if_attribute } from "../../../love/public/src/app_replace_button_symbol_style_valid_if_attribute.mjs";
import { app_replace_rule_set_attribute_refresh_click } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_click.mjs";
import { app_replace_rule_set_attribute_hint } from "../../../love/public/src/app_replace_rule_set_attribute_hint.mjs";
import { app_replace_tests_run_e2e_all } from "../../../love/public/src/app_replace_tests_run_e2e_all.mjs";
export async function app_replace_tests_run_e2e_hinted() {
  await app_replace_tests_run_e2e_all(hinted);
  async function hinted(p, refresh_count, page, symbol_id) {
    let max = app_replace_rule_set_verify_goal_depth_max();
    async function lambda(item) {
      let hint = app_replace_rule_set_attribute_hint();
      refresh_count = await app_replace_rule_set_attribute_refresh_click(
        page,
        hint,
        refresh_count,
      );
      let suffix = app_replace_button_symbol_style_valid_if_attribute();
      let combined = html_data_set_test_suffixes_attribute([suffix]);
      let left = html_attribute_data_prefix();
      let name = text_combine(left, combined);
      let values = await playwright_by_attribute_all(page, name, "true");
      let a = html_data_set_test_attribute();
      let r = html_attribute_data_prefix();
      let combined2 = text_combine(r, a);
      let ag = html_attribute_get_unwrapped_curried_right(combined2);
      let waited = await list_map_unordered_async(values, ag);
      let filtered2 = list_filter_null_not_is(waited);
      let s = list_size_1(filtered2);
      if (s) {
        symbol_id = list_single(filtered2);
        return true;
      }
    }
    await each_range_async(max, lambda);
    let r2 = {
      refresh_count,
      symbol_id,
    };
    return r2;
  }
}
