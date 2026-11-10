import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_sequence_outputs } from "./reply_sequence_outputs.mjs";
export function reply_god_bless_you_thanked() {
  "Somebody saying God bless you, with or without brother after it. It gets thanks for the blessing back, and then the longer blessing on them, their family, their church and their country.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS. Other ways of blessing are added when somebody really says them, not guessed at here.";
  let pray = emoji_pray();
  let smile = emoji_smile();
  let thanks = text_combine_multiple([
    pray,
    " Thank you for the blessing! ",
    smile,
  ]);
  let blessing = prayer_blessing_expand();
  let you = reply_phrase_you();
  let said = reply_sequence_outputs(["god", "bless", you], [thanks, blessing]);
  return said;
}
