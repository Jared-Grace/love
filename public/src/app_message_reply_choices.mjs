import { reply_roads } from "../../../love/public/src/reply_roads.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { reply_names } from "../../../love/public/src/reply_names.mjs";
import { reply_choice_optional } from "../../../love/public/src/reply_choice_optional.mjs";
import { reply_sequence_optional } from "../../../love/public/src/reply_sequence_optional.mjs";
import { reply_cities } from "../../../love/public/src/reply_cities.mjs";
import { reply_once_or_more } from "../../../love/public/src/reply_once_or_more.mjs";
import { app_reply_response_greetings } from "../../../love/public/src/app_reply_response_greetings.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_countries } from "./reply_countries.mjs";
export function app_message_reply_choices() {
  marker("1");
  let greetings = app_reply_response_greetings();
  let fn8 = reply_optional("o");
  const hello = reply_sequence(["hell", fn8]);
  let hi_word = reply_choice(["hi", hello, "hey"]);
  let fn15 = reply_optional("y");
  let my = reply_sequence_optional(["m", fn15]);
  const dear = "dear";
  const christ = "christ";
  const jesus = "jesus";
  let fn13 = reply_choice([jesus, christ]);
  const sequence = ["in", fn13];
  let fn17 = reply_sequence_optional(sequence);
  const brother = "brother";
  let both = reply_sequence([dear, brother]);
  let fn23 = reply_choice([dear, brother, both]);
  let fn16 = reply_sequence([my, fn23, fn17]);
  const choices = [fn16, my];
  let my_dear_brother = reply_choice_optional(choices);
  let fn3 = reply_sequence([hi_word, my_dear_brother]);
  let fn6 = reply_on_match_output(fn3, greetings);
  let you = reply_sequence(["you", my_dear_brother]);
  let fn = reply_sequence(["how", "are", you]);
  let hru = app_reply_response_how_r_u();
  let fn4 = reply_on_match_output(fn, hru);
  let fn2 = reply_on_match_output(fn13, "✝️ Jesus is Lord! 👑");
  const god = "god";
  let fn7 = reply_on_match_output(god, "❤️‍🔥 God is love! ✝️");
  let fn11 = reply_optional("i");
  let fn10 = reply_sequence(["prai", fn11, "se", god]);
  let r_cities = reply_cities();
  let r_countries = reply_countries();
  let fn21 = reply_optional("i");
  let fn22 = reply_sequence([fn21, "am"]);
  let iam = reply_choice(["i'm", fn22]);
  let titles = reply_choice([
    "apostle",
    "evangelist",
    "pastor",
    "preacher",
    "teacher",
  ]);
  let names = reply_names();
  let names_once_or_more = reply_once_or_more(names);
  let fn9 = reply_optional("a");
  let title = reply_sequence([iam, fn9, titles]);
  let titled_name = reply_sequence_optional([titles, names_once_or_more]);
  let fn18 = reply_optional("in");
  let fn19 = reply_sequence([
    iam,
    titled_name,
    "from",
    r_cities,
    fn18,
    r_countries,
  ]);
  let fn25 = reply_optional("ing");
  let requesting = reply_sequence(["request", fn25]);
  const us = "us";
  let o_us = reply_optional(us);
  let fn14 = reply_sequence_optional(["according", "to"]);
  let according_to_gods_will = reply_sequence([fn14, "god's", "will"]);
  let fn5 = reply_sequence([
    iam,
    requesting,
    you,
    "to",
    "support",
    o_us,
    "in",
    "ministry",
    according_to_gods_will,
  ]);
  let fn12 = reply_sequence([
    "come",
    "and",
    "fellowship",
    "with",
    us,
    according_to_gods_will,
  ]);
  let thank_you = reply_sequence(["thank", "you"]);
  let thanks = reply_choice(["thanks", thank_you]);
  let d = digits();
  let rc_digits = reply_choice(d);
  let digits_oom = reply_once_or_more(rc_digits);
  let r_roads = reply_roads();
  let fn24 = reply_sequence(["contact", digits_oom, r_roads, r_cities]);
  let fn20 = reply_choice(choices2);
  let choices_main = reply_choice([
    fn4,
    fn6,
    fn2,
    fn7,
    fn10,
    title,
    fn19,
    fn5,
    fn12,
    thanks,
    fn24,
  ]);
  let room = reply_once_or_more(choices_main);
  let last = reply_last();
  let r = reply_sequence([room, last]);
  return r;
}
