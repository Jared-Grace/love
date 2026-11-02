import { reply_name_title_optional } from "./reply_name_title_optional.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_choices_name } from "./reply_choices_name.mjs";
export function app_shared_message_reply_iam_titled_name() {
  let response = reply_choices_name();
  let name = reply_name_title_optional();
  let iam = reply_phrase_i_am();
  let iam_titled_name = reply_sequence_output([iam, name], response);
  return iam_titled_name;
}
