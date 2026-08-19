import { g_water } from "./g_water.mjs";
import { g_tile_wall } from "./g_tile_wall.mjs";
export function g_tiles_unwalkable() {
  "Every kind of ground nobody can stand on.";
  "Water was the only one for a long time, and asking about it directly was the same";
  "question as asking whether somebody could walk there. It stopped being the same question";
  "the day a world grew buildings: a wall is not water, and a game that tested for water";
  "would have let people walk through houses.";
  "Kept as a list so that the answer is asked in one place. Walking, pathfinding, and";
  "deciding where anybody may be set down all read it, and a solid that only some of them";
  "knew about would give a world people could walk into but never be placed in.";
  "A world that has none of these kinds is unaffected by their being listed, which is why";
  "the gospel game's own maps walk exactly as they did before buildings existed.";
  let water = g_water();
  let wall = g_tile_wall();
  let kinds = [water, wall];
  return kinds;
}
