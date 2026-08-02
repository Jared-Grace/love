import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { g_arc_lengths } from "./g_arc_lengths.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_arc_generate() {
  "Writes every grouped chapter's arc lengths down as a file, one file to a chapter, so the cast a chapter carries is a thing that EXISTS rather than a thing that gets worked out again.";
  "Arc lengths are worked out from the chapter and the settings, so this could be recomputed instead of stored. It is stored because of what will hang on it: the turns themselves are authored, not derived, and they only fit the arc they were written for. The moment a setting changes, a recomputed skeleton stops matching content that cannot be recomputed. Writing the skeleton down is what keeps the two from drifting apart silently.";
  "One file to a CHAPTER, because that is the address every other piece of the game's written content already uses and the one the backup already walks. If a plant turns out to span several chapters, a plant is a grouping OVER these files rather than a different file - the chapter is still where the arcs come from.";
  let groups_todo = await g_sermon_groups_todo();
  let chapters = property_get(groups_todo, "done");
  let f = g_arc_generate;
  async function chapter_write(chapter) {
    let arcs = await g_arc_lengths(chapter);
    let path = local_function_path_json(chapter, f);
    await file_write_json(path, arcs);
    return path;
  }
  let paths = await list_map_async(chapters, chapter_write);
  return paths;
}
