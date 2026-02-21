import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
export function app_message_reply_trust() {
  let fn = reply_on_match_output("trust", "✝️ Love always trusts! 🙏");
  return fn;
}
