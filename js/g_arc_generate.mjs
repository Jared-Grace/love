import { g_plant_arcs_all } from "./g_plant_arcs_all.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_arc_generate() {
  "Writes every plant's cast down as a file, one file to a plant, so who a plant holds is a thing that EXISTS rather than a thing that gets worked out again.";
  "Casts are worked out from the plant and the settings, so this could be recomputed instead of stored. It is stored because of what will hang on it: the turns themselves are authored, not derived, and they only fit the arc they were written for. Change a setting later and a recomputed skeleton silently stops matching content that cannot follow it. Writing the skeleton down is what keeps the two from drifting apart unnoticed.";
  "A plant is filed under its FIRST chapter, which is a real chapter code and so fits the address every other piece of the game's written content already uses - and the one the backup already walks. A plant naming itself would have needed a second address scheme for one file type.";
  let arcs = await g_plant_arcs_all();
  let f = g_arc_generate;
  async function plant_write(plant_arcs) {
    let chapters = property_get(plant_arcs, "chapters");
    let first = chapters[0];
    let path = local_function_path_json(first, f);
    await file_write_json(path, plant_arcs);
    return path;
  }
  let paths = await list_map_async(arcs, plant_write);
  return paths;
}
