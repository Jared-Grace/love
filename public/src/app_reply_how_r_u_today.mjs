import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_reply_how_r_u } from "../../../love/public/src/app_reply_how_r_u.mjs";
export function app_reply_how_r_u_today() {
  let t = app_reply_how_r_u();
  let combined = text_combine(t, " today");
  return t;
}
