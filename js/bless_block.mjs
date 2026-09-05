import { bless_block_doors } from "./bless_block_doors.mjs";
import { bless_block_walls } from "./bless_block_walls.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function bless_block(x, y, block) {
  arguments_assert(arguments, 3);
  ("One block, given as the tiles it covers - a row of buildings facing south, a pavement");
  ("running the whole length of their fronts, and the door each building opens onto.");
  ("The tile named is the north-west corner of the first building, and everything else is");
  ("measured from it going east and south.");
  ("How many buildings there are is NOT written here. It is how many buildings the ladder");
  ("says a block holds, so the thing the player looks at and the thing the prayer counts");
  ("cannot disagree - and covering every building in sight is exactly what earns the block.");
  ("Written down twice, one of them would be corrected one day and the other would not, and");
  ("the game would announce a block earned with a building still standing there unprayed");
  ("for.");
  ("The door is the pavement tile in front of a building's own doorway, and it is the whole");
  ("of what a building means to somebody living in it. Nobody goes inside - there is no");
  ("inside - so a home here is a doorstep, which is where a person stands when they are");
  ("outside their own house rather than out walking.");
  ("It is read OFF the building rather than worked out from the same sum a second time, so");
  ("the square somebody stands on is always the one directly below the door they stand at.");
  ("Two sums would agree today and disagree the day a building stops being an odd number of");
  ("tiles wide, and a doorstep beside the wrong door is a wrong address nothing would");
  ("report.");
  ("Buildings face SOUTH because the player is set down on the pavement looking north: the");
  ("fronts, the doors and the people standing at them are then all in view at once, and a");
  ("row seen from behind would be a wall.");
  ("The gaps between the buildings are named as ALLEYS and given back, so that whoever lays");
  ("the block down lays them too. Left out, they are whatever the world already had there -");
  ("and a world generated fresh each time puts a lake behind the row as readily as grass, so");
  ("the street would open every few games with water standing between the houses. They are");
  ("also the only way through the row, so paving them is what keeps the ground north of the");
  ("block reachable from the pavement in front of it.");
  ("A block is now FOUR bands deep in front of its houses rather than one. Nearest the fronts");
  ("is a row of grass, then the pavement, then the road; and crossing the grass, a paved path");
  ("from every doorstep to the pavement. They are given back separately because they are made");
  ("of different things, and named together here because they are one street.");
  ("The road is walkable and nothing drives on it. It is there because a row of houses with a");
  ("pavement and nothing beyond it reads as a corridor - the pavement is the edge of the world");
  ("rather than the edge of a road. A grey band south of it says the street goes on, and it");
  ("costs the player nothing to walk across.");
  let r = bless_block_walls(x, y, block);
  let walls = property_get(r, "walls");
  let r2 = bless_block_doors(r, x);
  let doors = property_get(r2, "doors");
  let alleys = property_get(r2, "alleys");
  let sidewalk = property_get(r2, "sidewalk");
  let yard = property_get(r2, "yard");
  let road = property_get(r2, "road");
  let paths = property_get(r2, "paths");
  let buildings = property_get(r2, "buildings");
  let laid = {
    buildings: buildings,
    walls: walls,
    alleys: alleys,
    yard: yard,
    paths: paths,
    sidewalk: sidewalk,
    road: road,
    doors: doors,
  };
  return laid;
}
