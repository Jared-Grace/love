import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { equal } from "./equal.mjs";
import { clipboard_copy_try } from "./clipboard_copy_try.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { app_shared_input_amount } from "./app_shared_input_amount.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { text_amount_or_empty } from "./text_amount_or_empty.mjs";
import { app_receipts_php_per_usd_today } from "./app_receipts_php_per_usd_today.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { html_on } from "./html_on.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { date_year_month_day } from "./date_year_month_day.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { app_receipts_php_per_usd_months_fill } from "./app_receipts_php_per_usd_months_fill.mjs";
export async function app_receipts_convert_screen(parent, on_back) {
  "$plain parent";
  "$plain on_back";
  "Two boxes, pesos and US dollars, at today's rate. Typing in either one works out the other, and the box being typed in is never touched, so the typing is never corrected under a finger. A line below says which rate is being used and for what day.";
  "It draws at once from what this phone holds. Today's rate is fetched behind it, and when it lands the box not typed in last is worked out again.";
  arguments_assert(arguments, 2);
  app_shared_button_back(parent, on_back);
  let card = app_shared_container_blue_medium(parent);
  function copy_button_add(input) {
    async function on_copy() {
      let value = html_value_get(input);
      if (equal(value, "")) {
        return;
      }
      await clipboard_copy_try(value);
    }
    app_shared_button_copy(card, on_copy);
  }
  let php_input = app_shared_input_amount(card, "₱ PHP");
  copy_button_add(php_input);
  function php_amount_button_add(label, amount) {
    function on_amount() {
      html_value_set(php_input, amount);
      on_php();
    }
    app_shared_button(card, label, on_amount);
  }
  php_amount_button_add("₱10,000", "10000");
  php_amount_button_add("₱20,000", "20000");
  let usd_input = app_shared_input_amount(card, "$ USD");
  copy_button_add(usd_input);
  let rate_line = html_div_text(card, "");
  let php_typed_last = true;
  function amount_shown(amount) {
    let r = amount.toFixed(2);
    return r;
  }
  function usd_from_php() {
    let text = html_value_get(php_input);
    let typed = text_amount_or_empty(text);
    let object = app_receipts_php_per_usd_today();
    let php_per_usd = property_get(object, "php_per_usd");
    if (equal(typed, "") || equal(php_per_usd, null)) {
      html_value_set(usd_input, "");
      return;
    }
    let top = Number(typed);
    let divided = divide(top, php_per_usd);
    let value = amount_shown(divided);
    html_value_set(usd_input, value);
  }
  function php_from_usd() {
    let text2 = html_value_get(usd_input);
    let typed = text_amount_or_empty(text2);
    let object2 = app_receipts_php_per_usd_today();
    let php_per_usd = property_get(object2, "php_per_usd");
    if (equal(typed, "") || equal(php_per_usd, null)) {
      html_value_set(php_input, "");
      return;
    }
    let left = Number(typed);
    let p = multiply(left, php_per_usd);
    let value2 = amount_shown(p);
    html_value_set(php_input, value2);
  }
  function on_php() {
    php_typed_last = true;
    usd_from_php();
  }
  function on_usd() {
    php_typed_last = false;
    php_from_usd();
  }
  html_on(php_input, "input", on_php);
  html_on(usd_input, "input", on_usd);
  function rate_show() {
    let rate = app_receipts_php_per_usd_today();
    let php_per_usd = property_get(rate, "php_per_usd");
    let date = property_get(rate, "date");
    if (equal(php_per_usd, null)) {
      html_text_set(rate_line, "No rate yet - this needs the internet once");
      return;
    }
    let number = "₱" + php_per_usd.toFixed(2) + " per $1";
    if (equal(date, null)) {
      html_text_set(rate_line, number + ", the average over the past year");
      return;
    }
    html_text_set(rate_line, number + " on " + date_year_month_day(date));
  }
  function on_arrived() {
    rate_show();
    if (php_typed_last) {
      usd_from_php();
    } else {
      php_from_usd();
    }
  }
  rate_show();
  let today = date_iso_to(new Date()).slice(0, 10);
  await app_receipts_php_per_usd_months_fill(
    [
      {
        date: today,
      },
    ],
    on_arrived,
  );
}
