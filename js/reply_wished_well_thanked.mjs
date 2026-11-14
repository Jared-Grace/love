import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_response_blessing_thanks } from "./reply_response_blessing_thanks.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_blessings_you_family_church_country } from "./reply_blessings_you_family_church_country.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
export function reply_wished_well_thanked() {
  "Somebody wishing the person and their family well, or signing off with Blessings: thanked for the blessing, and blessed back along with their family.";
  "★ BOTH WORDINGS COME FROM ONE REAL MESSAGE, which opened with I hope you and your family are doing well and closed with Blessings (2026-11-14). The answer was asked for outright: thank you for the blessing, as already said to God bless you, and the standard blessing for the person and their family.";
  let hope_well = reply_sequence([
    "i",
    "hope",
    "you",
    "and",
    "your",
    "family",
    "are",
    "doing",
    "well",
  ]);
  let wished = reply_choice([hope_well, "blessings"]);
  let thanks = reply_response_blessing_thanks();
  let thanked = reply_on_match_output(wished, thanks);
  let blessed = reply_blessings_you_family_church_country();
  let said = reply_on_match_blessings(thanked, blessed);
  return said;
}
