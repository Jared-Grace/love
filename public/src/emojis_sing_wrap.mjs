import { emoji_voice } from "../../../love/public/src/emoji_voice.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function emojis_sing_wrap(lyrics) {
  let v = text_combine_multiple(["🎵 ", emoji_voice(), " ", lyrics, " 🎶"]);
  return v;
}
