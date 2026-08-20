import { song_image_color_text } from "./song_image_color_text.mjs";
import { song_image_color_text_quiet } from "./song_image_color_text_quiet.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { song_image_luma_badge } from "./song_image_luma_badge.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_img } from "./html_img.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { song_image_candidates_get } from "./song_image_candidates_get.mjs";
import { song_image_chosen_map } from "./song_image_chosen_map.mjs";
import { song_image_candidate_src } from "./song_image_candidate_src.mjs";
export function song_image_candidate_column(parent, state, on_change) {
  "the right column: every candidate for this couplet as a numbered row, clicked to look at it in frame; deciding is a separate button from looking, so comparing several never commits by accident";
  let column = html_div(parent);
  html_style_set(column, "width", "300px");
  let candidates = song_image_candidates_get(state.couplet);
  let looking = equal(state.looking[state.couplet], undefined)
    ? 0
    : state.looking[state.couplet];
  let map = song_image_chosen_map(state);
  let chosen = map[state.couplet];
  let number = 0;
  for (let candidate of candidates) {
    let index = number;
    number = number + 1;
    let row = html_div(column);
    html_display_flex(row);
    html_style_gap(row, "8px");
    html_align_items_center(row);
    html_style_margin_bottom(row, "6px");
    html_style_padding(row, "4px");
    html_border_radius(row, "6px");
    html_style_set(
      row,
      "border",
      equal(index, looking) ? "1px solid #ffe994" : "1px solid #222222",
    );
    function lambda() {
      state.looking[state.couplet] = index;
      on_change();
    }
    let text2 = String(index + 1);
    let pick = html_button(row, text2, lambda);
    html_style_set(pick, "width", "28px");
    html_cursor_pointer(pick);
    let src = song_image_candidate_src(candidate, 120);
    let thumbnail = html_img(row, src);
    html_style_set(thumbnail, "width", "54px");
    html_style_set(thumbnail, "height", "54px");
    html_style_set(thumbnail, "object-fit", "cover");
    html_cursor_pointer(thumbnail);
    let text = html_div(row);
    html_style_font_size(text, "11px");
    html_style_set(text, "color", song_image_color_text());
    html_style_flex(text, "1");
    html_text_set(
      text,
      candidate.title +
        '<br><span style="color:#676767">' +
        candidate.licence +
        "</span>",
    );
    song_image_luma_badge(row, candidate);
    function lambda2() {
      if (equal(map[state.couplet], index)) {
        delete map[state.couplet];
      } else {
        map[state.couplet] = index;
      }
      on_change();
    }
    let decide = html_button(
      row,
      equal(chosen, index) ? "✓" : "choose",
      lambda2,
    );
    html_style_font_size(decide, "11px");
    html_cursor_pointer(decide);
  }
  if (equal(candidates.length, 0)) {
    let empty = html_div(column);
    html_style_font_size(empty, "13px");
    html_style_set(empty, "color", song_image_color_text_quiet());
    html_text_set(empty, "Nobody has searched for this symbol yet.");
  }
}
