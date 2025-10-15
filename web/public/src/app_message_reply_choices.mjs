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
  let my = reply_sequence(["m", fn15]);
  let fn14 = reply_optional(my);
  const dear = "dear";
  let fn18 = reply_sequence(["in", "christ"]);
  let fn17 = reply_optional(fn18);
  const brother = "brother";
  let both = reply_sequence([dear, brother]);
  let fn23 = reply_choice([dear, brother, both]);
  let fn16 = reply_sequence([fn14, fn23, fn17]);
  let fn12 = reply_choice([fn16, my]);
  let fn9 = reply_optional(fn12);
  let fn3 = reply_sequence([hi_word, fn9]);
  let fn6 = reply_on_match_output(fn3, greetings);
  let fn = reply_sequence(["how", "are", "you"]);
  let hru = app_reply_response_how_r_u();
  let fn4 = reply_on_match_output(fn, hru);
  let fn2 = reply_on_match_output("jesus", "✝️ Jesus is Lord! 👑");
  const god = "god";
  let fn7 = reply_on_match_output(god, "❤️‍🔥 God is love! ✝️");
  let fn11 = reply_optional("i");
  let fn10 = reply_sequence(["prai", fn11, "se", god]);
  let fn20 = reply_cities();
  let countries = reply_countries();
  let fn21 = reply_optional("i");
  let fn22 = reply_sequence([fn21, "am"]);
  let iam = reply_choice(["i'm", fn22]);
  let fn19 = reply_sequence([iam, "from", fn20, "in", countries]);
  let rc2 = reply_choice([
    "apostle",
    "evangelist",
    "pastor",
    "preacher",
    "teacher",
  ]);
  let rs = reply_sequence([iam, rc2]);
  let choices_main = reply_choice([fn4, fn6, fn2, fn7, fn10, rs]);
  let room = reply_once_or_more(choices_main);
  let last = reply_last();
  let fn5 = reply_sequence([room, last]);
  return fn5;
}
