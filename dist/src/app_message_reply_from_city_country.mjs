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
  let iam2 = reply_phrase_i_am();
  let iam_titled_name = app_message_reply_iam_titled_name();
  let n2 = reply_word_in();
  let r_countries2 = reply_countries();
  let r_cities2 = reply_cities();
  let o_n = reply_optional(n2);
  let item2 = app_reply_choices_location();
  let iam_o_titled_name = reply_choice([iam2, iam_titled_name]);
  let from_city_country = reply_sequence_output(
    [iam_o_titled_name, "from", r_cities2, o_n, r_countries2],
    item2,
  );
  return from_city_country;
}
