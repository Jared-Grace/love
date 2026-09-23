import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { property_set } from "./property_set.mjs";
import { app_receipts_purchase_save } from "./app_receipts_purchase_save.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_date_time_edit } from "./app_shared_date_time_edit.mjs";
import { html_div } from "./html_div.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_max_width } from "./html_style_max_width.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { app_receipts_purchase_photo_add } from "./app_receipts_purchase_photo_add.mjs";
import { app_shared_button_wide_camera } from "./app_shared_button_wide_camera.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
export function app_receipts_purchase_card(parent, purchase, on_saved) {
  "$plain parent";
  "$plain purchase";
  "$plain on_saved";
  "One purchase in a box: its date and time, which can be changed, its photos, and a button to add another photo. Every change is kept at once and then on_saved is told, so whatever sends can send it.";
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
  let pictures = html_div(card);
  function picture_add() {
    let picture = html_element(pictures, "img");
    html_style_max_width(picture, "100%");
    return picture;
  }
  function file_show(file) {
    let picture = picture_add();
    html_media_source_file_set(picture, file);
  }
  for (let photo of property_get(purchase, "photos")) {
    if (property_exists(photo, "file")) {
      let value = property_get(photo, "file");
      file_show(value);
    } else {
      let picture = picture_add();
      let src = property_get(photo, "url");
      html_src_set(picture, src);
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
