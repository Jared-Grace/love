import { app_reply_live } from "../../../love/public/src/app_reply_live.mjs";
import { app_reply_greetings } from "../../../love/public/src/app_reply_greetings.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_greetings_live() {
  let r = text_combine_multiple([app_reply_greetings(), " ", app_reply_live()]);
  return r;
}
