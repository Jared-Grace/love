import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { commons_thumb_url_async } from "./commons_thumb_url_async.mjs";
import { image_luma_measure } from "./image_luma_measure.mjs";
import { image_luma_band } from "./image_luma_band.mjs";
import { promise_later_catch_ignore } from "./promise_later_catch_ignore.mjs";
export function song_image_luma_badge(parent, title) {
  "a small badge on a candidate row saying how bright that picture measured, filled in once it has been fetched and read; a bright picture is exactly the one that reads as a grey slab behind the words, so this is what saves the click on it";
  "this hands the badge back at once and measures later, rather than being an async function, so that a column of ten candidates fetches all ten at the same time instead of queueing behind each other";
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
  async function measure() {
    let url = await commons_thumb_url_async(title, 120);
    if (equal(url, null)) {
      lambda(null);
      return;
    }
    image_luma_measure(url, lambda);
  }
  promise_later_catch_ignore(measure);
  return badge;
}
