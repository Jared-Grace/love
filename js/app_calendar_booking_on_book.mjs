import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { not } from "./not.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { booking_send } from "./booking_send.mjs";
import { html_value_set } from "./html_value_set.mjs";
export async function app_calendar_booking_on_book(
  name,
  day,
  time,
  link,
  status,
  user,
) {
  arguments_assert(arguments, 6);
  let name_value = html_value_get(name);
  let day_value = html_value_get(day);
  let time_value = html_value_get(time);
  let link_value = html_value_get(link);
  let named = text_empty_not_is(name_value);
  let dayed = text_empty_not_is(day_value);
  let timed = text_empty_not_is(time_value);
  let linked = text_empty_not_is(link_value);
  let ready = named && dayed && timed && linked;
  if (not(ready)) {
    html_text_set(
      status,
      "Please fill in your name, the day, the time, and your link",
    );
    return;
  }
  let parts = text_split(time_value, ":");
  let first = list_first(parts);
  let second = list_second(parts);
  let booking = {
    label: text_combine_multiple(["Preaching with ", name_value]),
    date: day_value,
    hour: Number(first),
    minute: Number(second),
    link: link_value,
    when: date_now_iso(),
    uid: user.uid,
    email: user.email,
  };
  await booking_send(booking);
  html_value_set(name, "");
  html_value_set(day, "");
  html_value_set(time, "");
  html_value_set(link, "");
  let text = text_combine_multiple([
    "Thank you, ",
    name_value,
    " — you are booked for ",
    day_value,
    " at ",
    time_value,
  ]);
  html_text_set(status, text);
}
