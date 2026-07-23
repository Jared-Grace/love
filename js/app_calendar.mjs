import { property_get } from "./property_get.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { html_input_date } from "./html_input_date.mjs";
import { html_input_time } from "./html_input_time.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { booking_send } from "./booking_send.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
export function app_calendar(context) {
  "public page where someone books a preaching visit: their name, the day, the time, and their WhatsApp or Facebook link, written to Firebase as a booking my phone turns into an alarm";
  let root = property_get(context, "root");
  html_mobile_default(context);
  let card = app_shared_container(root);
  html_div_text(card, "Book a preaching visit");
  html_div_text(card, "Your name");
  let name = html_input_text(card, "Your name");
  app_shared_input_style(name);
  html_div_text(card, "Day");
  let day = html_input_date(card);
  app_shared_input_style(day);
  html_div_text(card, "Time");
  let time = html_input_time(card);
  app_shared_input_style(time);
  html_div_text(card, "Your WhatsApp or Facebook link");
  let link = html_input_text(card, "wa.me/15551234567 or facebook.com/yourname");
  app_shared_input_style(link);
  let status = html_div_text(card, "");
  app_shared_button_green(card, "Book preaching", on_book);
  async function on_book() {
    let name_value = html_value_get(name);
    let day_value = html_value_get(day);
    let time_value = html_value_get(time);
    let link_value = html_value_get(link);
    let named = text_empty_not_is(name_value);
    let dayed = text_empty_not_is(day_value);
    let timed = text_empty_not_is(time_value);
    let linked = text_empty_not_is(link_value);
    let ready = named && dayed && timed && linked;
    if (!ready) {
      html_text_set(
        status,
        "Please fill in your name, the day, the time, and your link",
      );
      return;
    }
    let parts = text_split(time_value, ":");
    let booking = {
      label: text_combine_multiple(["Preaching with ", name_value]),
      date: day_value,
      hour: Number(list_first(parts)),
      minute: Number(list_second(parts)),
      link: link_value,
      when: date_now_iso(),
    };
    await booking_send(booking);
    html_value_set(name, "");
    html_value_set(day, "");
    html_value_set(time, "");
    html_value_set(link, "");
    html_text_set(
      status,
      text_combine_multiple([
        "Thank you, ",
        name_value,
        " — you are booked for ",
        day_value,
        " at ",
        time_value,
      ]),
    );
  }
}
