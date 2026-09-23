import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { property_set } from "./property_set.mjs";
import { app_receipts_purchase_save } from "./app_receipts_purchase_save.mjs";
import { app_shared_date_time_edit } from "./app_shared_date_time_edit.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_max_width } from "./html_style_max_width.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { app_receipts_purchase_photo_add } from "./app_receipts_purchase_photo_add.mjs";
import { app_shared_button_wide_camera } from "./app_shared_button_wide_camera.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
export function app_receipts_purchase_card(parent, purchase, on_saved) {
  "$plain parent";
  "$plain purchase";
  "$plain on_saved";
  "One purchase in a box: its date and time, which can be changed, its photos, and a button to add another photo. Every change is kept at once and then on_saved is told, so whatever sends can send it.";
  arguments_assert(arguments, 3);
  let card = app_shared_container(parent);
  async function on_when(date, time) {
    property_set(purchase, "date", date);
    property_set(purchase, "time", time);
    await app_receipts_purchase_save(purchase);
    on_saved();
  }
  let date2 = property_get(purchase, "date");
  let time2 = property_get(purchase, "time");
  app_shared_date_time_edit(card, date2, time2, on_when);
  let pictures = html_div(card);
  function picture_show(file) {
    let picture = html_element(pictures, "img");
    html_style_max_width(picture, "100%");
    html_media_source_file_set(picture, file);
  }
  for (let photo of property_get(purchase, "photos")) {
    let value = property_get(photo, "file");
    picture_show(value);
  }
  async function on_photo(file) {
    picture_show(file);
    await app_receipts_purchase_photo_add(purchase, file);
    on_saved();
  }
  app_shared_button_wide_camera(
    card,
    emoji_camera() + " Add a photo",
    on_photo,
  );
}
