import { equal } from "./equal.mjs";
import { html_img } from "./html_img.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { song_image_commons_url } from "./song_image_commons_url.mjs";
export function song_image_frame_picture(frame, state, candidate) {
  "place the candidate inside the preview frame; in half placement it takes one half of the frame at full brightness, and in behind placement it fills the frame dimmed so the words can sit on it";
  let src = song_image_commons_url(candidate.title, 900);
  let picture = html_img(frame, src);
  let wide = equal(state.vertical, false);
  html_style_set(picture, "position", "absolute");
  html_style_set(picture, "object-fit", "cover");
  if (equal(state.placement, "half")) {
    html_style_set(picture, "width", wide ? "50%" : "100%");
    html_style_set(picture, "height", wide ? "100%" : "50%");
    html_style_set(picture, "left", wide && state.flip ? "50%" : "0");
    html_style_set(picture, "top", !wide && state.flip ? "50%" : "0");
    return picture;
  }
  html_style_set(picture, "width", "100%");
  html_style_set(picture, "height", "100%");
  html_style_set(picture, "left", "0");
  html_style_set(picture, "top", "0");
  if (equal(state.placement, "behind")) {
    html_style_set(picture, "opacity", "0.34");
    html_style_set(picture, "filter", "brightness(0.75)");
  }
  return picture;
}
