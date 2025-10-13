import { function_rename_suffix_add } from "../../../love/public/src/function_rename_suffix_add.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { reply_choice } from "./reply_choice.mjs";
export async function app_message_reply_choices() {
  async function lambda(a) {
    let outputs = object_property_get(a, "outputs");
    let item = app_reply_response_how_r_u();
    list_add(outputs, item);
    object_property_set(a, "success", true);
  }
  let fn = reply_sequence(["how", "are", "you"]);
  let v = await function_rename_suffix_add(f_name_before, suffix);
  let fn2 = reply_choice([fn]);
  let r = reply_on_match(fn, lambda);
  return r;
}
