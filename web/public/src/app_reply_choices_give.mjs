import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_reply_choices_give() {
  let t = text_combine(
    emoji_pray(),
    " Sorry, I have nothing that I can give you at this time. According to the desire of the LORD: May the LORD provide and may the LORD lead you to someone who will abundantly provide whatever you ask the same day you ask.",
  );
  return t;
}
