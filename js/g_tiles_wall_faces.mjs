import { fn_name } from "./fn_name.mjs";
import { list_flat } from "./list_flat.mjs";
import { g_tiles_wall_faces_groups } from "./g_tiles_wall_faces_groups.mjs";
export function g_tiles_wall_faces() {
  "Every material a building's front can be made of, whichever street it stands on.";
  "This is the SOLIDITY question and not the picture one. A front is a wall, so being on";
  ("this list is what stops a house being walked through - `",
    fn_name("g_tiles_walls"),
    "` reads it and");
  ("`",
    fn_name("g_tiles_unwalkable"),
    "` reads that. Which front wears which material is a question about");
  ("one street, and it is asked of `",
    fn_name("g_tiles_wall_faces_groups"),
    "` instead.");
  ("It is DERIVED from the groups rather than written out beside them, which is the whole");
  ("reason the two are separate functions rather than one list used twice. Written out, a");
  ("material added to a street and forgotten here would be a front people walked straight");
  ("through, and nothing anywhere would say so.");
  let groups = g_tiles_wall_faces_groups();
  let faces = list_flat(groups);
  return faces;
}
