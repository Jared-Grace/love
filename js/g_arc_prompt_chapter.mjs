import { fn_name } from "./fn_name.mjs";
import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { g_sermon_chapter_verses_text } from "./g_sermon_chapter_verses_text.mjs";
import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { property_get } from "./property_get.mjs";
import { g_profiles } from "./g_profiles.mjs";
import { g_arc_prompt } from "./g_arc_prompt.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export async function g_arc_prompt_chapter(chapter) {
  "The arc prompt for one written chapter, printed a line at a time - what actually gets sent to write a person, with every argument filled from the repo rather than made up here.";
  "A prompt is read before it is trusted, and it cannot be read while its four arguments live in four different places. This gathers them and hands back the result so a change to any of them is visible in one command.";
  ("Its answer is the string ",
    fn_name("g_arc_prompt"),
    " returns, cut back into its lines. The seam prints a result as JSON, and a JSON string is one line with every newline written as two characters - the prompt is unreadable that way, and the lines put back together are the same text.");
  ("The turn target is taken from the POOL rather than drawn here, because that is where every real one comes from. The first person in the pool is used, so the number moves when the arc lengths move and never when this runs again.");
  ("The profile is the first in the deck, and it is a stand-in. Nothing deals profiles yet, so a real prompt's profile is still an open question - what this shows is the shape of one, not which one a given person gets.");
  let passages = await g_sermon_chapter_passages(chapter);
  let verses_text = g_sermon_chapter_verses_text(passages);
  let turns_wanted = await g_npc_pool_convert_turns();
  let next = random_seed_generator_from_text(g_npc_pool.name);
  let pool = g_npc_pool(turns_wanted, next);
  let npc = pool[0];
  let turn_target = property_get(npc, "turns");
  let profiles = g_profiles();
  let profile = profiles[0];
  let prompt = g_arc_prompt(chapter, verses_text, turn_target, profile);
  let r = text_split_newline(prompt);
  return r;
}
