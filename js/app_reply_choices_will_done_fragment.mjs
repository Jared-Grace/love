import { emoji_dove } from "./emoji_dove.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_choices_will_done_fragment() {
  let v = text_combine("have His will done! ", emoji_dove());
  return v;
}
