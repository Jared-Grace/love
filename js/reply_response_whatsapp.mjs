import { text_combine } from "./text_combine.mjs";
import { emoji_phone } from "./emoji_phone.mjs";
export function reply_response_whatsapp() {
  let left = emoji_phone();
  let t = text_combine(left, " WhatsApp: +1-904-314-4052");
  return t;
}
