import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { html_display_block } from "./html_display_block.mjs";
export function app_search_results_book_card_collapsed_set(
  value,
  card,
  div_body,
  div_book,
  header,
) {
  arguments_assert(arguments, 5);
  card.collapsed = value;
  if (card.collapsed) {
    html_display_none(div_body);
    html_display_inline_block(div_book);
    let value3 = app_shared_spaced_neighbor_gap();
    html_style_margin_x(div_book, value3);
    html_style_margin_bottom(header, "0");
  } else {
    html_display_block(div_body);
    html_display_block(div_book);
    html_style_margin_x(div_book, "0");
    html_style_margin_bottom(header, "0.3em");
  }
}
