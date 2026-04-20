import { app_reply_live } from "../../../love/public/src/app_reply_live.mjs";
import { app_reply_greetings } from "../../../love/public/src/app_reply_greetings.mjs";
export function app_reply_greetings_live() {
  let r = app_reply_greetings() + " " + app_reply_live();
  return r;
}
