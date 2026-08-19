import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { g_tiles_wall_faces_groups } from "./g_tiles_wall_faces_groups.mjs";
export function bless_block_faces(index) {
  arguments_assert(arguments, 1);
  ("The materials the fronts of the block at this place in the world are made of.");
  ("A whole group rather than a material, because a street is told apart from the next one");
  ("by the set it is built from and not by any single house in it. The buildings inside it");
  ("then take their own from this, in turn.");
  ("Counted round rather than run off the end, so the world may grow to more blocks than");
  ("there are groups and this still answers. Two streets far apart looking alike costs the");
  ("player nothing; two ADJACENT ones looking alike is what the groups exist to prevent, and");
  ("counting round keeps neighbours different for as long as there are groups to spend.");
  let groups = g_tiles_wall_faces_groups();
  let faces = list_get_wrap(groups, index);
  return faces;
}
