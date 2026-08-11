import { g_game_plant_passages } from "./g_game_plant_passages.mjs";
import { g_plant_arcs } from "./g_plant_arcs.mjs";
import { list_map } from "./list_map.mjs";
export async function g_plant_arcs_all() {
  "Every plant's cast, worked out in one pass over every book that has been grouped.";
  "All at once rather than a plant at a time, because the books are known before anybody plays. Nothing here waits on a save, a choice, or a day - so there is no reason to work a plant out at the moment it is reached, and every reason not to: generated one at a time, a change to a setting would leave the plants already made disagreeing with the ones still to come.";
  let plants = await g_game_plant_passages();
  let arcs = list_map(plants, g_plant_arcs);
  return arcs;
}
