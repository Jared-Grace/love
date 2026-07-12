import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_response_greetings() {
  let greetings = text_combine_multiple([
    emoji_wave(),
    emoji_smile(),
    " Greetings in the name of our LORD Jesus Christ! ",
    emoji_cross(),
  ]);
  return greetings;
}
