import { g_tiles_wall_faces_groups } from "./g_tiles_wall_faces_groups.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
import { g_tiles_unwalkable } from "./g_tiles_unwalkable.mjs";
import { g_tiles_roofs } from "./g_tiles_roofs.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bless_roads } from "./bless_roads.mjs";
import { list_concat } from "./list_concat.mjs";
import { bless_concrete_paving } from "./bless_concrete_paving.mjs";
import { bless_yard_grass } from "./bless_yard_grass.mjs";
import { bless_block_faces } from "./bless_block_faces.mjs";
import { range_map } from "./range_map.mjs";
export function bless_block_materials_gate_run() {
  "QA gate: one street of the prayer game can still be told from the next one by looking at it, and no two things a street is built from are drawn in the same material.";
  "The player earns the reach to bless a whole block, and the only way to spend it is to walk to another block and find somebody standing there. That walk is the price of the rung, so it has to be visibly a walk to SOMEWHERE - a second street built out of the first street's materials is the same street twice, and the player who paid for the journey is handed back what they already had.";
  "Nothing about that failure is loud. The world still builds, everybody still stands where they should, every gate that watches walking still passes, and what the player sees is a game that did not move. So it is watched here, by name, before anybody plays it.";
  "THREE things tell two blocks apart and all three are checked: the fronts of the houses, the roofs on them, and the road. Each is drawn from a set with at least two members in it, taken in turn and counted round, so that a block and its neighbour never land on the same one.";
  "The pavement used to be a fourth and it is not any more. It is now the same concrete on every street, because a pavement and a driveway are the same poured ground and the drives were never going to vary - a square-wide strip is far too small a thing to tell one road from another by. The road took over the job: it is the widest band of ground a block has, so it is the one that carries the difference.";
  "The rest of the checks are one rule asked over and over: no two DIFFERENT things may be made of the same material. A roof the colour of the wall under it is the oblong of flat colour a roof exists to break up; a road the colour of the grass leaves nothing saying where the kerb is; a drive the colour of the lawn it crosses is a drive that vanishes for part of its length. Matching by name is the worst form of that and the only form a gate can see.";
  "Everything a person stands on is also checked against the SOLIDS, which is a different worry entirely. Ground here is walkable for one reason - it is simply not on the list of things nobody can stand on - so a material that happens to be on that list turns a street into a wall the player is standing in the middle of, with no error anywhere.";
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
  let solids = g_tiles_unwalkable();
  ("A ROOF is held to the same three rules a road is. There must be at least two kinds or every block in the world is roofed alike; no kind may be named twice, or two blocks in a row wear the same roof; and no roof may be made of what its own street is fronted with.");
  ("The COUNT of them is not checked against the road's, and the reason is worth writing down. Three roofs against two roads is what makes a street stop repeating every second block, and that is a choice about how far a player must walk to arrive somewhere new rather than a rule about materials. A gate that pinned the two numbers together would refuse the very thing they were made unequal for.");
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
  ("The ROAD is the widest band of ground a street has and the one thing left that changes from block to block, so it carries every rule about telling streets apart on its own: at least two of them or every block in the world is surfaced alike, none named twice or two blocks in a row are, none made of a solid or the road is a wall the player is standing on, and none matching a front or a roof anywhere in the game.");
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
  let houses = list_concat(faces, roofs);
  let roaded_houses = list_intersection(roads, houses);
  let roads_grounded = list_empty_is(roaded_houses);
  assert_json(roads_grounded, {
    roaded_houses,
    hint: "a road made of what the houses are fronted or roofed with ties the houses to the ground in front of them",
  });
  ("The CONCRETE is the pavement and the driveways together, one material for the whole game. It is checked against everything a street is built from for one reason above the rest: it crosses every band there is. A drive runs from a doorstep over the front lawn, along the pavement it matches, over the back lawn and stops against the kerb, so concrete the colour of any of those is a strip that vanishes for part of its length and reappears - which reads as a broken path rather than as one thing.");
  let concrete = bless_concrete_paving();
  let concretes = [concrete];
  let concrete_solid = list_intersection(concretes, solids);
  let concrete_walkable = list_empty_is(concrete_solid);
  assert_json(concrete_walkable, {
    concrete_solid,
    hint: "a pavement made of a solid is a wall across the way out of every house on the street",
  });
  let concrete_road = list_intersection(concretes, roads);
  let concrete_kerbed = list_empty_is(concrete_road);
  assert_json(concrete_kerbed, {
    concrete_road,
    hint: "concrete the colour of the road leaves nothing saying where the pavement stops and the traffic starts",
  });
  let concrete_houses = list_intersection(concretes, houses);
  let concrete_below = list_empty_is(concrete_houses);
  assert_json(concrete_below, {
    concrete_houses,
    hint: "concrete made of what a house is fronted or roofed with reads as part of the house lying on the ground",
  });
  ("The GRASS is the other material that is deliberately the same on every street, so nothing about it is checked for variety either. What is checked is that it is not any of the others: a lawn the colour of the concrete leaves the pavement and the drives invisible, a lawn the colour of the road leaves no kerb, a lawn the colour of a front leaves a house with no bottom edge, and a lawn on the list of solids fences every household inside its own garden with no error anywhere.");
  let grass = bless_yard_grass();
  let grasses = [grass];
  let grassed_solid = list_intersection(grasses, solids);
  let grass_walkable = list_empty_is(grassed_solid);
  assert_json(grass_walkable, {
    grassed_solid,
    hint: "a yard made of a solid is a garden nobody can cross to their own front door",
  });
  let poured = list_concat(roads, concretes);
  let grassed_ground = list_intersection(grasses, poured);
  let grass_apart = list_empty_is(grassed_ground);
  assert_json(grass_apart, {
    grassed_ground,
    hint: "a yard made of what the street is paved or roaded with leaves the pavement and the drives invisible",
  });
  let grassed_houses = list_intersection(grasses, houses);
  let grass_below = list_empty_is(grassed_houses);
  assert_json(grass_below, {
    grassed_houses,
    hint: "a yard made of what the houses are fronted or roofed with leaves a house with no bottom edge",
  });
  ("Each group of fronts is also handed to the street that would use it, one for every group there is, rather than having its length measured here. A group shorter than a street runs out of materials and starts over from the beginning at a distance the player can see both ends of at once - which is the fault reported as the second house and the last house of every road wearing the same brick. The chooser a street asks already refuses that, so it is asked rather than asked again, and how many materials a street needs stays written in one place.");
  ("Every group is asked for, and not only the ones the world reaches today. A group no block lands on is reached the day a third block is added, and a gate that watches only what is in use goes quiet exactly when the world grows.");
  function street_faces_at(group_index) {
    let street = bless_block_faces(group_index);
    let street_size = list_size(street);
    return street_size;
  }
  let street_faces = range_map(groups_count, street_faces_at);
  ("How much was reached goes back with the verdict. Every check above passes by finding nothing wrong, and finding nothing wrong is also what happens when the lists it asks for come back empty - a materials list renamed, or moved somewhere this no longer looks. These numbers are the only part of the answer that falls on the day the reading breaks.");
  ("Counted from what was walked rather than from what was wrong. A count of faults is nought on every run that passes, so an answer holding only that has nothing in it that could ever drop.");
  let walked = {
    groups: groups_count,
    faces: list_size(faces),
    roofs: roofs_count,
    roads: roads_count,
    concretes: list_size(concretes),
    grasses: list_size(grasses),
    street_faces: street_faces,
  };
  return walked;
}
