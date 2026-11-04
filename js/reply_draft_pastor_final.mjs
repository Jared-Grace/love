import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { app_shared_message_reply_iam_titled_name } from "./app_shared_message_reply_iam_titled_name.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_cities } from "./reply_cities.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_countries } from "./reply_countries.mjs";
import { reply_choices_location } from "./reply_choices_location.mjs";
import { reply_phrase_according_to_gods_will } from "./reply_phrase_according_to_gods_will.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_on_match_outputs_codes_multiple } from "./reply_on_match_outputs_codes_multiple.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_choice_output } from "./reply_choice_output.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { reply_contact_address } from "./reply_contact_address.mjs";
import { reply_cant_or_cannot } from "./reply_cant_or_cannot.mjs";
import { reply_on_match_capture } from "./reply_on_match_capture.mjs";
import { app_shared_message_reply_choices_lambda } from "./app_shared_message_reply_choices_lambda.mjs";
import { app_shared_message_reply_how_r_u } from "./app_shared_message_reply_how_r_u.mjs";
import { app_shared_message_reply_greeting } from "./app_shared_message_reply_greeting.mjs";
import { app_shared_message_reply_phrases_single } from "./app_shared_message_reply_phrases_single.mjs";
import { app_shared_message_reply_praise_god } from "./app_shared_message_reply_praise_god.mjs";
import { app_shared_message_reply_minister } from "./app_shared_message_reply_minister.mjs";
import { app_shared_message_reply_asks } from "./app_shared_message_reply_asks.mjs";
import { reply_cheapest_per_position } from "./reply_cheapest_per_position.mjs";
import { reply_prayers_closed } from "./reply_prayers_closed.mjs";
import { reply_outputs_mapped } from "./reply_outputs_mapped.mjs";
import { reply_last } from "./reply_last.mjs";
import { list_unique } from "./list_unique.mjs";
export function reply_draft_pastor_final() {
  let item = reply_choice(["akhtar", "dilshad", "khan", "nawaz", "parveen"]);
  let extra = reply_once_or_more(item);
  let iam_titled = app_shared_message_reply_iam_titled_name();
  let fn = reply_optional(extra);
  let iam_more = reply_sequence([iam_titled, fn]);
  let iam = reply_phrase_i_am();
  let iam_o_titled_name = reply_choice([iam, iam_more]);
  let item2 = reply_word_in();
  let o_in = reply_optional(item2);
  let choice = reply_cities();
  let o_city = reply_sequence_optional([choice, o_in]);
  let countries = reply_countries();
  let output = reply_choices_location();
  let from_country = reply_sequence_output(
    [iam_o_titled_name, "from", o_city, countries],
    output,
  );
  let item3 = reply_phrase_according_to_gods_will();
  let o_according = reply_optional(item3);
  let fn2 = reply_sequence_optional(["come", "and"]);
  let v = reply_word_us();
  let s_visit = reply_sequence([fn2, "fellowship", "with", v, o_according]);
  let rule = reply_on_match_outputs_codes_multiple(s_visit, [], ["todo()"]);
  let line = reply_prayer_will_done();
  let visit_step = reply_on_match_prayer(rule, line);
  let you = reply_phrase_you();
  let fn3 = reply_sequence(["thank", you]);
  let item4 = reply_choices_glory();
  let thanks = reply_choice_output(["thanks", fn3], item4);
  let contact = reply_contact_address();
  let cannot = reply_cant_or_cannot();
  function lambda(f, u) {
    let r = app_shared_message_reply_choices_lambda(f, u);
    return r;
  }
  let matcher = reply_on_match_capture(cannot, lambda);
  let hru = app_shared_message_reply_how_r_u();
  let greetings = app_shared_message_reply_greeting();
  let phrases_single = app_shared_message_reply_phrases_single();
  let fn10 = app_shared_message_reply_praise_god();
  let ministers = app_shared_message_reply_minister();
  let asks = app_shared_message_reply_asks();
  let main = reply_choice([
    hru,
    greetings,
    phrases_single,
    fn10,
    ministers,
    from_country,
    asks,
    visit_step,
    thanks,
    contact,
    matcher,
  ]);
  let item5 = reply_cheapest_per_position(main);
  let room = reply_once_or_more(item5);
  let last = reply_last();
  let rule2 = reply_sequence([room, last]);
  let rule3 = reply_outputs_mapped(rule2, list_unique);
  let closed = reply_prayers_closed(rule3);
  return closed;
}
