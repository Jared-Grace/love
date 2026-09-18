import { fn_name } from "./fn_name.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { app_message_reply_iam_titled_name } from "./app_message_reply_iam_titled_name.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_countries } from "./reply_countries.mjs";
import { reply_cities } from "./reply_cities.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_choices_location } from "./reply_choices_location.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
export function app_message_reply_from_city_country() {
  "Answers a message whose writer says where they are from - `i am from ***REMOVED*** pakistan`, `i am pastor john from kenya` - with the fixed sentence giving our own location back.";
  "★ THE TOWN IS OPTIONAL AND THE COUNTRY IS NOT, BECAUSE ONLY ONE OF THE TWO CAN BE WRITTEN DOWN IN FULL. Every country there is comes to about two hundred and sixty words and the list is complete by construction, so requiring one costs nothing a person would ever have wanted. There is no matching list of towns and there cannot be: the towns people actually write from run to tens of thousands and no source in this repo could check a single entry, so a required town turns the whole rule off for everybody whose town is not one of the few already written down.";
  "Making it optional is what lets `i am from kenya` be answered, which is the commonest shape of all and did not match before. A town that IS on the list still matches and still reads naturally.";
  ("What this deliberately does NOT do is leave the slot open to any run of letters. A slot that matches anything matches the wrong thing somewhere, and an unknown town is the cheapest possible thing to be wrong about - the reply never repeats the town back, so nothing is lost by failing to recognise it beyond this one rule declining to answer. `",
    fn_name("reply_matchers_open_gate_run"),
    "` holds that line for the whole reply grammar.");
  let iam = reply_phrase_i_am();
  let iam_titled_name = app_message_reply_iam_titled_name();
  let n = reply_word_in();
  let r_countries = reply_countries();
  let r_cities = reply_cities();
  let o_cities = reply_optional(r_cities);
  let o_n = reply_optional(n);
  let item = reply_choices_location();
  let iam_o_titled_name = reply_choice([iam, iam_titled_name]);
  let from_city_country = reply_sequence_output(
    [iam_o_titled_name, "from", o_cities, o_n, r_countries],
    item,
  );
  return from_city_country;
}
