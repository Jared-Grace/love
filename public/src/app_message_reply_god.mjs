import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { reply_word_god } from "../../../love/public/src/reply_word_god.mjs";
export function app_message_reply_god() {
  const god1 = reply_word_god();
  let fn7 = reply_on_match_output(god1, "❤️‍🔥 God is love! ✝️");
  return fn7;
}
