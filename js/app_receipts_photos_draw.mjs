import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_element } from "./html_element.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_photo_screen } from "./app_shared_photo_screen.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_receipts_photos_draw(parent, purchase) {
  "$plain parent";
  "$plain purchase";
  "A purchase's photos as small squares side by side, cropped to fill the square; pressing one opens it whole on a screen of its own.";
  "A photo taken on this phone is shown from the picture kept here; one taken on another phone is shown from where it is stored, so it needs the internet the first time.";
  "Hands back the function that puts one more picture, kept on this phone, at the end of the row, so a photo just taken shows at once.";
  arguments_assert(arguments, 2);
  let pictures = html_div(parent);
  html_display_flex(pictures);
  html_style_set(pictures, "flex-wrap", "wrap");
  html_style_gap(pictures, "0.5em");
  function thumbnail_add(picture_set) {
    let picture = html_element(pictures, "img");
    html_style_set(picture, "width", "6em");
    html_style_set(picture, "height", "6em");
    html_style_set(picture, "object-fit", "cover");
    html_border_radius(picture, "0.3em");
    picture_set(picture);
    function on_open() {
      app_shared_photo_screen(picture_set);
    }
    html_on_click(picture, on_open);
  }
  function file_show(file) {
    function picture_set(picture) {
      html_media_source_file_set(picture, file);
    }
    thumbnail_add(picture_set);
  }
  function url_show(src) {
    function picture_set(picture) {
      html_src_set(picture, src);
    }
    thumbnail_add(picture_set);
  }
  for (let photo of property_get(purchase, "photos")) {
    if (property_exists(photo, "file")) {
      let value = property_get(photo, "file");
      file_show(value);
    } else {
      let src = property_get(photo, "url");
      url_show(src);
    }
  }
  return file_show;
}
