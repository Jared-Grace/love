import { reply_sequence_output } from "../../../love/public/src/reply_sequence_output.mjs";
import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { app_reply_choices_location } from "../../../love/public/src/app_reply_choices_location.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_cities } from "../../../love/public/src/reply_cities.mjs";
import { reply_countries } from "../../../love/public/src/reply_countries.mjs";
import { reply_word_in } from "../../../love/public/src/reply_word_in.mjs";
import { app_message_reply_iam_titled_name } from "../../../love/public/src/app_message_reply_iam_titled_name.mjs";
import { reply_phrase_i_am } from "../../../love/public/src/reply_phrase_i_am.mjs";
export function app_message_reply_from_city_country() {
  let iam = reply_phrase_i_am();
  let iam_titled_name = app_message_reply_iam_titled_name();
  let n = reply_word_in();
  let r_countries = reply_countries();
  let r_cities = reply_cities();
  let o_n = reply_optional(n);
  let item = app_reply_choices_location();
  let iam_o_titled_name = reply_choice([iam, iam_titled_name]);
  let from_city_country = reply_sequence_output(
    [iam_o_titled_name, "from", r_cities, o_n, r_countries],
    item,
  );
  return from_city_country;
}
