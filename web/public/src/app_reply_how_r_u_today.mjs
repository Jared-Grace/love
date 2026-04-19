import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_reply_how_r_u } from "../../../love/public/src/app_reply_how_r_u.mjs";
export function app_reply_how_r_u_today() {
  let t2 = app_reply_how_r_u();
  let t = text_combine(t2, " today");
  return t;
}
