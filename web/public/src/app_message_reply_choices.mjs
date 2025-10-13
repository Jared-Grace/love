import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function app_message_reply_choices() {
  marker("1");
  let item = app_reply_response_how_r_u();
  let fn = reply_sequence(["how", "are", "you"]);
  let fn3 = reply_sequence(["hi"]);
  let fn2 = reply_choice([fn, fn3]);
  function lambda(a) {
    let outputs = object_property_get(a, "outputs");
    list_add(outputs, item);
    object_property_set(a, "success", true);
  }
  let r = reply_on_match(fn2, lambda);
  return r;
}
