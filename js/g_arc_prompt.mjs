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
export function g_arc_prompt(chapter_code, verses_text, turn_targets) {
  "The whole instruction that writes one chapter's cast - every person in that town and every turn they hold - as one string ready to send.";
  "ONE call for the whole chapter rather than one per person. Arcs written separately from the same chapter converge into variations on the same person, so a call that sees all of them at once makes them differ by construction - which is what removes the summary stage and the de-duplication pass that were otherwise needed to get the same thing.";
  "Every closed list is ASKED FOR here rather than spelled out. A word written into this prose could disagree with the list a coverage tally counts and nothing would ever notice.";
  "How many people is a parameter because it is proportional to the chapter's own days rather than fixed - roughly six tenths of a person per day of preaching - so a five day chapter and a twenty day chapter do not receive the same town.";
  "It arrives as the LIST OF TURN TARGETS rather than as a count beside them. The count is how many targets there are, so passing both would be writing one number twice and letting the two disagree.";
  "The conversation lengths are handed over so the model can group its own turns into conversations. It has to do the grouping, because it is the only party that knows where one exchange finishes, and a grouping decided afterwards leaves every conversation after the first opening mid-thought.";
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
  let arcs_count = list_size(turn_targets);
  let targets = list_join_comma_space(turn_targets);
  let joined2 = list_join_space([
    "Write",
    arcs_count,
    "people, all different from each other.",
  ]);
  let joined9 = list_join_space([
    "Aim at these turn counts, one per person, in the order you write them:",
    targets,
  ]);
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
    joined2,
    "Invent each person from what these verses can honestly answer. Never pick a trouble first and then hunt for a verse.",
    "If a verse cannot honestly answer a trouble, that trouble does not belong to this chapter.",
    "",
    "Each person is given, and you choose the values:",
    joined3,
    joined4,
    joined5,
    "  trouble - what is actually wrong, in one sentence, in their own voice",
    "  summary - one sentence naming them by calling and trouble, shown to the player when they return days later",
    "",
    "Between them the people must cover a spread of callings. Do not write the same kind of person twice.",
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
    "Each person is given a number of turns to aim at. It is a target and not a quota.",
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
