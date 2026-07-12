import { text_combine_today } from "./text_combine_today.mjs";
import { app_reply_how_feel } from "./app_reply_how_feel.mjs";
export function app_reply_how_feel_today() {
  let t = app_reply_how_feel();
  let r = text_combine_today(t);
  return r;
}
