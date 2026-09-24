import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { property_set } from "./property_set.mjs";
import { app_receipts_purchase_save } from "./app_receipts_purchase_save.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_date_time_edit } from "./app_shared_date_time_edit.mjs";
import { app_shared_input_whole_number } from "./app_shared_input_whole_number.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_whole_number_or_empty } from "./text_whole_number_or_empty.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on } from "./html_on.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_element } from "./html_element.mjs";
import { app_shared_photo_screen } from "./app_shared_photo_screen.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_receipts_purchase_photo_add } from "./app_receipts_purchase_photo_add.mjs";
import { app_shared_button_wide_camera } from "./app_shared_button_wide_camera.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
export function app_receipts_purchase_card(parent, purchase, on_saved) {
  "$plain parent";
  "$plain purchase";
  "$plain on_saved";
  "One purchase in a box: its date, time and price, which can be changed, its photos, and a button to add another photo. Every change is kept at once and then on_saved is told, so whatever sends can send it.";
  "A photo taken on this phone is shown from the picture kept here; one taken on another phone is shown from where it is stored, so it needs the internet the first time.";
  arguments_assert(arguments, 3);
  let card = app_shared_container(parent);
  async function on_when(date, time) {
    property_set(purchase, "date", date);
    property_set(purchase, "time", time);
    await app_receipts_purchase_save(purchase);
    on_saved();
  }
  let date = property_get(purchase, "date");
  let time = property_get(purchase, "time");
  app_shared_date_time_edit(card, date, time, on_when);
  ("The price is whole pesos. What is typed is kept as a whole number or as nothing, and the box is set back to what was kept, so it never shows a price other than the one saved.");
  let price_input = app_shared_input_whole_number(card, "Price (₱ PHP)");
  let value2 = property_get_or(purchase, "price", "");
  html_value_set(price_input, value2);
  async function on_price() {
    let text = html_value_get(price_input);
    let price = text_whole_number_or_empty(text);
    html_value_set(price_input, price);
    property_set(purchase, "price", price);
    await app_receipts_purchase_save(purchase);
    on_saved();
  }
  html_on(price_input, "change", on_price);
  ("Photos are small squares side by side, cropped to fill the square; pressing one opens it whole on a screen of its own.");
  let pictures = html_div(card);
  html_style_set(pictures, "display", "flex");
  html_style_set(pictures, "flex-wrap", "wrap");
  html_style_set(pictures, "gap", "0.5em");
  function thumbnail_add(picture_set) {
    let picture = html_element(pictures, "img");
    html_style_set(picture, "width", "6em");
    html_style_set(picture, "height", "6em");
    html_style_set(picture, "object-fit", "cover");
    html_style_set(picture, "border-radius", "0.3em");
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
  async function on_photo(file) {
    file_show(file);
    await app_receipts_purchase_photo_add(purchase, file);
    on_saved();
  }
  app_shared_button_wide_camera(
    card,
    emoji_camera() + " Add a photo",
    on_photo,
  );
}
