import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { g_openers_lines } from "./g_openers_lines.mjs";
import { g_arc_prompt_arguments_assert } from "./g_arc_prompt_arguments_assert.mjs";
import { g_arc_catch_up_name } from "./g_arc_catch_up_name.mjs";
import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { g_arc_answer_field_lines } from "./g_arc_answer_field_lines.mjs";
import { g_arc_answer_example } from "./g_arc_answer_example.mjs";
import { g_arc_prompt_becoming } from "./g_arc_prompt_becoming.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple_arc } from "./g_openers_disciple_arc.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_arc_prompt(
  chapter_code,
  verses_text,
  turn_target,
  profile,
  leader,
) {
  "$plain profile";
  "$plain chapter_code";
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
  ("ALSO MISSING: how often each passage has been answered with SO FAR. The prompt asks for equal usage and then hands over nothing to measure it against, so every call evens out a chapter it is the first to touch. It wants to arrive as an argument, counted off the arcs already written - which is also why converts are written before the leader, whose turns are one per sermon line of the plant and so the largest single lever on coverage. It is not a parameter yet because nothing has been generated for it to count.");
  g_arc_prompt_arguments_assert(
    chapter_code,
    verses_text,
    turn_target,
    profile,
    leader,
  );
  let list = g_openers_unbeliever();
  let unbeliever_lines = g_openers_lines(list);
  ("The disciple openers arrive WITHOUT the Bible question door. A question is one turn with no floor, drawn from a pool that is subtracted from the chapter's matches before arcs are sized at all, so a question turn written into an arc is a turn already paid for elsewhere. The list not offering it is what keeps it out.");
  let list5 = g_openers_disciple_arc();
  let disciple_lines = g_openers_lines(list5);
  let s = g_generation_settings();
  let turns_low = property_get(s, "conversation_turns_low");
  let turns_mean = property_get(s, "conversation_turns_mean");
  let turns_high = property_get(s, "conversation_turns_high");
  let chapter_named = ebible_chapter_code_label(chapter_code);
  let preaching = list_join_space([
    "The player is answering from",
    chapter_named,
  ]);
  let joined = list_join_empty([preaching, "."]);
  ("The chapter named here is the one the plant is STANDING IN, and a leader is handed more than it. The passages say which chapter each of them is from, so the line stays true as written - it says where the player is, not what the whole list is drawn from.");
  let joined9 = list_join_space(["Aim for", turn_target, "turns."]);
  let unbeliever_block = list_join_newline(unbeliever_lines);
  let joined6 = list_join_newline([
    "openers for somebody who does not yet believe, one of:",
    unbeliever_block,
  ]);
  let disciple_block = list_join_newline(disciple_lines);
  let joined7 = list_join_newline([
    "openers for somebody who already believes, one of:",
    disciple_block,
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
  ("The field list and the answer example are BOTH rendered from one source, so a renamed field cannot be described here and missing from the shape at the end. A prompt never fails, so that disagreement would have gone out unnoticed on every call.");
  let fields = g_arc_answer_fields();
  let fields2 = property_get(fields, "person");
  let person_lines = g_arc_answer_field_lines(fields2);
  let person_fields = list_join_newline(person_lines);
  let fields3 = property_get(fields, "conversation");
  let conversation_lines = g_arc_answer_field_lines(fields3);
  let conversation_fields = list_join_newline(conversation_lines);
  let fields4 = property_get(fields, "turn");
  let turn_lines = g_arc_answer_field_lines(fields4);
  let turn_fields = list_join_newline(turn_lines);
  let example = g_arc_answer_example();
  let catch_up = g_arc_catch_up_name();
  let catch_up_first = list_join_space([
    "On conversations after the first, the conversation begins by the person greeting (you don't generate greeting) and then speaks their",
    catch_up,
    "before anything else.",
  ]);
  let catch_up_blind = list_join_space([
    "Then the player picks the opener while playing, so the",
    catch_up,
    "cannot answer the opener. You choose the order of the turns/openers, so choose a",
    catch_up,
    "that will come before the person speaking their answer to the first opener.",
  ]);
  ("THE OPENERS SIT IN THE TURN SECTION because the turn field describing 'opener' tells the writer to copy the word from the opener lines above it. They used to be rendered after that field list, so 'above' named something not yet shown - and the three numbered steps that stood here instead said what the opener lines say anyway, with less in them.");
  ("The catch_up pair stays BELOW the field list, because those two lines name a field, and moving them up with the openers would only trade one forward reference for another.");
  ("NEVER ON ONE WORD is there to keep an answer off ground a translation could move. Where translations disagree they disagree about SINGLE WORDS - monogenes is only begotten or one and only, and both are defensible readings of a contested root - while the sentence around the word says the same thing either way. So an answer resting on one word's precise sense is an answer resting on a translator's choice, and the player is reading one translation and cannot see that a choice was made.");
  ("IT NOW NAMES THE ORIGINAL, and that was decided rather than drifted into. The line first said only 'never on the precise sense of a single word', which asked for no knowledge of which words are contested - a flat ban avoids every contested word without knowing which they are, at the cost of banning uncontested ones too. It now bars a word's English sense only where that sense disagrees with the Greek, Hebrew or Aramaic, which is narrower and truer and does ask the writer to know where the two differ. Where it does not know, the sentence around the word still has to carry the answer, because the line above already wants a fit plain to somebody who has never read the Bible.");
  ("THE TOWNSPEOPLE BAN NAMES WHO IT MEANS NOW, because as written it took away somebody the openers ask about. It said only 'no other townspeople - this person knows none of them', while one of the three doors to a believer asks how ministering to their NEIGHBOUR is going. A person whose profile gives them a husband and children can send those turns through their household; one dealt single and childless has nobody left, and the only way to answer is to invent the person the line just forbade.");
  ("What the ban was ever protecting is the people the player can walk up to. Each of those is written by a call that never sees this one, so this person saying what the potter believes can contradict the potter's own arc with nothing to catch it. Somebody invented and attached to this person alone cannot collide with anything, because no other arc knows they exist - so the ban is now spelled as the people the player meets, and the making-up is allowed out loud beside it.");
  ("It also asks for nothing new. The line above it already wants an answer plain to somebody who has never read the Bible, and an answer turning on one word's precise sense already fails that - so this says out loud what the fit test was already asking for.");
  let json = json_format_to(profile);
  let lines = [
    "This is a Christian game about sharing the gospel.",
    "The setting is 1st-2nd century while Rome is persecuting Christians.",
    "The player walks up to somebody, hears what they say, and answers with a perfectly relevant and appropriate (including empathetic / affirming if loving and truthful) passage of Scripture.",
    "",
    "THE CHAPTER",
    joined,
    "These passages are the only Scripture you may answer from. Each line is one passage: in square brackets its chapter, a colon, and its verse numbers, then its text.",
    "More than one chapter may be listed. Two passages from two different chapters and/or books can carry the same verse numbers, so a passage needs its book and chapter along with verse numbers to identify it.",
    verses_text,
    "",
    "Here is JSON about the person:",
    json,
    "These facts are settled. Do not change them. Do not create a hateful caricature. It is okay if their speech lovingly reflects the JSON and setting.",
    "",
    "THE TURNS",
    "The player chooses an opener. Then the person answers the opener, then the player answers them with a passage chosen from a list, then the person says something afterward. Those three are one turn.",
    "One opener can take more than one turn. On every turn after the first, the person is still answering that same opener - they bring up the next thing they have to say about it, and the player answers that with a passage too.",
    "While playing, the person's afterward line and their next answer are read one after the other, so do not say the same thing twice across them.",
    "A conversation uses each opener at most once, and the turns under one opener are back-to-back: the player opens a topic once, and the person carries it until it is done, before the player opens another.",
    "Here are the openers. Each one gives the name of the opener, then what the player says when they choose it, then what kind of response the person says back:",
    joined6,
    joined7,
    "",
    "CHOOSING PASSAGES",
    "Goal is each passage is used an equal number of times, and closer to equality is better than further.",
    "Relevance and appropriateness are more important than equally using each passage - do not use passages by force.",
    "There are far more turns than there are passages, so you will answer with the same passages many times over. That is expected and is not a failure.",
    "One passage answers one turn, and the fit has to be obvious. Somebody who has never read the Bible plays this game. So write each thing the person says so that a single passage above is plainly the answer to it - not true-but-sideways or indirect or through inferencing, and not an answer that corrects how they are reasoning rather than what they said.",
    "What the person says should rely on what the passage plainly means, never on the precise sense of a single word if that sense in English disagrees with the Greek/Hebrew/Aramaic meaning.",
    "",
    "LENGTH",
    joined9,
    "This is a target, not a quota. Turns following from/relevant to the arc matter more than reaching the count.",
    "A short arc is fine. Not every person needs a long story.",
    "",
    "Ask yourself before writing anything: what passages should I choose for equal usage? Then ask: what arc and story for this person is needed to choose those passages?",
    "Keep that reasoning to yourself. What it settles is the summary you write below, and the turns are that same arc lived out in detail.",
    "",
    "WHAT TO WRITE, consistent with the JSON above",
    "You should choose this about the person, once:",
    person_fields,
    "",
    "And this about each conversation:",
    conversation_fields,
    "",
    "And this about each turn:",
    turn_fields,
    "",
    becoming,
    "",
    catch_up_first,
    catch_up_blind,
    "",
    "GROUPING",
    "Group the turns into conversations.",
    "In the game, each day, the player talks to the person at most once.",
    joined8,
    "You decide where each one ends.",
    "",
    "These conversations are a SUMMARY of this person's life, never a transcript of it. John 21 verse 25 says the world could not hold the books if everything Jesus did were written down, and the Gospels are short compared to the years they cover. So write the same way.",
    "The turns are the few exchanges worth showing out of many more that happened. Between two conversations this person has gone on living, and may have changed in ways the player did not see playing the game.",
    "So do not try to show every step of a person changing. Choose the changes that mattered - the ones after which this person was not the same as before.",
    "You are free to open each conversation with them further on than the player left them. In the game, the next conversation could be the very next day or many days later, and the gaps need not be regular. You are not told how many days in between and neither is the player, so the person must not say or imply how many days it has been - the game decides when conversations are scheduled when a player starts a new game, and how many actual days a game day stands for is not decided yet.",
    "",
    "Every turn follows from where this person is in their arc (consistent, on topic with the arc). Early on that is their own trouble. Later it is whatever their walk with God has brought them to since.",
    "",
    "WHAT NOT TO WRITE",
    "No names. The game picks names when it runs.",
    "No townspeople the player can walk up to. The game holds people the player sees and talks to, and this person knows none of them.",
    "Anybody else is yours to make up - the neighbour they are serving, somebody in their household. That person belongs to this person alone: the player never meets them, and nobody else in the game knows them.",
    "No time of day, no weather, no place.",
    "Nothing about the player - not their gender, family, marital status, past, or how long they have been here.",
    "Nothing about persecution* or danger*.",
    "Nothing about soldiers* unless the person is a soldier.",
    "Nothing about rulers* unless the person is a ruler.",
    "*Or unless these verses raise it. This person is whatever the JSON above says they are, and may speak of their own work plainly.",
    "You only generate the right answer. You do not generate any wrong answers. Every passage you name must be the right answer - just name its book and chapter together, and its verse numbers.",
    "",
    "Keep everything the person says short/summarized - prefer fewest number of sentences - should be ~1-2. Do not sacrifice clarity or arc consistency.",
    "",
    "Answer as JSON, in exactly this shape. The values are left empty here; fill every one of them.",
    example,
    "Above two turns are shown only so the schema of JSON is clear.",
    "You are not limited to two turns. Write as many conversations/turns as the arc needs.",
    "Do not repeat the settled facts back. They are already known.",
  ];
  let r = list_join_newline(lines);
  return r;
}
