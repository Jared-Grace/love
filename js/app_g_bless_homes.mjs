import { arguments_assert } from "./arguments_assert.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { app_g_bless_homes_draw } from "./app_g_bless_homes_draw.mjs";
export function app_g_bless_homes(homes, blessed, blocks) {
  arguments_assert(arguments, 3);
  ("Lights the ground of every house that has been prayed for, a third of a building at a");
  ("time, so the street fills up as the work goes along it.");
  ("This is what makes the middle of the ladder visible at all. The rungs are named after");
  ("PLACES - household, building, block - but until now the only thing the map ever marked");
  ("was faces, so a player could finish a whole building and the building would look exactly");
  ("as it had a moment before. Progress you cannot see is progress the player has to keep in");
  ("their own head, and a house that fills up in thirds keeps it for them.");
  ("Ground rather than a badge, because ground does not walk away. A person carries their");
  ("mark around with them and out of sight; a house stays where the work was done, so a");
  ("player can look down a street and see how far along it they have got.");
  ("Cleared and drawn again whole rather than added to, exactly like the wash. What is lit");
  ("is worked out from the record every time, so redrawing cannot drift away from what has");
  ("actually been prayed - and since a house is never unlit, the whole cost of doing it this");
  ("way is the drawing.");
  ("Reading the record and drawing the picture are two jobs and are kept apart, because a");
  ("celebration needs the second one without the first: it fades a house up on a layer of");
  ("its own while the street is still showing the house unlit. So what is lit is worked out");
  ("here and handed over, and the drawing below knows only about squares.");
  let tiles = bless_blessed_tiles(blessed, blocks);
  app_g_bless_homes_draw(homes, tiles);
}
