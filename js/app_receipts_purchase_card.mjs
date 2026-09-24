import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { app_receipts_color_get } from "./app_receipts_color_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { property_get } from "./property_get.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_receipts_purchase_usa_text } from "./app_receipts_purchase_usa_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_set } from "./property_set.mjs";
import { app_receipts_purchase_save } from "./app_receipts_purchase_save.mjs";
import { app_shared_date_time_edit } from "./app_shared_date_time_edit.mjs";
import { app_shared_input_amount } from "./app_shared_input_amount.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { text_amount_or_empty } from "./text_amount_or_empty.mjs";
import { app_receipts_price_usd_text } from "./app_receipts_price_usd_text.mjs";
import { html_on } from "./html_on.mjs";
import { app_shared_textarea_label } from "./app_shared_textarea_label.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
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
import { app_receipts_color_choose } from "./app_receipts_color_choose.mjs";
export function app_receipts_purchase_card(
  parent,
  purchase,
  on_saved,
  php_per_usd,
) {
  "$plain parent";
  "$plain purchase";
  "$plain on_saved";
  "$plain php_per_usd";
  "php_per_usd is how many pesos a dollar bought, or null when no rate is known, and then no dollars are shown.";
  "One purchase in a box: its date, time, price and description, which can be changed, its photos, a button to add another photo, and the reviewer's notes and colour. Every change is kept at once and then on_saved is told, so whatever sends can send it.";
  "A photo taken on this phone is shown from the picture kept here; one taken on another phone is shown from where it is stored, so it needs the internet the first time.";
  arguments_assert(arguments, 4);
  ("The box is a blue card like the day cards in the list, filled with the colour the purchase is marked with, which is blue until another is chosen at the bottom.");
  let card = app_shared_container_blue_medium(parent);
  function color_show() {
    let marked = app_receipts_color_get(purchase);
    let background = property_get(marked, "color");
    html_style_background_color_set(card, background);
  }
  color_show();
  ("The date and time are Philippine time, where the purchases are made, and are said to be so above the boxes. Under them the same moment is shown in eastern US time, where the receipts are reviewed, redrawn whenever either box changes.");
  let philippines = country_philippines();
  html_div_text(
    card,
    property_get(philippines, "flag") +
      " " +
      property_get(philippines, "name") +
      " time",
  );
  let usa_line = null;
  function usa_show(date, time) {
    let text = "";
    if (not_equal(date, "") && not_equal(time, "")) {
      text = app_receipts_purchase_usa_text(date, time);
    }
    html_text_set(usa_line, text);
  }
  async function on_when(date, time) {
    usa_show(date, time);
    property_set(purchase, "date", date);
    property_set(purchase, "time", time);
    await app_receipts_purchase_save(purchase);
    on_saved();
  }
  let date = property_get(purchase, "date");
  let time = property_get(purchase, "time");
  app_shared_date_time_edit(card, date, time, on_when);
  usa_line = html_div_text(card, "");
  usa_show(date, time);
  ("The price is pesos, with centavos after a point. What is typed is kept as an amount to the centavo or as nothing, and the box is set back to what was kept, so it never shows a price other than the one saved.");
  let price_input = app_shared_input_amount(card, "Price (₱ PHP)");
  let value2 = property_get_or(purchase, "price", "");
  html_value_set(price_input, value2);
  ("Under the price, what it comes to in US dollars, redrawn with every key pressed so it follows the typing.");
  let usd_line = html_div_text(card, "");
  function usd_show() {
    let text2 = html_value_get(price_input);
    let typed = text_amount_or_empty(text2);
    let text3 = app_receipts_price_usd_text(typed, php_per_usd);
    html_text_set(usd_line, text3);
  }
  usd_show();
  async function on_price() {
    let text = html_value_get(price_input);
    let price = text_amount_or_empty(text);
    html_value_set(price_input, price);
    usd_show();
    property_set(purchase, "price", price);
    await app_receipts_purchase_save(purchase);
    on_saved();
  }
  html_on(price_input, "change", on_price);
  html_on(price_input, "input", usd_show);
  ("The description and the notes save themselves: every key is kept on this phone at once, so nothing typed is lost even if the app is closed mid-word, and it is sent once the typing has paused for a second, so a sentence is sent once rather than once a letter. Each is held to 1500 letters because they travel as words storage keeps beside the file, and storage refuses more than a few thousand of those in all.");
  let send_timer = null;
  function writing_box(title, field) {
    let input = app_shared_textarea_label(card, title);
    html_attribute_set(input, "maxlength", "1500");
    let value3 = property_get_or(purchase, field, "");
    html_value_set(input, value3);
    async function on_writing() {
      let value4 = html_value_get(input);
      property_set(purchase, field, value4);
      await app_receipts_purchase_save(purchase);
      clearTimeout(send_timer);
      send_timer = setTimeout(on_saved, 1000);
    }
    html_on(input, "input", on_writing);
  }
  writing_box("Description", "description");
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
  ("Below the photos is room for the person reviewing the purchase: notes of their own, and a colour to mark it with, such as one meaning it has been looked at.");
  writing_box("Notes", "notes");
  let color = property_get_or(purchase, "color", "blue");
  async function on_color(key) {
    property_set(purchase, "color", key);
    color_show();
    await app_receipts_purchase_save(purchase);
    on_saved();
  }
  app_receipts_color_choose(card, color, on_color);
}
