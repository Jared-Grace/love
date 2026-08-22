import { property_get } from "./property_get.mjs";
import { g_arc_prompt_reading_age } from "./g_arc_prompt_reading_age.mjs";
import { g_arc_prompt_lines } from "./g_arc_prompt_lines.mjs";
import { words_reached_for_plain_lines } from "./words_reached_for_plain_lines.mjs";
import { g_openers_lines } from "./g_openers_lines.mjs";
import { g_arc_prompt_arguments_assert } from "./g_arc_prompt_arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple_arc } from "./g_openers_disciple_arc.mjs";
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
  let r2 = g_arc_prompt_reading_age(
    list5,
    chapter_code,
    turn_target,
    unbeliever_lines,
  );
  let reading_age = property_get(r2, "reading_age");
  let joined8 = property_get(r2, "joined8");
  let joined7 = property_get(r2, "joined7");
  let joined6 = property_get(r2, "joined6");
  let joined9 = property_get(r2, "joined9");
  let joined = property_get(r2, "joined");
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
