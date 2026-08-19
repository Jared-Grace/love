import { arguments_assert } from "./arguments_assert.mjs";
import { each_index } from "./each_index.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_tiles_pave } from "./app_g_bless_tiles_pave.mjs";
import { bless_block_faces } from "./bless_block_faces.mjs";
import { bless_building_face } from "./bless_building_face.mjs";
import { g_tile_door } from "./g_tile_door.mjs";
import { g_tile_wall } from "./g_tile_wall.mjs";
export function app_g_bless_buildings_raise(rows, buildings, block) {
  arguments_assert(arguments, 3);
  ("Writes a whole row of buildings into the ground - dark wood behind, its own material");
  ("across each front, and a wooden door in the middle of every one.");
  ("The body goes down FIRST and the front over it, which is the order somebody would build");
  ("in and also the order that is safe: a front is the last row of a building rather than a");
  ("thing standing beside it, so a body painted afterwards would rub the fronts out.");
  ("Which material a front wears comes from where the building stands in the row, so");
  ("neighbours never match and the same street is built every time. WHICH SET it is drawn");
  ("from comes from the block, which is what makes one street a different place from the");
  ("next rather than a second copy of it.");
  ("The block's materials are asked for ONCE and handed to every building in it, rather");
  ("than each house asking on its own behalf. Asked per house, a street could not be told");
  ("apart from a street that happened to agree with it - the set would be an accident of");
  ("five separate answers instead of a fact about the road.");
  ("The door is painted last and is the same on every building - on every block too, not");
  ("only in every row. A player finds a doorstep by looking for the one square that is not");
  ("the wall around it, and a door that changed with the street would make that one thing");
  ("to learn again on arriving somewhere new.");
  let item_body = g_tile_wall();
  let item_door = g_tile_door();
  let faces = bless_block_faces(block);
  function building_raise(building, index) {
    let body = property_get(building, "body");
    app_g_bless_tiles_pave(rows, body, item_body);
    let face = property_get(building, "face");
    let item_face = bless_building_face(faces, index);
    app_g_bless_tiles_pave(rows, face, item_face);
    let doorway = property_get(building, "doorway");
    let doorways = [doorway];
    app_g_bless_tiles_pave(rows, doorways, item_door);
  }
  each_index(buildings, building_raise);
}
