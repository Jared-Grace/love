import { app_g_verify_view_autosize_new } from "./app_g_verify_view_autosize_new.mjs";
import { app_g_verify_view_highlight_state } from "./app_g_verify_view_highlight_state.mjs";
import { app_g_verify_view_suggest_and_reviewed_bars } from "./app_g_verify_view_suggest_and_reviewed_bars.mjs";
import { app_g_verify_view_draft_restore } from "./app_g_verify_view_draft_restore.mjs";
import { app_g_verify_view_suggest_box_new } from "./app_g_verify_view_suggest_box_new.mjs";
import { app_g_verify_view_approve_bar } from "./app_g_verify_view_approve_bar.mjs";
import { app_g_verify_view_line_lists } from "./app_g_verify_view_line_lists.mjs";
import { app_g_verify_view_passage_panel } from "./app_g_verify_view_passage_panel.mjs";
import { app_g_verify_view_links_bar } from "./app_g_verify_view_links_bar.mjs";
import { app_g_verify_view_draft_drop } from "./app_g_verify_view_draft_drop.mjs";
import { app_g_verify_view_history_show } from "./app_g_verify_view_history_show.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_centered } from "./html_centered.mjs";
import { property_get } from "./property_get.mjs";
import { text_words } from "./text_words.mjs";
import { app_shared_verse_selected_background_color } from "./app_shared_verse_selected_background_color.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { app_shared_font_serif } from "./app_shared_font_serif.mjs";
export async function app_g_verify_view(
  container,
  scripture,
  lines,
  chapter_code,
  verse,
  on_approved,
) {
  html_clear(container);
  let tokens = text_words(scripture);
  let highlight = app_shared_verse_selected_background_color();
  let border = app_shared_color_blue_pale();
  let serif = app_shared_font_serif();
  let small_gap = app_shared_spaced_small_gap();
  let r = app_g_verify_view_highlight_state(lines);
  let clear_all = property_get(r, "clear_all");
  let order_comps = property_get(r, "order_comps");
  let row_comps = property_get(r, "row_comps");
  let token_spans = property_get(r, "token_spans");
  let covered = property_get(r, "covered");
  app_g_verify_view_passage_panel(
    container,
    serif,
    covered,
    lines,
    clear_all,
    token_spans,
    highlight,
    row_comps,
    order_comps,
    tokens,
  );
  app_g_verify_view_line_lists(
    container,
    small_gap,
    lines,
    border,
    tokens,
    serif,
    clear_all,
    token_spans,
    highlight,
    row_comps,
    order_comps,
  );
  app_g_verify_view_links_bar(container, small_gap, chapter_code, verse);
  app_g_verify_view_approve_bar(
    container,
    small_gap,
    chapter_code,
    verse,
    on_approved,
  );
  let r2 = app_g_verify_view_suggest_box_new(
    container,
    small_gap,
    lines,
    serif,
  );
  let native_sizing = property_get(r2, "native_sizing");
  let value = property_get(r2, "value4");
  let suggest_area = property_get(r2, "suggest_area");
  ("keep an in-progress suggestion per verse across navigation, but ONLY while the underlying lines are unchanged; if the lines were updated the saved draft is stale, so drop it and show the fresh lines");
  let r3 = app_g_verify_view_draft_restore(
    chapter_code,
    verse,
    value,
    suggest_area,
  );
  let base_key = property_get(r3, "base_key");
  let draft_key = property_get(r3, "draft_key");
  let autosize = app_g_verify_view_autosize_new(
    native_sizing,
    suggest_area,
    draft_key,
    base_key,
    value,
  );
  let reset_bar = html_div(container);
  html_style_margin_top(reset_bar, small_gap);
  html_centered(reset_bar);
  function reset_to_current() {
    html_value_set(suggest_area, value);
    app_g_verify_view_draft_drop(draft_key, base_key);
    autosize();
  }
  app_shared_button(reset_bar, "Reset to current lines", reset_to_current);
  app_g_verify_view_suggest_and_reviewed_bars(
    container,
    small_gap,
    suggest_area,
    chapter_code,
    verse,
    draft_key,
    base_key,
    value,
  );
  ("show the reviewer their own past suggestions for this verse; Load drops one back into the box to view or build on");
  await app_g_verify_view_history_show(
    chapter_code,
    verse,
    container,
    small_gap,
    suggest_area,
    draft_key,
    base_key,
    value,
    autosize,
  );
}
