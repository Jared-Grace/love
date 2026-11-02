import { fn_name } from "./fn_name.mjs";
import { reply_cities_names } from "./reply_cities_names.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_cities() {
  ("One rule that reads the name of any listed city, the same way `",
    fn_name("reply_countries"),
    "` reads a country.");
  let names = reply_cities_names();
  let choice = reply_choice(names);
  return choice;
}
