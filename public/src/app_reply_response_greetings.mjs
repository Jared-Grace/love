import { emoji_cross } from "../../../love/public/src/emoji_cross.mjs";
import { emoji_smile } from "../../../love/public/src/emoji_smile.mjs";
import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
export function app_reply_response_greetings() {
  let v2 =
    emoji_wave() +
    emoji_smile() +
    " Greetings in the name of our LORD Jesus Christ! " +
    emoji_cross();
  return v2;
}
