import { tiles_rectangles } from "./tiles_rectangles.mjs";
import { g_img_rectangle_style_position } from "./g_img_rectangle_style_position.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_g_bless_color_blessed_home } from "./app_g_bless_color_blessed_home.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_max } from "./list_max.mjs";
import { g_z } from "./g_z.mjs";
import { html_div } from "./html_div.mjs";
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
  ("Each block also carries a soft pale bloom gathered in the middle of it and a brighter rim");
  ("just inside its own walls. A flat wash of one colour reads as a stain on the map; a bloom");
  ("reads as ground that is lit, and the rim is what makes it read as lit rather than merely");
  ("tinted - a lit thing is brightest where it ends, and without that edge the house is only");
  ("a coloured patch.");
  ("The house also throws light OUTWARDS, onto the plain ground around it, which is the");
  ("difference between a patch of the map being coloured in and a house standing there with");
  ("the lights on. Light that stops dead at a boundary is paint; light that carries a little");
  ("way past it and thins out is light.");
  ("That spill is thrown by the whole house AT ONCE rather than by each of its squares, and");
  ("that is the only way it can be done here. These lights are see-through, so a square");
  ("glowing on its own account would throw its glow onto the square next door on top of that");
  ("one's own, and the pair would come out brighter than either - a finished house drawn in");
  ("bands instead of in one colour. Asked of the whole shape, there is nothing to double:");
  ("the inside of the house has no boundaries left to glow at, and only the outline of the");
  ("house as a whole has any light coming off it.");
  ("The blocks are gathered under one wrapper for that reason and for no other. The wrapper");
  ("holds no colour of its own and is placed nowhere - it is the thing the spill is asked");
  ("of, and the blocks inside it stay exactly where their own coordinates put them.");
  ("The two lights that belong to a single block are still laid INSIDE it, for the same");
  ("doubling reason as before. Only the one belonging to the house as a whole goes outside.");
  ("Measured as a fraction of a square rather than in fixed units, because the map is drawn");
  ("at whatever size the screen has room for: written in pixels this is a hairline on a");
  ("tablet and a smear on a phone.");
  html_clear(homes);
  let tiles = bless_blessed_tiles(blessed, blocks);
  ("Nothing prayed for yet means nothing to draw, and it is worth leaving early rather than");
  ("drawing an empty glowing nothing: a wrapper asked for a spill is a whole layer of the");
  ("screen kept ready for it, and at the start of a game there is not one square to spill");
  ("from.");
  let none = list_empty_is(tiles);
  if (none) {
    return;
  }
  let color = app_g_bless_color_blessed_home();
  let size = g_img_square_size_css();
  let bloom = text_combine_multiple([
    "inset 0 0 calc((",
    size,
    ") * 0.38) rgba(255, 246, 214, 0.66), inset 0 0 calc((",
    size,
    ") * 0.09) rgba(255, 250, 232, 0.55)",
  ]);
  let close = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.15) rgba(255, 236, 190, 0.95))",
  ]);
  let wide = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.5) rgba(255, 190, 74, 0.82))",
  ]);
  let spill = text_combine_multiple([close, " ", wide]);
  ("The wrapper stands at the depth of the LOWEST of its own squares, which is where the");
  ("last of them would have stood on its own. Gathered together they can only be at one");
  ("depth, and taking the deepest keeps the house in front of everything it was in front of");
  ("before - the pale light of the cone the player is looking down, most of all.");
  function tile_y(tile) {
    let row = property_get(tile, "y");
    return row;
  }
  let rows = list_map(tiles, tile_y);
  let y_most = list_max(rows);
  let layer = g_z("ground_tint");
  let depth = text_combine_multiple(["calc(", layer, " + ", y_most, ")"]);
  let lit = html_div(homes);
  html_style_assign(lit, {
    position: "absolute",
    left: "0",
    top: "0",
    width: "0",
    height: "0",
    "pointer-events": "none",
    "z-index": depth,
    filter: spill,
  });
  ("The lit ground is laid down in whole BLOCKS rather than square by square, which is what");
  ("makes a finished house read as a building rather than as a run of tiles that happen to");
  ("match. The inner light belongs to the block: it gathers in the middle of the house and");
  ("brightens along the walls, and there is no seam down the middle of it because there is");
  ("no edge there to draw one on. Drawn per square that same light was drawn into every");
  ("shared edge as well, and a three-square household came out ruled into thirds.");
  ("Blocks joined along a SIDE only, which is what the shape actually is - a corner touch");
  ("is two houses meeting, not one wider one, and no rectangle can hold it anyway.");
  let rectangles = tiles_rectangles(tiles);
  function rectangle_light(rectangle) {
    let block = html_div(lit);
    g_img_rectangle_style_position(block, rectangle, "ground_tint");
    html_style_assign(block, {
      background: color,
      "box-shadow": bloom,
      "pointer-events": "none",
    });
  }
  each(rectangles, rectangle_light);
}
