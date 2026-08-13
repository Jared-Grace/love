import { g_arc_prompt_becoming } from "./g_arc_prompt_becoming.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple } from "./g_openers_disciple.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_arc_prompt(
  chapter_code,
  verses_text,
  turn_target,
  profile,
  leader,
) {
  "The LLM prompt that writes one person/arc, as one string ready to send.";
  "ONE PERSON A CALL, not the whole chapter's cast (fewer tokens - higher LLM quality)";
  "The profile (gender, age, etc.) is RECEIVED rather than LLM decide.";
  ("the profile is one of ", fn_name("g_profiles"), ".");
  ("turn_target is drawn for this person by ", fn_name("g_npc_pool"), ".");
  ("leader says this is the one convert the plant is left with as its elder - one per plant, dealt from ",
    fn_name("g_profiles_leader"),
    ".");
  ("~Twelve turns make a conversation, and one person holds at most one conversation a day, so seventy turns is about six days this person is met on - not six days running, because the player's day holds a conversation with everybody else too.");
  ("LLM groups 'turn_target' turns into conversations.");
  ("STILL MISSING: people written blind to each other come out as variations on one person. The fix is to hand over the summaries already written for this chapter.");
  "ALSO MISSING: how often each passage has been answered with SO FAR. The prompt asks for equal usage and then hands over nothing to measure it against, so every call evens out a chapter it is the first to touch. It wants to arrive as an argument, counted off the arcs already written - which is also why converts are written before the leader, whose turns are one per sermon line of the plant and so the largest single lever on coverage. It is not a parameter yet because nothing has been generated for it to count.";
  let list = g_openers_unbeliever();
  let openers_unbeliever = list_join_comma_space(list);
  ("The disciple openers arrive WITHOUT the Bible question door. A question is one turn with no floor, drawn from a pool that is subtracted from the chapter's matches before arcs are sized at all, so a question turn written into an arc is a turn already paid for elsewhere. The list not offering it is what keeps it out.");
  let list5 = g_openers_disciple_arc();
  let openers_disciple = list_join_comma_space(list5);
  let s = g_generation_settings();
  let turns_low = property_get(s, "conversation_turns_low");
  let turns_mean = property_get(s, "conversation_turns_mean");
  let turns_high = property_get(s, "conversation_turns_high");
  let preaching = list_join_space([
    "The player is answering from",
    chapter_code,
  ]);
  let joined = list_join_empty([preaching, "."]);
  let joined9 = list_join_space(["Aim for", turn_target, "turns."]);
  let joined6 = list_join_space([
    "  openers for somebody who does not yet believe, one of:",
    openers_unbeliever,
  ]);
  let joined7 = list_join_space([
    "  openers for somebody who already believes, one of:",
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
  let becoming = g_arc_prompt_becoming(leader);
  let json = json_format_to(profile);
  let lines = [
    "This is a Christian game about sharing the gospel.",
    "The setting is 1st-2nd century while Rome is persecuting Christians.",
    "The player walks up to somebody, hears what they say, and answers with a perfectly relevant and appropriate (including empathetic / affirming if loving and truthful) passage of Scripture.",
    "",
    "THE CHAPTER",
    joined,
    "These passages are the only Scripture you may answer from. Each line is one passage: its verse numbers, then its text.",
    verses_text,
    "",
    "Here is JSON about the person:",
    json,
    "These facts are settled. Do not change them. Do not create a hateful caricature. It is okay if their speech lovingly reflects the JSON and setting.",
    "",
    "THE TURNS",
    "A turn is one exchange.",
    "The person says something. The player answers with a passage.",
    "The player will choose the correct passage from a list",
    "",
    "WHO TO WRITE",
    "Goal is each verse is used an equal number of times and closer to equality is better than further",
    "Relevance and appropriateness are more important than equally using each verse - do not use passages by force",
    "There are far more turns than there are verses, so you will answer with the same verses many times over. That is expected and is not a failure.",
    "",
    "LENGTH",
    joined9,
    "This is a target, not a quota. Turns following from the arc matters more than reaching the count.",
    "",
    "Ask: Ideally, what passages should I choose for equal usage? Then ask: what overall npc arc flow/story/summary is needed to choose these passages? ",
    "",
    "You should choose this about the person:",
    "  occupation - their work, consistent with the JSON above",
    "  trouble(s) - what is wrong, briefly, in their own words",
    "  summary - the whole arc in a sentence: who they are and where they end up",
    "  opener - on conversations after the first, what the person says at the beginning. It catches the player up on where this person has got to, said naturally rather than as a forced summary.",
    "  before - what the person says at the beginning of a turn",
    "  verse_numbers - the verse numbers of the passage that answer the before",
    "  after - what they say after player chooses correct passage",
    "",
    becoming,
    "",
    "In a conversation, the player first chooses an opener. Here are the openers: ",
    joined6,
    joined7,
    "Then the npc utters an answer to the player's opener. Then player chooses the corresponding passage.",
    "",
    "GROUPING",
    "Group the turns into conversations.",
    "One conversation is one day in the game.",
    joined8,
    "You decide where each one ends.",
    "",
    "These conversations are a SUMMARY of this person's life, never a transcript of it. John 21 verse 25 says the world could not hold the books if everything Jesus did were written down, and the Gospels are short compared to the years they cover. So write the same way.",
    "The turns are the few exchanges worth showing out of many more that happened. Between two conversations this person has gone on living, and may have changed in ways the player did not see playing the game.",
    "So do not try to show every step of a person changing. Choose significant changes - for example: the day they finally 'let go,' the day they finally asked something.",
    "You are free to open each conversation with them further on than the player left them. The next one could be the very next day or many days later, and the gaps need not be regular. You are not told which and neither is the player, so the npc must not say or imply how long it has been - the game decides when conversations are scheduled when a player starts a new game, and how many actual days a game day stands for is not decided yet.",
    "",
    "Every turn follows from where this person is in their arc (consistent, on topic). Early on that is their own trouble. Later it is whatever their walk with God has brought them to since.",
    "",
    "WHAT NOT TO WRITE",
    "No names. The game picks names when it runs.",
    "No other townspeople. This person knows none of them.",
    "No time of day, no weather, no place.",
    "Nothing about the player - not their gender, family, past, or how long they have been here.",
    "Nothing about persecution, soldiers, rulers, or danger, unless these verses raise it.",
    "No wrong answers. Every passage you name must be the right one - just name the passage verse numbers.",
    "",
    "Keep every utterance short/summarized - prefer fewest number of sentences - should be ~1-2. Do not sacrifice clarity or arc consistency.",
    "",
    "Answer as JSON: one person, holding occupation, trouble, summary and conversations. A conversation holds an opener and a list of turns; a turn holds the before and after utterances and the verse numbers of the correct passage.",
    "Do not repeat the settled facts back. They are already known.",
  ];
  let r = list_join_newline(lines);
  return r;
}
