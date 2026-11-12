import { reply_sequence } from "./reply_sequence.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
import { reply_at_most_alphanumeric } from "./reply_at_most_alphanumeric.mjs";
export function reply_tiktok_link() {
  "Somebody sending a TikTok link and nothing else. It gets a prayer back: that the word of the LORD go forth, and that the LORD bless all Christian videos.";
  "★ THIS IS THE SHAPE A REAL MESSAGE USED AND NO OTHER: the short vt.tiktok.com address and its code. Other link shapes are added when somebody really sends them, not guessed at here.";
  "★ THE VIDEO IS NOT WATCHED, so the prayer blesses Christian videos, never this one by name: blessing it would vouch for what nobody here has seen.";
  "The punctuation is gone by the time a rule reads a message, so the address is its words run together and the code is any letters and digits after them.";
  let code = reply_at_most_alphanumeric(20);
  let link = reply_sequence(["https", "vt", "tiktok", "com", code]);
  let forth = "May the word of the LORD go forth!";
  let prayed = reply_on_match_prayer(link, forth);
  let blessed = ["all Christian videos"];
  let said = reply_on_match_blessings(prayed, blessed);
  return said;
}
