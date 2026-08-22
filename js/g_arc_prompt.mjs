import { g_arc_prompt_lines } from "./g_arc_prompt_lines.mjs";
import { words_reached_for_plain_lines } from "./words_reached_for_plain_lines.mjs";
import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { g_openers_lines } from "./g_openers_lines.mjs";
import { g_arc_prompt_arguments_assert } from "./g_arc_prompt_arguments_assert.mjs";
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
  written_text,
) {
  "$plain profile";
  "$plain written_text";
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
  ("WHAT THE CHAPTER ALREADY HOLDS ARRIVES AS AN ARGUMENT, written by ",
    fn_name("g_arc_prompt_written"),
    " - who has been written, and how many turns have answered out of each passage so far. Both of those used to be missing, and each was missing in the same way: this call could only see itself, so it wrote a person nobody else had met and evened out a chapter it believed it was the first to touch.");
  ("It comes in AS TEXT rather than as the arcs themselves, because reading arcs is the one thing this function must not do. It is handed everything it says and so can be rendered for any arguments at all, which is what lets a gate check the shape of a prompt on a machine where nothing has been generated.");
  ("EMPTY IS THE FIRST PERSON of a chapter and the section is left out whole. Nobody written and every passage at zero is a paragraph saying nothing, and the writer would weigh it anyway.");
  ("Converts are written before the leader for the same reason: the elder's turns are one per sermon line of the plant, so that arc is the largest single lever on coverage and wants the fullest count to aim with.");
  g_arc_prompt_arguments_assert(
    chapter_code,
    verses_text,
    turn_target,
    profile,
    leader,
    written_text,
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
  ("THE VOCABULARY IS ASKED FOR AND THE VOICE IS NOT, and the line is worded to keep those apart. A rare word carries none of what makes a person sound like themselves - the rhythm, what they notice, what they will not say - so a smaller vocabulary takes nothing away from a writer, while telling one how to phrase a sentence takes the sentence away from them.");
  ("It also asks for nothing new. The fit rule above already wants a reader able to point at what in the person's line the passage answers, and the plainest word is nearly always the most concrete one - so a line that names a category rather than a thing was already failing that test, and this says out loud why.");
  ("The age is READ rather than written here, because a gate over what has been written has to measure against the same number the writing was asked for.");
  ("IT COVERS THE UNSPOKEN FIELDS TOO, and that was added rather than assumed. It first asked only for the words the person SAYS, which is the only text a child ever meets - and the occupation, the trouble and the summary looked like they were nobody's business, being written for the next call rather than for a player. They are not, for two reasons. The four fields are written in ONE answer by one writer, so a register let loose in three of them is the register the fourth is written beside; the dyer's summary said she had practised her household religion, and her spoken lines said rites three times. And the summary alone is handed to the prompt that writes the NEXT person, so a hard word there is not sitting still - it is the example the following arc is written from.");
  ("THE WORDS ARE NAMED BECAUSE THE RULE ALONE DOES NOT WORK, and that is measured rather than supposed. The sentence above has always been in this prompt, and the two arcs written under it reached past a child's vocabulary on fifty of a hundred and ten lines - one of them for SINCE five times. The writer was not breaking the rule; it cannot tell that SINCE is hard, because nothing in the word says so and no amount of care recovers a fact about a reader from the word itself. So the rule is kept and the answer is written down beside it.");
  ("The plain twin is given rather than the fault alone. Told only what not to write, a writer works around the word and the sentence comes out bent; handed what to write instead, there is nothing left to decide.");
  let reading_age = property_get(s, "reading_age");
  let reached_for = words_reached_for_plain_lines();
  let lines = g_arc_prompt_lines(
    reading_age,
    reached_for,
    leader,
    written_text,
    profile,
    joined,
    verses_text,
    joined6,
    joined7,
    joined9,
    joined8,
  );
  let r = list_join_newline(lines);
  return r;
}
