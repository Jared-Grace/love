import { reply_blessings_you_family_church_country } from "./reply_blessings_you_family_church_country.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  let you = reply_phrase_you();
  let thanked = reply_sequence_outputs(["god", "bless", you], [thanks]);
  let blessed = reply_blessings_you_family_church_country();
  let said = reply_on_match_blessings(thanked, blessed);
  return said;
}
