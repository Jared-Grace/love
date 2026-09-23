import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_card } from "./html_card.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_search_results_verse_card(div_verse) {
  arguments_assert(arguments, 1);
  ("an opened verse stands on its own card inside the chapter's card: without one, the buttons of the next verse sat straight under this verse's words and read as belonging to it, and the chapter card holding several such cards is what shows they are one group from one chapter");
  html_display_block(div_verse);
  html_card(div_verse);
  let background = app_shared_color_page_background();
  html_style_background_color_set(div_verse, background);
  let gap = app_shared_spaced_small_gap();
  html_style_margin_y(div_verse, gap);
}
