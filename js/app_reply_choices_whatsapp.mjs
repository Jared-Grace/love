import { emoji_phone } from "./emoji_phone.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_choices_whatsapp() {
  let r = text_combine(emoji_phone(), " WhatsApp");
  return r;
}
