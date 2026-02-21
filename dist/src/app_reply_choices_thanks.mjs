import { emoji_smile } from "../../../love/public/src/emoji_smile.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_choices_thanks() {
  let v2 = emoji_pray() + " Thank you very much! " + emoji_smile();
  return v2;
}
