import { reply_prayer_abundance_of_prayer } from "./reply_prayer_abundance_of_prayer.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_blessings_you_family_church_country } from "./reply_blessings_you_family_church_country.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
export function reply_on_match_prayer_blessings(read) {
  "the same read, answered when it matches with a prayer for an abundance of prayer and then a blessing on the sender, their family, church and country";
  let prayed = reply_prayer_abundance_of_prayer();
  let said = reply_on_match_prayer(read, prayed);
  let blessed = reply_blessings_you_family_church_country();
  let answered = reply_on_match_blessings(said, blessed);
  return answered;
}
