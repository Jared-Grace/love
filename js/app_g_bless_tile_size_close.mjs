import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_bless_tile_size_close() {
  "How large one tile is drawn for the moment a finished house is being celebrated.";
  arguments_assert(arguments, 0);
  ("Closer than the size the street is played at, because what the two sizes are for is");
  ("different. Playing, the screen has to hold the whole cone and ground either side of it,");
  ("since seeing how far you can see IS the mechanic. Celebrating, nothing is being looked");
  ("for at all - there is one house on the screen and the player is being asked to look at");
  ("it - so the room the cone needed is room the house can have instead.");
  ("The step in is small on purpose. The widest buildings on this street are already wider");
  ("than the narrowest phone at the playing size, so a hard zoom would take the far end of");
  ("one off the screen at the exact moment it lights, and a house half seen lighting is a");
  ("house the player cannot tell has finished. A lean of about a fifth is enough to be");
  ("watched happening and small enough to keep the shape whole.");
  ("Both halves move together with the playing size rather than only the pixel one. A phone");
  ("narrow enough to be sized by its width would otherwise not come in at all, and the");
  ("phone is where this is watched.");
  let size = "min(40px, 100vw / 9)";
  return size;
}
