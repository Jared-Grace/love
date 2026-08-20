import { html_text_align } from "./html_text_align.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function song_image_frame_words(frame, state, couplet) {
  "draw the couplet over the preview frame the size the video draws it; in half placement it is centred in the half the picture does not hold, and otherwise it is centred over the whole frame";
  let words = html_div(frame);
  let wide = equal(state.vertical, false);
  html_style_set(words, "position", "absolute");
  html_text_align(words, "center");
  html_style_set(words, "color", "#ffffff");
  html_style_set(words, "font-weight", "700");
  html_style_line_height(words, "1.3");
  html_style_font_size(words, wide ? "32px" : "29px");
  html_style_padding(words, "0 5%");
  html_style_set(words, "box-sizing", "border-box");
  html_style_set(words, "transform", "translateY(-50%)");
  let half_is = equal(state.placement, "half");
  html_style_set(words, "width", half_is && wide ? "50%" : "100%");
  html_style_set(
    words,
    "left",
    half_is && wide && not(state.flip) ? "50%" : "0",
  );
  let tall_top = state.flip ? "25%" : "75%";
  html_style_set(words, "top", half_is && not(wide) ? tall_top : "50%");
  html_text_set(words, couplet.first + "<br>" + couplet.second);
  return words;
}
