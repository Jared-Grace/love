import { arguments_assert } from "./arguments_assert.mjs";
import { g_tiles_wall_faces_groups } from "./g_tiles_wall_faces_groups.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { list_size_greater_than_assert_json } from "./list_size_greater_than_assert_json.mjs";
export function bless_block_faces(index) {
  arguments_assert(arguments, 1);
  ("The materials the fronts of the block at this place in the world are made of.");
  ("A whole group rather than a material, because a street is told apart from the next one by the set it is built from and not by any single house in it. The buildings inside it then take their own from this, in turn.");
  ("Counted round rather than run off the end, so the world may grow to more blocks than there are groups and this still answers. Two streets far apart looking alike costs the player nothing; two ADJACENT ones looking alike is what the groups exist to prevent, and counting round keeps neighbours different for as long as there are groups to spend.");
  ("The group is refused unless it holds a material for every building on the street. Inside a street the turn comes back round the moment it runs out, and it comes back round at the far end of a row the player can see all of at once - five houses out of three materials put the same brick on the second house and on the last one. Counting round is right BETWEEN streets, where nobody can see both at once, and wrong INSIDE one.");
  ("It is checked HERE rather than where the materials are written down, because how many buildings a street has is a fact about the praying game and the materials are pictures the whole game shares. Asked the other way round, the pictures would have to know what a street is.");
  let groups = g_tiles_wall_faces_groups();
  let faces = list_get_wrap(groups, index);
  let sizes = bless_place_sizes();
  let per_block = property_get(sizes, "block");
  let least = subtract(per_block, 1);
  list_size_greater_than_assert_json(faces, least, index);
  return faces;
}
