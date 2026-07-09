import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { reply_phrase_jesus } from "../../../love/public/src/reply_phrase_jesus.mjs";
export function app_message_reply_jesus() {
  let phrase_jesus = reply_phrase_jesus();
  let fn = reply_on_match_output(phrase_jesus, "✝️ Jesus is Lord! 👑");
  return fn;
}
