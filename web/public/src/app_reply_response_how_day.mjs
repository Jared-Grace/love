import { app_reply_response_how_r_u_skip_before } from "../../../love/public/src/app_reply_response_how_r_u_skip_before.mjs";
import { string_first_lower_to } from "../../../love/public/src/string_first_lower_to.mjs";
import { emoji_ok } from "../../../love/public/src/emoji_ok.mjs";
export function app_reply_response_how_day(s2) {
  let s = app_reply_response_how_r_u_skip_before();
  let v2 =
    emoji_ok() +
    " The day of the " +
    string_first_lower_to(s) +
    " today is one day closer to the return of Jesus than yesterday!";
  return v2;
}
