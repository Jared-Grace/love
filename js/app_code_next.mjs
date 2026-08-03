import { app_shared_button_wide_next } from "./app_shared_button_wide_next.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_repeat_1 } from "./emoji_repeat_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_next(
  context,
  parent_more,
  more_text,
  refresh,
  on_next,
  on_back,
  back_text,
  parent_next_back,
) {
  "the way-forward controls on the examples screen: a self-descriptive 'see more examples' button (its own action, no question) that refreshes the examples in place, then the primary Next button and an optional Back. more_text is the plain label for the refresh button; refresh runs it; on_next is Next; on_back/back_text are the optional back control";
  "A null refresh hides the see-more button, the same way a null on_back hides Back. A lesson whose examples are already all of them has nothing to refresh to, and a button that redraws the identical screen reads as broken rather than as complete";
  if (null_not_is(refresh)) {
    let container_more = html_div(parent_more);
    let left = emoji_repeat_1();
    let more_label = text_combine_multiple([left, " ", more_text]);
    app_shared_button_wide(container_more, more_label, refresh);
  }
  let container_buttons = html_div(parent_next_back);
  html_page_padding_x(container_buttons);
  app_shared_button_wide_next(container_buttons, on_next);
  if (null_not_is(on_back)) {
    let bt = app_shared_button_back_text();
    if (null_not_is(back_text)) {
      bt = text_combine_middle_space(bt, back_text);
    }
    app_shared_button_wide(container_buttons, bt, on_back);
  }
}
