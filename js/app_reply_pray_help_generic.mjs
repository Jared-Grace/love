import { prayer_end } from "./prayer_end.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_pray_help_generic(h) {
  let v = text_combine_multiple(["God help ", h, prayer_end()]);
  return v;
}
