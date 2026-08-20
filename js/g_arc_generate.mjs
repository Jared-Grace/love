import { file_name_json } from "./file_name_json.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_arc_generate() {
  "Writes the whole pool of arcs down as a file, one file to a person, so who the game holds is a thing that EXISTS rather than a thing that gets worked out again.";
  "One file to a PERSON and not to a plant, which is the correction. A plant is cut out of the chapters a player chose when their game begins, so there is no plant here to file anything under - the same person lands in a different plant in the next game, and a file named after a plant would have to be rewritten every time somebody made a different choice.";
  "This is what makes the arcs authorable at all. A person's turn count is fixed once, here; the words that fill those turns get written against that number and stay attached to it. Redrawing the length per game would leave written words fitting nobody.";
  "Sized against every sermon that has been WRITTEN rather than against any one game's choice, so a player who picks the whole supply still has enough people to meet.";
  "Seeded on a fixed word for the same reason. Re-running this must land on the same pool, or a change in the output means nothing.";
  "THE PATH IS BUILT BY THE GENERAL ONE, and it has to be. A person's file is named after this function and their number, and the chapter-taking twin asserts letters and digits only - so the underscore in that name threw on every person, and this wrote nothing at all from the day it stopped filing by plant. The store still held the plant records the old shape left behind, which is what a store nothing writes to looks like.";
  let turns_wanted = await g_npc_pool_convert_turns();
  let next = random_seed_generator_from_text(g_npc_pool.name);
  let pool = g_npc_pool(turns_wanted, next);
  let f = g_arc_generate;
  async function npc_write(npc) {
    let index = property_get(npc, "index");
    let name = text_combine_multiple([f.name, "_", index]);
    let file_name = file_name_json(name);
    let path = storage_function_path(f.name, file_name);
    await file_write_json(path, npc);
    return path;
  }
  let paths = await list_map_async(pool, npc_write);
  return paths;
}
