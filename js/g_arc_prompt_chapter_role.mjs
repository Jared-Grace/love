import { fn_name } from "./fn_name.mjs";
import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { g_sermon_chapter_verses_text } from "./g_sermon_chapter_verses_text.mjs";
import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { property_get } from "./property_get.mjs";
import { g_profiles } from "./g_profiles.mjs";
import { g_generation_plan } from "./g_generation_plan.mjs";
import { g_profiles_leader } from "./g_profiles_leader.mjs";
import { g_arc_prompt } from "./g_arc_prompt.mjs";
export async function g_arc_prompt_chapter_role(chapter, leader) {
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
  ("The profile is the first in whichever deck, and it is a stand-in. Nothing deals profiles yet, so a real prompt's profile is still an open question - what this shows is the shape of one, not which one a given person gets.");
  let passages = await g_sermon_chapter_passages(chapter);
  let verses_text = g_sermon_chapter_verses_text(passages);
  let turns_wanted = await g_npc_pool_convert_turns();
  let next = random_seed_generator_from_text(g_npc_pool.name);
  let pool = g_npc_pool(turns_wanted, next);
  let npc = pool[0];
  let turn_target = property_get(npc, "turns");
  let profiles = g_profiles();
  if (leader) {
    let plan = g_generation_plan();
    turn_target = property_get(plan, "leader_turns");
    profiles = g_profiles_leader();
  }
  let profile = profiles[0];
  let prompt = g_arc_prompt(chapter, verses_text, turn_target, profile, leader);
  return prompt;
}
