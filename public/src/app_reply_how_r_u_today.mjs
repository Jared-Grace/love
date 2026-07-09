import { text_combine_today } from "../../../love/public/src/text_combine_today.mjs";
import { app_reply_how_r_u } from "../../../love/public/src/app_reply_how_r_u.mjs";
export function app_reply_how_r_u_today() {
  let t = app_reply_how_r_u();
  let r = text_combine_today(t);
  return r;
}
