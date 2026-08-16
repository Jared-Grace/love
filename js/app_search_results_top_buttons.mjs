import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_triangle_down } from "./emoji_triangle_down.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_triangle_up } from "./emoji_triangle_up.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { html_br_2 } from "./html_br_2.mjs";
export function app_search_results_top_buttons(
  div_results,
  expand_all_lambda,
  collapse_all_lambda,
  copy_all_lambda,
) {
  arguments_assert(arguments, 4);
  let down = emoji_triangle_down();
  let expand_all_text = text_combine(down, " Expand all");
  app_shared_button_wide(div_results, expand_all_text, expand_all_lambda);
  let up = emoji_triangle_up();
  let collapse_all_text = text_combine(up, " Collapse all");
  app_shared_button_wide(div_results, collapse_all_text, collapse_all_lambda);
  let left = html_button_copy_text();
  app_shared_button_wide_text_combine(
    div_results,
    left,
    " all",
    copy_all_lambda,
  );
  html_br_2(div_results);
}
