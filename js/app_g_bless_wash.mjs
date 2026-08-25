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
  ("patch than a tile with one on it, and the street reads as having several strengths of");
  ("light in it when it is meant to have one. Anything added to this list has to be checked");
  ("for tiles already in it, and the cheapest way to pass that check is to add nothing.");
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
  function tile_light(tile) {
    let square = html_div(wash);
    g_img_square_style_position(square, tile, "ground_tint");
    html_style_assign(square, {
      background: app_g_bless_color_looking(),
      "pointer-events": "none",
    });
  }
  each(tiles, tile_light);
}
