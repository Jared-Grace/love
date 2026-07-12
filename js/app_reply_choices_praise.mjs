import { emojis_sing_wrap } from "./emojis_sing_wrap.mjs";
export function app_reply_choices_praise() {
  let lyrics = "Praise the LORD our God in the name of Jesus Christ!";
  let v = emojis_sing_wrap(lyrics);
  return v;
}
