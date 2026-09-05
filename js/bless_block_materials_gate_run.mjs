import { bless_yard_grass } from "./bless_yard_grass.mjs";
import { list_concat } from "./list_concat.mjs";
import { bless_roads } from "./bless_roads.mjs";
import { bless_block_faces } from "./bless_block_faces.mjs";
import { range_map } from "./range_map.mjs";
import { g_tiles_roofs } from "./g_tiles_roofs.mjs";
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
  ("A ROOF is a third thing a street is told apart by, and it is held to the same three rules the other two are. There must be at least two kinds or every block in the world is roofed alike; no kind may be named twice, or two blocks in a row wear the same roof; and no roof may be made of what its own street is fronted or paved with - a roof matching the wall under it is the oblong of flat colour the roof material exists to break up, and a roof matching the ground is a house with no top.");
  ("The COUNT of them is not checked against the others, and the reason is worth writing down. Three roofs against two pavements is what makes a street stop repeating every second block, and that is a choice about how far a player must walk to arrive somewhere new rather than a rule about materials. A gate that pinned the two numbers together would refuse the very thing they were made unequal for.");
  let roofs = g_tiles_roofs();
  let roofs_count = list_size(roofs);
  let roofs_enough = greater_than_equal(roofs_count, 2);
  assert_json(roofs_enough, {
    roofs_count,
    hint: "there must be at least two kinds of roof, or every block in the world is roofed alike",
  });
  let roofs_apart = list_unique_is(roofs);
  assert_json(roofs_apart, {
    roofs,
    hint: "no kind of roof may be named twice, or two blocks in a row are roofed the same",
  });
  let roofed_fronts = list_intersection(roofs, faces);
  let roofs_seen = list_empty_is(roofed_fronts);
  assert_json(roofs_seen, {
    roofed_fronts,
    hint: "a roof made of what the walls under it are made of leaves a house reading as flat ground",
  });
  let roofed_ground = list_intersection(roofs, pavements);
  let roofs_standing = list_empty_is(roofed_ground);
  assert_json(roofs_standing, {
    roofed_ground,
    hint: "a roof made of what the street is paved with is a house with no top on it",
  });
  ("The ROAD is the fourth thing, and it is the widest band of ground a street has - wider than the pavement, since it is deeper and just as long. So it is held to every rule the pavement is held to, for the same reasons: at least two of them or every block in the world is surfaced alike, none named twice or two blocks in a row are, none made of a solid or the road is a wall the player is standing on, and none matching a front, a pavement or a roof anywhere in the game.");
  ("Matching the PAVEMENT is the one that matters most here and the only one a player would notice at a glance. The road runs directly against the pavement along its whole length, so a road and a pavement of the same material are one grey field seven rows deep with the houses floating at the top of it - and the garden paths crossing it would be the only thing left saying where the pavement was.");
  let roads = bless_roads();
  let roads_count = list_size(roads);
  let roads_enough = greater_than_equal(roads_count, 2);
  assert_json(roads_enough, {
    roads_count,
    hint: "there must be at least two road surfaces, or every block in the world is roaded alike",
  });
  let roads_apart = list_unique_is(roads);
  assert_json(roads_apart, {
    roads,
    hint: "no road surface may be named twice, or two blocks in a row have the same road",
  });
  let roaded_solid = list_intersection(roads, solids);
  let roads_walkable = list_empty_is(roaded_solid);
  assert_json(roads_walkable, {
    roaded_solid,
    hint: "a road made of a solid is a wall across the front of every house on the street",
  });
  let roaded_ground = list_intersection(roads, pavements);
  let roads_edged = list_empty_is(roaded_ground);
  assert_json(roads_edged, {
    roaded_ground,
    hint: "a road made of what the street is paved with leaves no edge between the pavement and the road",
  });
  let roaded_fronts = list_intersection(roads, faces);
  let roads_grounded = list_empty_is(roaded_fronts);
  assert_json(roads_grounded, {
    roaded_fronts,
    hint: "a road made of what the houses are fronted with reads as the fronts lying flat on the ground",
  });
  let roaded_roofs = list_intersection(roads, roofs);
  let roads_below = list_empty_is(roaded_roofs);
  assert_json(roads_below, {
    roaded_roofs,
    hint: "a road made of what the roofs are made of ties the top of a house to the ground in front of it",
  });
  ("The DRIVEWAY is the other material that is the same on every street, and it is checked against everything a street is built from for one reason above the rest: it crosses every band there is. A drive runs over the pavement and the grass and stops against the road, so a drive the colour of any of those is a drive that vanishes for part of its length and reappears - which reads as a broken path rather than as one thing.");
  let driveways = [bless_driveway_paving()];
  let driveway_solid = list_intersection(driveways, solids);
  let driveway_walkable = list_empty_is(driveway_solid);
  assert_json(driveway_walkable, {
    driveway_solid,
    hint: "a driveway made of a solid is a wall across the way out of every house on the street",
  });
  let driveway_ground = list_intersection(
    driveways,
    list_concat(pavements, roads),
  );
  let driveway_apart = list_empty_is(driveway_ground);
  assert_json(driveway_apart, {
    driveway_ground,
    hint: "a driveway made of what the street is paved or roaded with disappears where it crosses it",
  });
  let driveway_fronts = list_intersection(driveways, list_concat(faces, roofs));
  let driveway_below = list_empty_is(driveway_fronts);
  assert_json(driveway_below, {
    driveway_fronts,
    hint: "a driveway made of what a house is fronted or roofed with reads as part of the house lying on the ground",
  });
  ("The GRASS is the one material here that is deliberately the same on every street, so nothing about it is checked for variety. What is checked is that it is not any of the others: a yard the colour of the pavement or of the road leaves the paths crossing it invisible, a yard the colour of a front leaves a house with no bottom edge, and a yard on the list of solids fences every household inside its own garden with no error anywhere.");
  let grass = bless_yard_grass();
  let grasses = [grass];
  let grassed_solid = list_intersection(grasses, solids);
  let grass_walkable = list_empty_is(grassed_solid);
  assert_json(grass_walkable, {
    grassed_solid,
    hint: "a yard made of a solid is a garden nobody can cross to their own front door",
  });
  let right = list_concat(pavements, roads);
  let grassed_ground = list_intersection(grasses, right);
  let grass_apart = list_empty_is(grassed_ground);
  assert_json(grass_apart, {
    grassed_ground,
    hint: "a yard made of what the street is paved or roaded with leaves the garden paths invisible",
  });
  let grassed_fronts = list_intersection(grasses, faces);
  let grass_below = list_empty_is(grassed_fronts);
  assert_json(grass_below, {
    grassed_fronts,
    hint: "a yard made of what the houses are fronted with leaves a house with no bottom edge",
  });
  ("Each group is also handed to the street that would use it, one for every group there is, rather than having its length measured here. A group shorter than a street runs out of materials and starts over from the beginning at a distance the player can see both ends of at once - which is the fault reported as the second house and the last house of every road wearing the same brick. The chooser a street asks already refuses that, so it is asked rather than asked again, and how many materials a street needs stays written in one place.");
  ("Every group is asked for, and not only the ones the world reaches today. A group no block lands on is reached the day a third block is added, and a gate that watches only what is in use goes quiet exactly when the world grows.");
  function street_faces_at(group_index) {
    let street = bless_block_faces(group_index);
    let street_size = list_size(street);
    return street_size;
  }
  let street_faces = range_map(groups_count, street_faces_at);
  ("How much was reached goes back with the verdict. Every check above passes by finding nothing wrong, and finding nothing wrong is also what happens when the lists it asks for come back empty - a materials list renamed, or moved somewhere this no longer looks. The word said is the same one either way, and these three numbers are the only part of the answer that falls on the day the reading breaks.");
  ("Counted from what was walked rather than from what was wrong. A count of faults is nought on every run that passes, so an answer holding only that has nothing in it that could ever drop.");
  let walked = {
    groups: groups_count,
    faces: list_size(faces),
    pavements: pavements_count,
    roofs: roofs_count,
    roads: roads_count,
    street_faces: street_faces,
  };
  return walked;
}
