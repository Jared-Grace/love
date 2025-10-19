import { reply_phrase_i_am } from "../../../love/public/src/reply_phrase_i_am.mjs";
import { reply_titles_ministry } from "../../../love/public/src/reply_titles_ministry.mjs";
import { app_message_reply_praise_god } from "../../../love/public/src/app_message_reply_praise_god.mjs";
import { app_message_reply_phrases_single } from "../../../love/public/src/app_message_reply_phrases_single.mjs";
import { app_message_reply_how_r_u } from "../../../love/public/src/app_message_reply_how_r_u.mjs";
import { reply_phrase_you } from "../../../love/public/src/reply_phrase_you.mjs";
import { app_message_reply_greeting } from "../../../love/public/src/app_message_reply_greeting.mjs";
import { reply_word_in } from "../../../love/public/src/reply_word_in.mjs";
import { app_reply_choices_glory } from "../../../love/public/src/app_reply_choices_glory.mjs";
import { reply_choice_output } from "../../../love/public/src/reply_choice_output.mjs";
import { app_reply_choices_will_done_fragment } from "../../../love/public/src/app_reply_choices_will_done_fragment.mjs";
import { app_reply_pray_response } from "../../../love/public/src/app_reply_pray_response.mjs";
import { app_reply_choices_name } from "../../../love/public/src/app_reply_choices_name.mjs";
import { prayer_blessing } from "../../../love/public/src/prayer_blessing.mjs";
import { app_reply_choices_location } from "../../../love/public/src/app_reply_choices_location.mjs";
import { app_reply_choices_give } from "../../../love/public/src/app_reply_choices_give.mjs";
import { reply_sequence_output } from "../../../love/public/src/reply_sequence_output.mjs";
import { reply_on_match_output_add } from "../../../love/public/src/reply_on_match_output_add.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { reply_roads } from "../../../love/public/src/reply_roads.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { reply_names } from "../../../love/public/src/reply_names.mjs";
import { reply_choice_optional } from "../../../love/public/src/reply_choice_optional.mjs";
import { reply_sequence_optional } from "../../../love/public/src/reply_sequence_optional.mjs";
import { reply_cities } from "../../../love/public/src/reply_cities.mjs";
import { reply_once_or_more } from "../../../love/public/src/reply_once_or_more.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_countries } from "./reply_countries.mjs";
export function app_message_reply_choices() {
  marker("1");
  let greeting = app_message_reply_greeting();
  let hru = app_message_reply_how_r_u();
  let phrases_single = app_message_reply_phrases_single();
  let praise_god = app_message_reply_praise_god();
  let r_cities = reply_cities();
  let r_countries = reply_countries();
  let iam = reply_phrase_i_am();
  let titles = reply_titles_ministry();
  let iam2 = reply_phrase_i_am();
  let titles2 = reply_titles_ministry();
  let o_n = reply_optional("n");
  let o_a_an = reply_sequence_optional(["a", o_n]);
  let title = reply_sequence([iam2, o_a_an, titles2]);
  let item3 = prayer_blessing("your ministry");
  let minister = reply_on_match_output(title, item3);
  let item4 = app_reply_choices_name();
  let names = reply_names();
  let names_once_or_more = reply_once_or_more(names);
  let iam_titled_name = reply_sequence_output(
    [iam, titles, names_once_or_more],
    item4,
  );
  let n = reply_word_in();
  let fn18 = reply_optional(n);
  let item2 = app_reply_choices_location();
  let fn27 = reply_choice([iam, iam_titled_name]);
  let fn19 = reply_sequence_output(
    [fn27, "from", r_cities, fn18, r_countries],
    item2,
  );
  let fn25 = reply_optional("ing");
  let requesting = reply_sequence(["request", fn25]);
  const us = "us";
  let o_us = reply_optional(us);
  let fn14 = reply_sequence_optional(["according", "to"]);
  let according_to_gods_will = reply_sequence([fn14, "god's", "will"]);
  let item = app_reply_choices_give();
  let you = reply_phrase_you();
  let fn5 = reply_sequence_output(
    [
      iam,
      requesting,
      you,
      "to",
      "support",
      o_us,
      n,
      "ministry",
      according_to_gods_will,
    ],
    item,
  );
  let pray_request = app_reply_choices_will_done_fragment();
  let item5 = app_reply_pray_response(pray_request);
  let fn12 = reply_sequence_output(
    ["come", "and", "fellowship", "with", us, according_to_gods_will],
    item5,
  );
  let thank_you = reply_sequence(["thank", "you"]);
  let item6 = app_reply_choices_glory();
  let thanks = reply_choice_output(["thanks", thank_you], item6);
  let d = digits();
  let rc_digits = reply_choice(d);
  let digits_oom = reply_once_or_more(rc_digits);
  let r_roads = reply_roads();
  let fn24 = reply_sequence(["contact", digits_oom, r_roads, r_cities]);
  let cannot_middle = reply_choice_optional(["'", "no"]);
  let fn20 = reply_sequence(["can", cannot_middle, "t"]);
  function lambda(filtered, u) {
    function lambda2(possibility) {
      let { data, tokens } = possibility;
      let { before, after } = object_property_get(data, u);
      const sliced = list_slice(tokens, before, after);
      let quote = list_join_empty(sliced);
      reply_on_match_output_add(
        possibility,
        "If you want, please change the wording of what you said and send me another message. Here is what you said: ",
      );
      reply_on_match_output_add(possibility, quote);
    }
    each(filtered, lambda2);
  }
  let matcher = reply_on_match(fn20, lambda);
  let choices_main = reply_choice([
    hru,
    greeting,
    phrases_single,
    praise_god,
    minister,
    fn19,
    fn5,
    fn12,
    thanks,
    fn24,
    matcher,
  ]);
  let room = reply_once_or_more(choices_main);
  let last = reply_last();
  let r = reply_sequence([room, last]);
  return r;
}
