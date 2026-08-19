import { assert_json } from "./assert_json.mjs";
import { g_tiles_wall_faces_groups } from "./g_tiles_wall_faces_groups.mjs";
import { bless_pavements } from "./bless_pavements.mjs";
import { g_tiles_unwalkable } from "./g_tiles_unwalkable.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function bless_block_materials_gate_run() {
  "QA gate: one street of the prayer game can still be told from the next one by looking at it.";
  "The player earns the reach to bless a whole block, and the only way to spend it is to walk to another block and find somebody standing there. That walk is the price of the rung, so it has to be visibly a walk to SOMEWHERE - a second street built out of the first street's materials is the same street twice, and the player who paid for the journey is handed back what they already had.";
  "Nothing about that failure is loud. The world still builds, everybody still stands where they should, every gate that watches walking still passes, and what the player sees is a game that did not move. So it is watched here, by name, before anybody plays it.";
  "Two blocks are told apart by two things and both are checked. Their fronts must be drawn from sets that share nothing, because sharing even one material is a house on this street wearing the face of a house on that one. And their pavements must differ, because the ground is the widest thing a block is made of and the first thing seen on arriving.";
  "There must also be at least two of each to hand out, since both are taken in turn and counted round: one of either kind and every block in the world wears it.";
  "A pavement is checked against the solids as well, which is a different worry entirely. A pavement is walkable for the same reason grass is - it is simply not on the list of things nobody can stand on - so a material that happens to be on that list turns a street into a wall the player is standing in the middle of, with no error anywhere.";
  "Last, no front may be made of what its own street is paved with. A front that matches the ground it meets along its whole length stops reading as a front at all; seen in a browser, a row of five buildings came out looking like one long shed. Matching by name is the worst form of that and the only form a gate can see.";
  "Throws so the dispatcher seam exits nonzero.";
  let groups = g_tiles_wall_faces_groups();
  let groups_count = list_size(groups);
  let groups_enough = greater_than_equal(groups_count, 2);
  assert_json(groups_enough, {
    groups_count,
    hint: "there must be at least two groups of front materials, or every block in the world is fronted alike",
  });
  let faces = list_flat(groups);
  let faces_apart = list_unique_is(faces);
  assert_json(faces_apart, {
    faces,
    hint: "no material may appear in two groups or twice in one, or two streets can wear the same front",
  });
  let pavements = bless_pavements();
  let pavements_count = list_size(pavements);
  let pavements_enough = greater_than_equal(pavements_count, 2);
  assert_json(pavements_enough, {
    pavements_count,
    hint: "there must be at least two kinds of pavement, or every block in the world is paved alike",
  });
  let pavements_apart = list_unique_is(pavements);
  assert_json(pavements_apart, {
    pavements,
    hint: "no kind of pavement may be named twice, or two blocks in a row are paved the same",
  });
  let solids = g_tiles_unwalkable();
  let paved_solid = list_intersection(pavements, solids);
  let paved_walkable = list_empty_is(paved_solid);
  assert_json(paved_walkable, {
    paved_solid,
    hint: "a pavement made of a solid is a street nobody can walk down",
  });
  let paved_fronts = list_intersection(faces, pavements);
  let fronts_seen = list_empty_is(paved_fronts);
  assert_json(fronts_seen, {
    paved_fronts,
    hint: "a front made of what the street is paved with disappears into the ground it stands on",
  });
  ("How much was reached goes back with the verdict. Every check above passes by finding nothing wrong, and finding nothing wrong is also what happens when the lists it asks for come back empty - a materials list renamed, or moved somewhere this no longer looks. The word said is the same one either way, and these three numbers are the only part of the answer that falls on the day the reading breaks.");
  ("Counted from what was walked rather than from what was wrong. A count of faults is nought on every run that passes, so an answer holding only that has nothing in it that could ever drop.");
  let walked = {
    groups: groups_count,
    faces: list_size(faces),
    pavements: pavements_count,
  };
  return walked;
}
