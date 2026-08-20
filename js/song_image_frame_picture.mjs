import { html_width_full } from "./html_width_full.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_img } from "./html_img.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { song_image_candidate_src } from "./song_image_candidate_src.mjs";
export function song_image_frame_picture(frame, state, candidate) {
  "place the candidate inside the preview frame; in half placement it takes one half of the frame at full brightness, and in behind placement it fills the frame dimmed so the words can sit on it";
  "a found picture is cropped to fill its space and a drawn one is fitted whole inside it. A found one is a rectangle with something in the middle, so cropping loses margin; a drawn one is a shape standing alone on black, and cropping it cuts the shape itself - and since the frame behind it is the same black, fitting it whole shows no edge to give it away.";
  "a found picture is veiled when the words sit over it and a drawn one is not, because the veil is only ever there to stop a picture competing with the words. A drawn one is already nothing but a shape on the same black the words sit on, so dimming it would take away the contrast that was the whole reason for drawing it that way.";
  let src = song_image_candidate_src(candidate, 900);
  let drawn = property_exists(candidate, "src");
  let picture = html_img(frame, src);
  let wide = equal(state.vertical, false);
  html_style_set(picture, "position", "absolute");
  html_style_set(picture, "object-fit", drawn ? "contain" : "cover");
  if (equal(state.placement, "half")) {
    html_style_set(picture, "width", wide ? "50%" : "100%");
    html_style_set(picture, "height", wide ? "100%" : "50%");
    html_style_set(picture, "left", wide && state.flip ? "50%" : "0");
    html_style_set(picture, "top", not(wide) && state.flip ? "50%" : "0");
    return picture;
  }
  html_width_full(picture);
  html_style_set(picture, "height", "100%");
  html_style_set(picture, "left", "0");
  html_style_set(picture, "top", "0");
  let veil = equal(state.placement, "behind") && not(drawn);
  if (veil) {
    html_style_opacity(picture, "0.34");
    html_style_set(picture, "filter", "brightness(0.75)");
  }
  return picture;
}
