import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { image_luma_measure } from "./image_luma_measure.mjs";
import { image_luma_band } from "./image_luma_band.mjs";
export function song_image_luma_badge(parent, src) {
  "a small badge on a candidate row saying how bright that picture measured, filled in once it has loaded; a bright picture is exactly the one that reads as a grey slab behind the words, so this is what saves the click on it";
  let badge = html_div(parent);
  html_style_set(badge, "font-size", "10px");
  html_style_set(badge, "width", "48px");
  html_style_set(badge, "text-align", "center");
  html_style_set(badge, "color", "#676767");
  html_text_set(badge, "…");
  function lambda(luma) {
    let band = image_luma_band(luma);
    html_text_set(badge, band.text);
    html_style_set(badge, "color", band.colour);
  }
  image_luma_measure(src, lambda);
  return badge;
}
