export function g_directions() {
  "the four character facings, as the rotation-PNG basenames under characters/<img>/rotations/ — one source for preloading every facing (g_character_img_preload). g_direction returns one of these from a move's dx/dy";
  return ["south", "north", "east", "west"];
}
