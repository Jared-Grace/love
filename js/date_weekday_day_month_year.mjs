import { date_from_iso } from "./date_from_iso.mjs";
export function date_weekday_day_month_year(iso, locale) {
  "a 'YYYY-MM-DD' date written out in full with the day of the week in front of it, in the language asked for - 'Thursday, 3 September 2026'";
  "The day of the week is the half a reader actually feels, so it stands first. A bare number tells somebody which square of a calendar they are on; the weekday tells them which day of their own life it is.";
  "The language is handed in rather than read from anywhere, because a date is written by whoever is reading it and this knows nothing about who that is.";
  let d = date_from_iso(iso);
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  let label = d.toLocaleDateString(locale, options);
  return label;
}
