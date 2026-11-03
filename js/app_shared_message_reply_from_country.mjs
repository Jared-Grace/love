import { reply_cities } from "./reply_cities.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { app_shared_message_reply_iam_titled_name } from "./app_shared_message_reply_iam_titled_name.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_countries } from "./reply_countries.mjs";
import { reply_choices_location } from "./reply_choices_location.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
export function app_shared_message_reply_from_country() {
  "Answers a message whose writer says where they are from - `i am from pakistan`, `i am pastor john from kenya` - with the fixed sentence giving our own location back.";
  "★ THE COUNTRY IS THE WHOLE OF WHERE, BECAUSE A COUNTRY IS THE ONLY PART OF AN ADDRESS THAT CAN BE WRITTEN DOWN IN FULL. Every country there is comes to about three hundred words counting the other names people use, and the list is complete by construction, so asking for one costs nothing anybody would have wanted. Towns are not a list: the ones people actually write from run to tens of thousands and no source here could check a single entry.";
  "There was a town slot, and it held two words - the home towns of two real people who had written in. Beside a name, a street and a country that were equally short, those two words were part of an identification sitting in a public repository, and no honest list could have been grown around them to hide them in.";
  "So no town from a message is written here and none is ever added. The shape is from, then optionally a city from a public list and the word in, then a country. A small town stays unmatched and goes to a human, which is the right answer to it. A slot open to any run of letters was tried and took a whole cry for help as a town: `i am from the hospital my wife died i need prayer i am in kenya` got only this sentence back, and so never reached anybody. A closed list cannot do that.";
  let iam = reply_phrase_i_am();
  let iam_titled_name = app_shared_message_reply_iam_titled_name();
  let n = reply_word_in();
  let r_countries = reply_countries();
  let cities = reply_cities();
  let o_city_in = reply_sequence_optional([cities, n]);
  let item = reply_choices_location();
  let iam_o_titled_name = reply_choice([iam, iam_titled_name]);
  let from_country = reply_sequence_output(
    [iam_o_titled_name, "from", o_city_in, r_countries],
    item,
  );
  return from_country;
}
