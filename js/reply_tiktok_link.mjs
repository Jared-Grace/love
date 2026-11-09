import { reply_at_most_alphanumeric } from "./reply_at_most_alphanumeric.mjs";
import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { prayer_wrap } from "./prayer_wrap.mjs";
import { reply_sequence_outputs } from "./reply_sequence_outputs.mjs";
export function reply_tiktok_link() {
  "Somebody sending a TikTok link and nothing else. It gets a prayer back: that the word of the LORD go forth, and that the LORD bless all Christian videos.";
  "★ THIS IS THE SHAPE A REAL MESSAGE USED AND NO OTHER: the short vt.tiktok.com address and its code. Other link shapes are added when somebody really sends them, not guessed at here.";
  "★ THE VIDEO IS NOT WATCHED, so the prayer blesses Christian videos, never this one by name: blessing it would vouch for what nobody here has seen.";
  "The punctuation is gone by the time a rule reads a message, so the address is its words run together and the code is any letters and digits after them.";
  let code = reply_at_most_alphanumeric(20);
  let forth = "May the word of the LORD go forth! ";
  let videos = text_may_the_lord_exclamation("bless all Christian videos");
  let request = text_combine_multiple([forth, videos]);
  let prayer = prayer_wrap(request);
  let said = reply_sequence_outputs(
    ["https", "vt", "tiktok", "com", code],
    [prayer],
  );
  return said;
}
