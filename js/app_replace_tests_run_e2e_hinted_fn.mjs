import { each_range_async } from "../../love/js/each_range_async.mjs";
import { list_single } from "../../love/js/list_single.mjs";
import { list_size_1 } from "../../love/js/list_size_1.mjs";
import { list_filter_null_not_is } from "../../love/js/list_filter_null_not_is.mjs";
import { list_map_unordered_async } from "../../love/js/list_map_unordered_async.mjs";
import { html_attribute_get_unwrapped_curried_right } from "../../love/js/html_attribute_get_unwrapped_curried_right.mjs";
import { html_data_set_test_attribute } from "../../love/js/html_data_set_test_attribute.mjs";
import { playwright_by_attribute } from "../../love/js/playwright_by_attribute.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { html_attribute_data_prefix } from "../../love/js/html_attribute_data_prefix.mjs";
import { html_data_set_test_suffixes_attribute } from "../../love/js/html_data_set_test_suffixes_attribute.mjs";
import { app_replace_symbol_tile_valid_if_attribute } from "../../love/js/app_replace_symbol_tile_valid_if_attribute.mjs";
import { app_replace_rule_set_attribute_refresh_click } from "../../love/js/app_replace_rule_set_attribute_refresh_click.mjs";
import { app_replace_rule_set_attribute_hint } from "../../love/js/app_replace_rule_set_attribute_hint.mjs";
import { app_replace_rule_set_verify_goal_depth_max } from "../../love/js/app_replace_rule_set_verify_goal_depth_max.mjs";
export async function app_replace_tests_run_e2e_hinted_fn(
  p,
  refresh_count,
  page,
  rule_original_previous,
) {
  let symbol_id = null;
  let max = app_replace_rule_set_verify_goal_depth_max();
  async function lambda(item) {
    let hint = app_replace_rule_set_attribute_hint();
    refresh_count = await app_replace_rule_set_attribute_refresh_click(
      page,
      hint,
      refresh_count,
    );
    let suffix = app_replace_symbol_tile_valid_if_attribute();
    let combined = html_data_set_test_suffixes_attribute([suffix]);
    let left = html_attribute_data_prefix();
    let name = text_combine(left, combined);
    let values = await playwright_by_attribute(page, name, "true");
    let a = html_data_set_test_attribute();
    let r = html_attribute_data_prefix();
    let combined2 = text_combine(r, a);
    let ag = html_attribute_get_unwrapped_curried_right(combined2);
    let waited = await list_map_unordered_async(values, ag);
    let filtered = list_filter_null_not_is(waited);
    let s = list_size_1(filtered);
    if (s) {
      symbol_id = list_single(filtered);
      return true;
    }
  }
  await each_range_async(max, lambda);
  let r2 = {
    refresh_count,
    symbol_id,
    rule_original_previous,
  };
  return r2;
}
