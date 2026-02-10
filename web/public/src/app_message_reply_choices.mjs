import { reply_on_match_output_code } from "../../../love/public/src/reply_on_match_output_code.mjs";
import { reply_on_match_capture } from "../../../love/public/src/reply_on_match_capture.mjs";
import { reply_on_match_output_add_multiple } from "../../../love/public/src/reply_on_match_output_add_multiple.mjs";
import { reply_sequence_optional } from "../../../love/public/src/reply_sequence_optional.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { visit } from "../../../love/public/src/visit.mjs";
import { app_message_reply_give } from "../../../love/public/src/app_message_reply_give.mjs";
import { reply_word_us } from "../../../love/public/src/reply_word_us.mjs";
import { reply_phrase_according_to_gods_will } from "../../../love/public/src/reply_phrase_according_to_gods_will.mjs";
import { app_message_reply_from_city_country } from "../../../love/public/src/app_message_reply_from_city_country.mjs";
import { app_message_reply_minister } from "../../../love/public/src/app_message_reply_minister.mjs";
import { app_message_reply_praise_god } from "../../../love/public/src/app_message_reply_praise_god.mjs";
import { app_message_reply_phrases_single } from "../../../love/public/src/app_message_reply_phrases_single.mjs";
import { app_message_reply_how_r_u } from "../../../love/public/src/app_message_reply_how_r_u.mjs";
import { reply_phrase_you } from "../../../love/public/src/reply_phrase_you.mjs";
import { app_message_reply_greeting } from "../../../love/public/src/app_message_reply_greeting.mjs";
import { app_reply_choices_glory } from "../../../love/public/src/app_reply_choices_glory.mjs";
import { reply_choice_output } from "../../../love/public/src/reply_choice_output.mjs";
import { app_reply_choices_will_done_fragment } from "../../../love/public/src/app_reply_choices_will_done_fragment.mjs";
import { app_reply_pray_response } from "../../../love/public/src/app_reply_pray_response.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { reply_roads } from "../../../love/public/src/reply_roads.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { reply_choice_optional } from "../../../love/public/src/reply_choice_optional.mjs";
import { reply_cities } from "../../../love/public/src/reply_cities.mjs";
import { reply_once_or_more } from "../../../love/public/src/reply_once_or_more.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
export function app_message_reply_choices() {
  let greeting = app_message_reply_greeting();
  let hru = app_message_reply_how_r_u();
  let phrases_single = app_message_reply_phrases_single();
  let praise_god = app_message_reply_praise_god();
  let minister = app_message_reply_minister();
  let from_city_country = app_message_reply_from_city_country();
  let give = app_message_reply_give();
  let according_to_gods_will = reply_phrase_according_to_gods_will();
  let o_according_to_gods_will = reply_optional(according_to_gods_will);
  let o_come_and = reply_sequence_optional(["come", "and"]);
  let pray_request = app_reply_choices_will_done_fragment();
  let will_be_done = app_reply_pray_response(pray_request);
  const us = reply_word_us();
  let s_visit = reply_sequence([
    o_come_and,
    "fellowship",
    "with",
    us,
    o_according_to_gods_will,
  ]);
  let visit = reply_on_match_output_code(s_visit, will_be_done, "todo()");
  let you2 = reply_phrase_you();
  let thank_you = reply_sequence(["thank", you2]);
  let item6 = app_reply_choices_glory();
  let thanks = reply_choice_output(["thanks", thank_you], item6);
  let d = digits();
  let rc_digits = reply_choice(d);
  let digits_oom = reply_once_or_more(rc_digits);
  let r_roads = reply_roads();
  let r_cities = reply_cities();
  let fn24 = reply_sequence(["contact", digits_oom, r_roads, r_cities]);
  let cannot_middle = reply_choice_optional(["'", "no"]);
  let fn20 = reply_sequence(["can", cannot_middle, "t"]);
  function lambda(filtered, u) {
    function lambda2(possibility) {
      let tokens = property_get(possibility, "tokens");
      let data = property_get(possibility, "data");
      let v = property_get(data, u);
      let after = property_get(v, "after");
      let before = property_get(v, "before");
      const sliced = list_slice(tokens, before, after);
      let quote = list_join_empty(sliced);
      reply_on_match_output_add_multiple(possibility, [
        "If you want, please change the wording of what you said and send me another message. Here is what you said: ",
        quote,
      ]);
    }
    each(filtered, lambda2);
  }
  let matcher = reply_on_match_capture(fn20, lambda);
  let choices_main = reply_choice([
    hru,
    greeting,
    phrases_single,
    praise_god,
    minister,
    from_city_country,
    give,
    visit,
    thanks,
    fn24,
    matcher,
  ]);
  let room = reply_once_or_more(choices_main);
  let last = reply_last();
  let r = reply_sequence([room, last]);
  return r;
}
