import { g_tiles_roofs } from "./g_tiles_roofs.mjs";
import { list_concat } from "./list_concat.mjs";
import { g_tile_door } from "./g_tile_door.mjs";
import { g_tiles_wall_faces } from "./g_tiles_wall_faces.mjs";
export function g_tiles_walls() {
  "Every picture a building can wear - the materials its roof is made of, the materials";
  "its front is made of, and its door.";
  "One list, and that is the whole reason it exists. Being solid is a fact about the";
  "ground, and it is decided by the picture; so a front given a new material that this did";
  "not know about would be a wall people walked straight through, and nothing would say so.";
  "Asked here, adding a material is one edit and walking learns about it for free.";
  "It is about how a building LOOKS and so it lists pictures rather than parts. Whether a";
  "square is a doorway or the middle of a wall changes nothing about standing on it.";
  "The ROOF materials come in as a list rather than as one, and that is the only thing";
  "here that changed when streets started wearing different roofs. A roof is a wall - it";
  "is part of the building and nobody may stand on it - so every kind one can be made of";
  "has to arrive here, and arriving as a list is what stops a roof material added for the";
  "look of it being a roof the player walks over.";
  let door = g_tile_door();
  let roofs = g_tiles_roofs();
  let faces = g_tiles_wall_faces();
  let named = [door];
  let roofed = list_concat(named, roofs);
  let walls = list_concat(roofed, faces);
  return walls;
}
