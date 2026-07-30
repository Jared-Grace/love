import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function g_prayers_believer(pronouns) {
  "PETITION strings for praying WITH a new believer (after they convert), gendered by their own pronouns so each reads for a real person — 'strengthen HIS new faith', 'fill HER with Your peace'. each becomes 'God, please <petition>, Amen' via g_prayer_petition. these are requests for the person's WALK (growth, the Spirit, sharing), not intercession for an unbeliever — that difference is the whole point of praying with someone who now believes.";
  let object = property_get(pronouns, "object");
  let possessive = property_get(pronouns, "possessive");
  let petitions = [
    text_combine_multiple(["strengthen ", possessive, " new faith in You"]),
    text_combine_multiple(["help ", object, " grow closer to You each day"]),
    text_combine_multiple(["fill ", object, " with Your Spirit and Your peace"]),
    text_combine_multiple(["use ", object, " to share Your love with others"]),
    text_combine_multiple(["keep ", object, " close to You always"]),
  ];
  return petitions;
}
