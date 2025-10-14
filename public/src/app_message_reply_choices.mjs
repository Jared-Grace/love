import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
export function app_message_reply_choices() {
  marker("1");
  let fn = reply_sequence(["how", "are", "you"]);
  let fn3 = reply_sequence(["hi"]);
  let item = app_reply_response_how_r_u();
  let fn4 = reply_on_match_output(fn, item);
  let fn2 = reply_choice([fn4, fn3]);
  let last = reply_last();
  let fn5 = reply_sequence([fn2, last]);
  function lambda(a) {
    object_property_set(a, "success", true);
  }
  let r = reply_on_match(fn2, lambda);
  return r;
}
