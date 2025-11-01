import { emoji_voice } from "../../../love/public/src/emoji_voice.mjs";
export function emojis_sing_wrap(lyrics) {
  let v = "🎵 " + emoji_voice() + " " + lyrics + " 🎶";
  return v;
}
