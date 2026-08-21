import { g_profiles_dealt } from "./g_profiles_dealt.mjs";
import { g_arc_chapter_passages_role } from "./g_arc_chapter_passages_role.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_sermon_chapter_verses_text } from "./g_sermon_chapter_verses_text.mjs";
import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { property_get } from "./property_get.mjs";
import { g_profiles } from "./g_profiles.mjs";
import { g_generation_plan } from "./g_generation_plan.mjs";
import { g_profiles_leader } from "./g_profiles_leader.mjs";
import { g_arc_prompt } from "./g_arc_prompt.mjs";
export async function g_arc_prompt_chapter_role(chapter, leader, index) {
  "The arc prompt for one written chapter, as one string - what actually gets sent to write a person, with every argument filled from the repo rather than made up here.";
  "A prompt is read before it is trusted, and it cannot be read while its arguments live in as many different places. This gathers them and hands back the result so a change to any of them is visible in one command.";
  ("Its answer is the whole string ",
    fn_name("g_arc_prompt"),
    " returns, uncut.");
  ("It was cut into its lines once, because a JSON print writes a string as one line with every newline spelled as two characters. That read better on one seam and lost content on the other: the human's seam prints through console.log, which stops an array at a hundred items and replaces the rest with a count - and this prompt runs to 135 lines, so 35 of them were silently gone. A string prints there raw and whole.");
  ("To read it as a file instead of in the terminal, ",
    fn_name("function_run_output_file_temp"),
    " writes a string to a .txt of its own and opens it.");
  ("A leader is asked for a different prompt AND a different deck, because both of those are what being the leader means - the elder's turns come from the PLAN rather than from the pool, since the pool deliberately does not count leaders.");
  ("THE NUMBER SAYS WHICH PERSON OF THE CAST, and both the pool and the deal are read at it. It used to be nought in both places, so every convert prompt this ever rendered was for the same person - which reads exactly like a prompt that works, because one person is all it was ever asked to show.");
  ("A LEADER IS ALWAYS THE ONE THERE IS. The elder is dealt from a deck of its own with a cast of one, so its number is nought whatever was asked for - and asking for a second leader is a question the deal cannot answer rather than a person it would find.");
  ("What the chapter already holds is gathered here and handed over as text, because gathering it is reading a store and the prompt is a pure rendering of what it is given.");
  ("The WHOLE cast is dealt to get ONE profile, and that is not waste. The deal is weighted by who the cast is still short of, so who lands in any one position depends on every card drawn around it - ask for a single person alone and the spread that decides who they are was never formed. So the same deal a real run makes is made here, and the card at the npc's own position is the one taken.");
  let passages = await g_arc_chapter_passages_role(chapter, leader);
  let verses_text = g_sermon_chapter_verses_text(passages);
  let turns_wanted = await g_npc_pool_convert_turns();
  let next = random_seed_generator_from_text(g_npc_pool.name);
  let pool = g_npc_pool(turns_wanted, next);
  let npc = list_at(pool, index);
  let turn_target = property_get(npc, "turns");
  let deck = g_profiles();
  let cast = pool.length;
  let deal_index = index;
  if (leader) {
    let plan = g_generation_plan();
    turn_target = property_get(plan, "leader_turns");
    deck = g_profiles_leader();
    cast = 1;
    deal_index = 0;
  }
  let deal_next = random_seed_generator_from_text(g_profiles_dealt.name);
  let dealt = g_profiles_dealt(deck, cast, deal_next);
  let profile = list_at(dealt, deal_index);
  let written = await g_arc_written_chapter(chapter);
  let written_text = g_arc_prompt_written(written, passages);
  let prompt = g_arc_prompt(
    chapter,
    verses_text,
    turn_target,
    profile,
    leader,
    written_text,
  );
  return prompt;
}
