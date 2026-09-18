import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { app_message_reply_iam_titled_name } from "./app_message_reply_iam_titled_name.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_countries } from "./reply_countries.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_choices_location } from "./reply_choices_location.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
export function app_message_reply_from_city_country() {
  "Answers a message whose writer says where they are from - `i am from pakistan`, `i am pastor john from kenya` - with the fixed sentence giving our own location back.";
  "★ THE COUNTRY IS THE WHOLE OF WHERE, BECAUSE A COUNTRY IS THE ONLY PART OF AN ADDRESS THAT CAN BE WRITTEN DOWN IN FULL. Every country there is comes to about three hundred words counting the other names people use, and the list is complete by construction, so asking for one costs nothing anybody would have wanted. Towns are not a list: the ones people actually write from run to tens of thousands and no source here could check a single entry.";
  "There was a town slot, and it held two words - the home towns of two real people who had written in. Beside a name, a street and a country that were equally short, those two words were part of an identification sitting in a public repository, and no honest list could have been grown around them to hide them in.";
  "So the town is gone rather than widened, and the cost is named rather than hidden: `i am from ***REMOVED*** kenya` is no longer recognised by this rule, while `i am from kenya` now is - which it was not before, and which is the commonest shape of the two. What is never lost is a word of the reply, because the reply is a fixed sentence about where we are and never repeats back where they are.";
  "What this deliberately does NOT do is leave a slot open to any run of letters to catch the town again. A slot that matches anything matches the wrong thing somewhere, and an unrecognised town is the cheapest possible thing to be wrong about - the rule simply declines, and another rule may answer instead.";
  let iam = reply_phrase_i_am();
  let iam_titled_name = app_message_reply_iam_titled_name();
  let n = reply_word_in();
  let r_countries = reply_countries();
  let o_n = reply_optional(n);
  let item = reply_choices_location();
  let iam_o_titled_name = reply_choice([iam, iam_titled_name]);
  let from_country = reply_sequence_output(
    [iam_o_titled_name, "from", o_n, r_countries],
    item,
  );
  return from_country;
}
