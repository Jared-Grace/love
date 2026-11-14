import { reply_sequence } from "./reply_sequence.mjs";
import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_response_nothing_to_give } from "./reply_response_nothing_to_give.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_prayer_abundance_of_prayer } from "./reply_prayer_abundance_of_prayer.mjs";
import { reply_blessings_you_family_church_country } from "./reply_blessings_you_family_church_country.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
export function reply_appeal_christmas() {
  "The lines of an appeal for a Christmas outreach: gift boxes for children and families, groceries for widows, shopping for orphans, funds asked for and the appeal asked to be shared.";
  "★ EVERY LINE COMES FROM ONE REAL MESSAGE (2026-11-14), and what each gets back was asked for outright. The yearly gift boxes get a prayer for the children and families. The asking for funds and prayer gets nothing to give, then the answer to being asked for prayer. The plans and the asking to share are read and answered with nothing, because the prayer and the answer to the asking already cover them.";
  let distribute = reply_sequence([
    "as",
    "you",
    "know",
    "every",
    "year",
    "we",
    "distribute",
    "christmas",
    "gift",
    "boxes",
    "to",
    "children",
    "and",
    "door",
    "to",
    "door",
    "families",
  ]);
  let provide = text_may_the_lord_exclamation(
    "provide for the children and families",
  );
  let distribute_prayed = reply_on_match_prayer(distribute, provide);
  let planning = reply_sequence([
    "this",
    "year",
    "we",
    "are",
    "planning",
    "a",
    "bigger",
  ]);
  let lets = reply_choice(["let's", "lets"]);
  let theme = reply_sequence([
    "our",
    "theme",
    lets,
    "celebrate",
    "christmas",
    "with",
    "us",
  ]);
  let boxes = reply_sequence(["2000", "christmas", "gift", "boxes"]);
  let groceries = reply_sequence([
    "grocery",
    "packages",
    "for",
    "300",
    "widows",
  ]);
  let shopping = reply_sequence([
    "christmas",
    "shopping",
    "for",
    "300",
    "orphan",
    "children",
  ]);
  let raising = reply_sequence([
    "we",
    "are",
    "currently",
    "raising",
    "funds",
    "for",
    "this",
    "project",
    "and",
    "i",
    "would",
    "sincerely",
    "appreciate",
    "your",
    "prayers",
    "and",
    "financial",
    "support",
  ]);
  let nothing_to_give = reply_response_nothing_to_give();
  let raising_told = reply_on_match_output(raising, nothing_to_give);
  let prayed_for = reply_prayer_abundance_of_prayer();
  let raising_prayed = reply_on_match_prayer(raising_told, prayed_for);
  let blessings = reply_blessings_you_family_church_country();
  let raising_blessed = reply_on_match_blessings(raising_prayed, blessings);
  let share = reply_sequence([
    "please",
    "share",
    "it",
    "with",
    "your",
    "friends",
    "and",
    "family",
    "and",
    "help",
    "us",
    "raise",
    "donations",
  ]);
  let appeal = reply_choice([
    distribute_prayed,
    planning,
    theme,
    boxes,
    groceries,
    shopping,
    raising_blessed,
    share,
  ]);
  return appeal;
}
