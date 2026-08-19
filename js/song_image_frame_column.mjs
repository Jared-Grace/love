import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { html_div } from "./html_div.mjs";
import { html_img } from "./html_img.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_candidates_get } from "./song_image_candidates_get.mjs";
import { song_image_commons_url } from "./song_image_commons_url.mjs";
export function song_image_frame_column(parent, state, on_change) {
  "the middle column: the candidate now being looked at, drawn at the video's real aspect ratio with the real lyric text over it - full-frame and dim behind the words in the vertical cut, bright in the free side band in the horizontal cut, because the free space differs between the two cuts";
  let column = html_div(parent);
  let controls = html_div(column);
  html_style_set(controls, "display", "flex");
  html_style_set(controls, "gap", "8px");
  html_style_set(controls, "margin-bottom", "10px");
  function lambda() {
    state.vertical = not(state.vertical);
    on_change();
  }
  let cut = html_button(
    controls,
    state.vertical ? "vertical" : "horizontal",
    lambda,
  );
  html_style_set(cut, "padding", "6px 12px");
  html_style_set(cut, "cursor", "pointer");
  function lambda2() {
    state.treated = not(state.treated);
    on_change();
  }
  let treatment = html_button(
    controls,
    state.treated ? "as in video" : "raw picture",
    lambda2,
  );
  html_style_set(treatment, "padding", "6px 12px");
  html_style_set(treatment, "cursor", "pointer");
  let couplet = song_image_couplet_get(state.couplet);
  let candidates = song_image_candidates_get(state.couplet);
  let index = equal(state.looking[state.couplet], undefined)
    ? 0
    : state.looking[state.couplet];
  let candidate = candidates[index];
  let frame = html_div(column);
  html_style_set(frame, "position", "relative");
  html_style_set(frame, "overflow", "hidden");
  html_style_set(frame, "background", "#000000");
  html_style_set(frame, "width", state.vertical ? "293px" : "560px");
  html_style_set(frame, "height", state.vertical ? "520px" : "315px");
  if (not_equal(candidate, undefined)) {
    let src = song_image_commons_url(candidate.title, 800);
    let picture = html_img(frame, src);
    html_style_set(picture, "position", "absolute");
    html_style_set(picture, "top", "0");
    html_style_set(picture, "height", "100%");
    html_style_set(picture, "object-fit", "cover");
    let side = state.vertical || not(state.treated);
    html_style_set(picture, "left", "0");
    html_style_set(picture, "width", side ? "100%" : "22%");
    if (state.treated) {
      html_style_set(picture, "opacity", state.vertical ? "0.34" : "0.85");
      html_style_set(
        picture,
        "filter",
        state.vertical ? "brightness(0.75)" : "brightness(0.9)",
      );
    }
  }
  if (state.treated) {
    let words = html_div(frame);
    html_style_set(words, "position", "absolute");
    html_style_set(words, "left", state.vertical ? "8%" : "24%");
    html_style_set(words, "width", state.vertical ? "84%" : "60%");
    html_style_set(words, "top", "50%");
    html_style_set(words, "transform", "translateY(-50%)");
    html_style_set(words, "text-align", "center");
    html_style_set(words, "color", "#ffffff");
    html_style_set(words, "font-weight", "700");
    html_style_set(words, "line-height", "1.3");
    html_style_set(words, "font-size", state.vertical ? "30px" : "34px");
    html_text_set(words, couplet.first + "<br>" + couplet.second);
  }
  let caption = html_div(column);
  html_style_set(caption, "margin-top", "10px");
  html_style_set(caption, "width", state.vertical ? "293px" : "560px");
  html_style_set(caption, "font-size", "12px");
  html_style_set(caption, "color", "#999999");
  html_text_set(
    caption,
    equal(candidate, undefined)
      ? "no candidate found yet for this symbol"
      : candidate.title + "<br>" + candidate.licence,
  );
}
