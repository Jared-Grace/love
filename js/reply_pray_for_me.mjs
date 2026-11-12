import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_word_to } from "./reply_word_to.mjs";
import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_prayer_abundance_of_prayer } from "./reply_prayer_abundance_of_prayer.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_blessings_you_family_church_country } from "./reply_blessings_you_family_church_country.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
export function reply_pray_for_me() {
  let o_and = reply_optional("and");
  let you = reply_phrase_you();
  let to = reply_word_to();
  let dear = reply_phrase_my_dear_brother();
  let asked = reply_sequence([
    o_and,
    "i",
    "ask",
    you,
    to,
    "pray",
    "for",
    "me",
    dear,
  ]);
  let prayed = reply_prayer_abundance_of_prayer();
  let said = reply_on_match_prayer(asked, prayed);
  let blessed = reply_blessings_you_family_church_country();
  let answered = reply_on_match_blessings(said, blessed);
  return answered;
}
