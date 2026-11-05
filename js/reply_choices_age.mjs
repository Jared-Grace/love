import { subtract } from "./subtract.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { date_year } from "./date_year.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_the_servant_of_god_is_first_upper } from "./text_the_servant_of_god_is_first_upper.mjs";
export function reply_choices_age() {
  "The line that says about how old the servant of God is. Only the birth year is kept, so about is the honest word: before the birthday in any year this is one too many.";
  let today = date_today_iso();
  let year = date_year(today);
  let age = subtract(year, 1989);
  let u = text_the_servant_of_god_is_first_upper();
  let t = text_combine_multiple([u, " about ", age, " years old"]);
  return t;
}
