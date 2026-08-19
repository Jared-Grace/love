import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { mod } from "./mod.mjs";
import { g_tiles_wall_faces } from "./g_tiles_wall_faces.mjs";
export function bless_building_face(index) {
  arguments_assert(arguments, 1);
  ("What the front of the building at this place in the row is made of.");
  ("Taken in TURN rather than at random, and that is the whole of it: in turn, no two");
  ("neighbours can ever match, and the street is the same street every time the world is");
  ("made. Drawn at random, two houses side by side would sometimes come out identical -");
  ("which is exactly the pair a player needs to tell apart, since they are the two whose");
  ("doorsteps are nearest each other.");
  ("Counted round rather than run off the end, so a block may grow to any number of");
  ("buildings and this still answers.");
  let faces = g_tiles_wall_faces();
  let count = list_size(faces);
  let turn = mod(index, count);
  let face = list_get(faces, turn);
  return face;
}
