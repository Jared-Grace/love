import { list_concat } from "./list_concat.mjs";
import { g_tiles_walls } from "./g_tiles_walls.mjs";
import { g_water } from "./g_water.mjs";
export function g_tiles_unwalkable() {
  "Every kind of ground nobody can stand on.";
  "Water was the only one for a long time, and asking about it directly was the same";
  "question as asking whether somebody could walk there. It stopped being the same question";
  "the day a world grew buildings: a wall is not water, and a game that tested for water";
  "would have let people walk through houses.";
  "Kept as a list so that the answer is asked in one place. Walking, pathfinding, and";
  "deciding where anybody may be set down all read it, and a solid that only some of them";
  "knew about would give a world people could walk into but never be placed in.";
  "Every wall comes in through ONE name rather than being spelled out here, so that giving";
  "a building a new material cannot leave a house standing that people walk through. This";
  "is the shorter of the two lists on purpose - it says what a solid IS, and what a wall";
  "looks like is somebody else's business.";
  "A world that has none of these kinds is unaffected by their being listed, which is why";
  "the gospel game's own maps walk exactly as they did before buildings existed.";
  let water = g_water();
  let waters = [water];
  let walls = g_tiles_walls();
  let kinds = list_concat(waters, walls);
  return kinds;
}
