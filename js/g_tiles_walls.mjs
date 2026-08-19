import { list_concat } from "./list_concat.mjs";
import { g_tile_door } from "./g_tile_door.mjs";
import { g_tile_wall } from "./g_tile_wall.mjs";
import { g_tiles_wall_faces } from "./g_tiles_wall_faces.mjs";
export function g_tiles_walls() {
  "Every picture a building can wear - its body, the materials its front is made of, and";
  "its door.";
  "One list, and that is the whole reason it exists. Being solid is a fact about the";
  "ground, and it is decided by the picture; so a front given a new material that this did";
  "not know about would be a wall people walked straight through, and nothing would say so.";
  "Asked here, adding a material is one edit and walking learns about it for free.";
  "It is about how a building LOOKS and so it lists pictures rather than parts. Whether a";
  "square is a doorway or the middle of a wall changes nothing about standing on it.";
  let body = g_tile_wall();
  let door = g_tile_door();
  let faces = g_tiles_wall_faces();
  let named = [body, door];
  let walls = list_concat(named, faces);
  return walls;
}
