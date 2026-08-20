import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_style_background } from "./html_style_background.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_candidates_get } from "./song_image_candidates_get.mjs";
import { song_image_frame_controls } from "./song_image_frame_controls.mjs";
import { song_image_frame_picture } from "./song_image_frame_picture.mjs";
import { song_image_frame_words } from "./song_image_frame_words.mjs";
export function song_image_frame_column(parent, state, on_change) {
  "the middle column: the candidate now being looked at, drawn at the cut's real aspect ratio, so the judgement is made on how the picture actually reads rather than on a bright thumbnail";
  let column = html_div(parent);
  song_image_frame_controls(column, state, on_change);
  let couplet = song_image_couplet_get(state.couplet);
  let candidates = song_image_candidates_get(state.couplet);
  let index = equal(state.looking[state.couplet], undefined)
    ? 0
    : state.looking[state.couplet];
  let candidate = candidates[index];
  let wide = equal(state.vertical, false);
  let width = wide ? "560px" : "293px";
  let frame = html_div(column);
  html_style_set(frame, "position", "relative");
  html_style_overflow_hidden(frame);
  html_style_background(frame, "#000000");
  html_style_set(frame, "width", width);
  html_style_set(frame, "height", wide ? "315px" : "520px");
  if (not_equal(candidate, undefined)) {
    song_image_frame_picture(frame, state, candidate);
  }
  let b = equal(state.placement, "raw");
  if (not(b)) {
    song_image_frame_words(frame, state, couplet);
  }
  let caption = html_div(column);
  html_style_margin_top(caption, "10px");
  html_style_set(caption, "width", width);
  html_style_font_size(caption, "12px");
  html_style_set(caption, "color", "#999999");
  html_text_set(
    caption,
    equal(candidate, undefined)
      ? "no candidate found yet for this symbol"
      : candidate.title + "<br>" + candidate.licence,
  );
  return column;
}
