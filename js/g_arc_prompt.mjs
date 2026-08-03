import { js_boolean_values } from "./js_boolean_values.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { g_callings } from "./g_callings.mjs";
import { g_genders_names } from "./g_genders_names.mjs";
import { g_seasons } from "./g_seasons.mjs";
import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple } from "./g_openers_disciple.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_arc_prompt(chapter_code, verses_text, turn_target) {
  "The LLM prompt that writes one person/arc, as one string ready to send.";
  "ONE PERSON A CALL, not the whole chapter's cast (fewer tokens - higher LLM quality)";
  "The turn target is one number.";
  ("turn_target is drawn for this person by ", fn_name("g_arc_lengths"), ".");
  ("~Twelve turns make a conversation and a conversation is a day, so seventy turns is about six days of their life.");
  ("LLM groups 'turn_target' turns into conversations.");
  ("STILL MISSING: people written blind to each other come out as variations on one person. The fix is to hand over the summaries already written for this chapter.");
  let list = g_callings();
  let callings = list_join_comma_space(list);
  let genders = g_genders_names();
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
  let preaching = list_join_space([
    "The player is answering from ",
    chapter_code,
  ]);
  let joined = list_join_empty([preaching, "."]);
  let joined9 = list_join_space(["Aim at about", turn_target, "turns."]);
  let joined3 = list_join_space(["  gender - one of:", genders]);
  let joined4 = list_join_space(["  married:", callings]);
  let joined5 = list_join_space(["  age: between 13 and 80", seasons]);
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
    "turns. The fewest is",
    turns_low,
    "and the most is",
    turns_high,
    "turns.",
  ]);
  let r2 = js_boolean_values();
  let json = json_format_to({
    gender: genders,
    married: "boolean",
  });
  let lines = [
    "This is a Christian game about sharing the gospel.",
    "THe setting is 1st-2nd century while Rome is persecuting Christians.",
    "The player walks up to somebody, hears what they say, and answers with a perfectly relevant and appropriate passage of Scripture.",
    "",
    "You should choose this about each person:",
    json,
    joined3,
    joined4,
    joined5,
    "  trouble - what is wrong, in one sentence, in their own words",
    "  summary - one sentence: their calling and their trouble. The player reads it when they return.",
    "THE CHAPTER",
    joined,
    "These verses are the only Scripture you may answer from.",
    verses_text,
    "",
    "WHO TO WRITE",
    "Write one person: {}",
    "Start from the verses. Ask what trouble they honestly answer.",
    "Never pick a trouble first and then hunt for a verse.",
    "",
    "THE TURNS",
    "A turn is one exchange.",
    "The person says something. The player answers with a passage.",
    "The player's words are always God's word says, then the passage. So never write the player's line.",
    "",
    "Give each turn:",
    joined6,
    joined7,
    "  utterance - what the person says",
    "  verse_numbers - the verses that answer it",
    "  after - what they say once that passage has landed",
    "",
    "Belief only moves forward. Once they believe, they never go back.",
    "If they never believe, never use a believer opener.",
    "",
    "GROUPING",
    "Group the turns into conversations.",
    "One conversation is one day.",
    joined8,
    "You decide where each one ends.",
    "Days pass in between, so open a later conversation as somebody picking the thread back up.",
    "",
    "LENGTH",
    joined9,
    "This is a target, not a quota.",
    "Stop when the chapter has nothing left that honestly answers them.",
    "Never pad. Do not add a question their trouble would not make them ask.",
    "",
    "WHAT NOT TO WRITE",
    "No names. The game picks names when it runs.",
    "No other townspeople. This person knows none of them.",
    "No time of day, no weather, no place.",
    "Nothing about the player - not their gender, family, past, or how long they have been here.",
    "Nothing about persecution, soldiers, rulers, or danger, unless these verses raise it.",
    "No wrong answers. Every passage you name must be the right one.",
    "",
    "Keep every utterance short - a sentence or two, the way people actually speak.",
    "",
    "Answer as JSON: one person, with gender, calling, season, trouble, summary, and conversations.",
    "Each conversation is a list of turns.",
  ];
  let r = list_join_newline(lines);
  return r;
}
