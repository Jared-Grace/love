import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { http_json } from "./http_json.mjs";
export async function currency_php_per_usd_date_frankfurter(date) {
  "$plain date";
  "Frankfurter's answer for how many pesos one US dollar bought on one day, written YYYY-MM-DD, asked from this machine.";
  "The site and the shape of the request are fixed here and the day is the only thing a caller chooses, so it can hold a grant once where a curl would have to be read afresh every time. Anything but a day is refused before any request leaves.";
  let day_is = /^\d{4}-\d{2}-\d{2}$/.test(date);
  if (not(day_is)) {
    error_json({
      date,
      hint: "a day is written YYYY-MM-DD",
    });
  }
  let url = "https://api.frankfurter.dev/v2/rate/USD/PHP?date=" + date;
  let answer = await http_json(url);
  return answer;
}
