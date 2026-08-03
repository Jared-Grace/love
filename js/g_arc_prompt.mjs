import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { g_callings } from "./g_callings.mjs";
import { g_sexes } from "./g_sexes.mjs";
import { g_seasons } from "./g_seasons.mjs";
import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple } from "./g_openers_disciple.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_arc_prompt(chapter_code, verses_text, turn_target) {
  "The whole instruction that writes ONE person - who they are and every turn they hold - as one string ready to send.";
  "One person per call rather than the whole chapter's cast in one response. A cast is JAS01's 298 turns, near 24000 output tokens, and at that size one bad verse citation costs the rewrite of all seven people and the last person written gets the least care. One person is the natural unit because the turn target is drawn per person.";
  "Every closed list is ASKED FOR here rather than spelled out. A word written into this prose could disagree with the list a coverage tally counts and nothing would ever notice.";
  "The turn target is one number, drawn for this person by g_arc_lengths. It is what their whole life in this chapter is worth - about twelve turns to a conversation and one conversation a day, so seventy turns is about six days.";
  "The conversation lengths are handed over so the model can group its own turns into conversations. It has to do the grouping, because it is the only party that knows where one exchange finishes, and a grouping decided afterwards leaves every conversation after the first opening mid-thought.";
  "STILL MISSING: people written blind to each other converge into variations on the same person. The fix is to hand over the summaries of the arcs already written for this chapter, and this does not take them yet.";
  let list = g_callings();
  let callings = list_join_comma_space(list);
  let list2 = g_sexes();
  let sexes = list_join_comma_space(list2);
  let list3 = g_seasons();
  let seasons = list_join_comma_space(list3);
  let list4 = g_openers_unbeliever();
  let openers_unbeliever = list_join_comma_space(list4);
  let list5 = g_openers_disciple();
  let openers_disciple = list_join_comma_space(list5);
  let s = g_generation_settings();
  let turns_low = property_get(s, "conversation_turns_low");
  let turns_mean = property_get(s, "conversation_turns_mean");
  let turns_high = property_get(s, "conversation_turns_high");
  let joined = list_join_space([
    "The chapter being preached here is",
    chapter_code,
  ]);
  let joined9 = list_join_space(["Aim at about", turn_target, "turns."]);
  let joined3 = list_join_space(["  sex - one of:", sexes]);
  let joined4 = list_join_space(["  calling - one or more of:", callings]);
  let joined5 = list_join_space(["  season - one of:", seasons]);
  let joined6 = list_join_space([
    "  opener - for somebody who does not yet believe, one of:",
    openers_unbeliever,
  ]);
  let joined7 = list_join_space([
    "           for somebody who already believes, one of:",
    openers_disciple,
  ]);
  let joined8 = list_join_space([
    "A conversation holds about",
    turns_mean,
    "turns, and runs from",
    turns_low,
    "turns to",
    turns_high,
    "turns.",
  ]);
  let lines = [
    "You are writing the people of one town for a Christian game about planting a church.",
    "The player walks up to somebody, hears what troubles them, and answers with a passage of Scripture.",
    "",
    "THE CHAPTER",
    joined,
    "Its verses are the only Scripture anybody in this town may be answered from:",
    verses_text,
    "",
    "WHO TO WRITE",
    "Write one person.",
    "Invent them from what these verses can honestly answer. Never pick a trouble first and then hunt for a verse.",
    "If a verse cannot honestly answer a trouble, that trouble does not belong to this chapter.",
    "",
    "This person is given, and you choose the values:",
    joined3,
    joined4,
    joined5,
    "  trouble - what is actually wrong, in one sentence, in their own voice",
    "  summary - one sentence naming them by calling and trouble, shown to the player when they return days later",
    "",
    "Give sex and calling as facts and never a personality that is supposed to follow from them.",
    "",
    "THE TURNS",
    "A turn is one exchange: the person says something, and the player answers with a passage.",
    "The player's own line is always the frame God's word says followed by the passage, so you never write it.",
    "",
    "Each turn is given as:",
    joined6,
    joined7,
    "  utterance - what the person says",
    "  verse_numbers - the verses of this chapter that answer it, point for point",
    "  after - what the person says once that passage has landed",
    "",
    "Belief only ever moves forward. Once somebody believes they do not go back to unbelief.",
    "A person who never receives a believer's opener is an unbeliever for the whole arc.",
    "",
    "GROUPING",
    "Group each person's turns into conversations. One conversation is one day.",
    joined8,
    "You decide where each conversation ends, so write the opening turn of a later conversation as somebody picking a thread back up days later.",
    "",
    "LENGTH",
    joined9,
    "A turn count is a target and not a quota.",
    "Return fewer turns whenever the person has run out of things the chapter can honestly answer.",
    "Never add a question the person's own trouble does not make them ask, and never stretch an exchange to reach the number.",
    "",
    "WHAT NOT TO WRITE",
    "No names. Names are chosen when the game runs, so nobody may be addressed or referred to by name.",
    "No other people. Nobody in this town knows any of the others, so nobody may mention them.",
    "No time of day, no weather, no place, and nothing about where this town is.",
    "Nothing about the player - not their sex, their family, their past, or how long they have been here.",
    "Nothing about persecution, soldiers, rulers, or danger, unless these very verses raise it.",
    "No wrong answers. Those come from elsewhere, so every passage you name must be the right one.",
    "",
    "Keep every utterance short - a sentence or two, the way somebody actually speaks.",
    "",
    "Answer as JSON: a list of people, each with sex, calling, season, trouble, summary, and conversations, where each conversation is a list of turns.",
  ];
  let r = list_join_newline(lines);
  return r;
}
