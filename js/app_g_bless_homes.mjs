import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { app_g_bless_color_blessed_home } from "./app_g_bless_color_blessed_home.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { each } from "./each.mjs";
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
  ("It sits at the ground layer, above the tiles and below the people, so a lit house never");
  ("hides whoever is standing at its door.");
  ("Each square also carries a soft pale bloom in the middle of it and a brighter rim just");
  ("inside its own edges. A flat wash of one colour over several squares reads as a stain on");
  ("the map; a bloom per square reads as ground that is lit, and the rim is what makes it");
  ("read as lit rather than merely tinted - a lit thing is brightest where it ends, and");
  ("without that edge the square is only a coloured patch. The squares then draw their own");
  ("quiet grid, which is the shape of the house being told in the only units this map has.");
  ("Both lights are laid INSIDE the square and never around it, which is what stops two");
  ("neighbours doubling up. The lights here are see-through, so anything spilling past an");
  ("edge would land on the square next door on top of its own and paint that overlap");
  ("brighter than either - and a finished house would come out in bands rather than in one");
  ("colour.");
  ("Measured as a fraction of a square rather than in fixed units, because the map is drawn");
  ("at whatever size the screen has room for: written in pixels this is a hairline on a");
  ("tablet and a smear on a phone.");
  html_clear(homes);
  let tiles = bless_blessed_tiles(blessed, blocks);
  let color = app_g_bless_color_blessed_home();
  let size = g_img_square_size_css();
  let bloom = text_combine_multiple([
    "inset 0 0 calc((",
    size,
    ") * 0.38) rgba(255, 246, 214, 0.66), inset 0 0 calc((",
    size,
    ") * 0.09) rgba(255, 250, 232, 0.55)",
  ]);
  function tile_light(tile) {
    let square = html_div(homes);
    g_img_square_style_position(square, tile, "ground_tint");
    html_style_assign(square, {
      background: color,
      "box-shadow": bloom,
      "pointer-events": "none",
    });
  }
  each(tiles, tile_light);
}
