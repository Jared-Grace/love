import { app_calendar_booking_on_book } from "./app_calendar_booking_on_book.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { html_input_date } from "./html_input_date.mjs";
import { html_input_time } from "./html_input_time.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_calendar_booking(parent, user) {
  "the booking form a visitor fills in to request a preaching visit: their name, the day, the time, and their WhatsApp or Facebook link, written to Firebase and stamped with their signed-in identity so my phone turns it into an alarm";
  let card = app_shared_container(parent);
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
  let link = html_input_text(
    card,
    "wa.me/15551234567 or facebook.com/yourname",
  );
  app_shared_input_style(link);
  let link_hint = html_div_text(
    card,
    "So the preacher can message you to confirm your visit",
  );
  app_shared_text_deemphasized(link_hint);
  let status = html_div_text(card, "");
  app_shared_button_green(card, "Book preaching", on_book);
  async function on_book() {
    let r = await app_calendar_booking_on_book(
      name,
      day,
      time,
      link,
      status,
      user,
    );
    return r;
  }
}
