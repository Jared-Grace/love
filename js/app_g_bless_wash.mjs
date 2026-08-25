import { property_get } from "./property_get.mjs";
import { bless_cone_ahead_across } from "./bless_cone_ahead_across.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { app_g_bless_color_looking } from "./app_g_bless_color_looking.mjs";
import { bless_cone_tiles } from "./bless_cone_tiles.mjs";
export function app_g_bless_wash(wash, cone) {
  arguments_assert(arguments, 2);
  ("Lights the ground the player is looking at, one pale square per tile the cone reaches.");
  ("EXACTLY one square per tile, and that is a rule about the drawing and not only about");
  ("the arithmetic. The squares are see-through, so two laid on the same tile make a paler");
  ("patch than a tile with one on it - and since the strength of a square now says how far");
  ("off it is, a doubled tile does not merely look wrong, it says the wrong distance.");
  ("Anything added to this list has to be checked for tiles already in it, and the cheapest");
  ("way to pass that check is to add nothing.");
  ("The people being held are NOT lit separately for that reason. They may not walk out of");
  ("the cone, so the ground they stand on is cone ground already, and lighting it again");
  ("only made a second layer on the squares they happened to be on.");
  ("Aiming your eyes is this game's whole verb, and a facing you cannot see is a verb the");
  ("player has to work out from a compass. The wash makes the answer to who you can pray");
  ("for a shape on the screen rather than a calculation.");
  ("Cleared and drawn again rather than moved, because the cone changes shape as well as");
  ("place - turning swings it round and walking carries it along - and there is no cheaper");
  ("thing to reuse than a plain coloured square.");
  ("It sits at the ground layer, above the tiles and below the people, so a lit tile never");
  ("hides the person standing on it.");
  html_clear(wash);
  let tiles = bless_cone_tiles(cone);
  let depth = property_get(cone, "depth");
  function tile_light(tile) {
    let square = html_div(wash);
    g_img_square_style_position(square, tile, "ground_tint");
    ("Which row of the cone the tile is in is asked of the cone's own arithmetic rather than");
    ("worked out from the two sets of coordinates here, so the drawing cannot come to");
    ("disagree with the rule about who can be seen.");
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    let r = bless_cone_ahead_across(cone, x, y);
    let ahead = property_get(r, "ahead");
    html_style_assign(square, {
      background: app_g_bless_color_looking(ahead, depth),
      "pointer-events": "none",
    });
  }
  each(tiles, tile_light);
}
