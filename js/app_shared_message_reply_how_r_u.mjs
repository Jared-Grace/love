import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_response_how_r_u } from "./reply_response_how_r_u.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function app_shared_message_reply_how_r_u() {
  let dear = reply_phrase_my_dear_brother();
  let doing = reply_optional("doing");
  let fn = reply_sequence(["how", "are", "you", doing, dear]);
  let hru_response = reply_response_how_r_u();
  let hru = reply_on_match_output(fn, hru_response);
  return hru;
}
