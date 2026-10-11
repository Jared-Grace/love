import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { app_receipts_color_get } from "./app_receipts_color_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { property_get } from "./property_get.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { not_equal } from "./not_equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { date_year_month_day } from "./date_year_month_day.mjs";
import { time_12_label } from "./time_12_label.mjs";
import { app_receipts_purchase_usa_text } from "./app_receipts_purchase_usa_text.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_receipts_price_php_text } from "./app_receipts_price_php_text.mjs";
import { app_receipts_price_usd_text } from "./app_receipts_price_usd_text.mjs";
import { app_receipts_payment_get } from "./app_receipts_payment_get.mjs";
import { equal } from "./equal.mjs";
import { app_receipts_payment_emoji } from "./app_receipts_payment_emoji.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_receipts_photos_draw } from "./app_receipts_photos_draw.mjs";
export function app_receipts_purchase_card_view(parent, purchase, php_per_usd) {
  "$plain parent";
  "$plain purchase";
  "$plain php_per_usd";
  "php_per_usd is how many pesos a dollar bought, or null when no rate is known, and then no dollars are shown.";
  "One purchase in a box, to be looked at and never changed: its date and time on both clocks, its price in pesos and dollars, how it was paid, its description, its photos, and the reviewer's notes, filled with the colour it is marked with. The same box the receipts app draws, with every box to type in and every button that changes something left out.";
  arguments_assert(arguments, 3);
  let card = app_shared_container_blue_medium(parent);
  let marked = app_receipts_color_get(purchase);
  let background = property_get(marked, "color");
  html_style_background_color_set(card, background);
  let philippines = country_philippines();
  let date = property_get(purchase, "date");
  let time = property_get(purchase, "time");
  if (not_equal(date, "") && not_equal(time, "")) {
    html_div_text(
      card,
      property_get(philippines, "flag") +
        " " +
        date_year_month_day(date) +
        " - " +
        time_12_label(time),
    );
    let text2 = app_receipts_purchase_usa_text(date, time);
    html_div_text(card, text2);
  }
  let price = property_get_or(purchase, "price", "");
  if (not_equal(price, "")) {
    let text3 = app_receipts_price_php_text(price);
    html_div_text(card, text3);
    let usd = app_receipts_price_usd_text(price, php_per_usd);
    if (not_equal(usd, "")) {
      html_div_text(card, usd);
    }
  }
  let payment = app_receipts_payment_get(purchase);
  let paid = equal(payment, "cash") ? "Cash" : "Credit";
  html_div_text(card, app_receipts_payment_emoji(purchase) + " " + paid);
  ("A written field shows only when something was written in it, keeping its line breaks.");
  function writing_show(title, field) {
    let text = property_get_or(purchase, field, "").trim();
    if (equal(text, "")) {
      return;
    }
    app_shared_field_title(card, title);
    let shown = html_div_text(card, text);
    html_style_set(shown, "white-space", "pre-wrap");
  }
  writing_show("Description", "description");
  app_receipts_photos_draw(card, purchase);
  writing_show("Notes", "notes");
}
