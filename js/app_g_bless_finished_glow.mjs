import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { list_max } from "./list_max.mjs";
import { g_z } from "./g_z.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { each } from "./each.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
export function app_g_bless_finished_glow(div_map, tiles, middle) {
  arguments_assert(arguments, 3);
  ("A light in the shape of the ground that has just been prayed for: the squares of the");
  ("house themselves come up gold and burn, rather than a circle being laid over them.");
  ("The shape is the message. A round light says a light happened somewhere near here; the");
  ("outline of the house says THIS house, and the player has just spent their prayer on a");
  ("person who lives in it. Every square that was counted is lit and nothing else is, so");
  ("what is glowing and what was prayed for are the same object.");
  ("Gold with a white edge, which is the light this game already puts around the face of");
  ("somebody who has been prayed for. The player has watched that mark appear on people");
  ("one at a time, and here it appears at the size of a building - so nobody has to be");
  ("told that a house full of people has just been covered.");
  ("The glow around the outside is put on the group and not on each square. A shadow drawn");
  ("per square would be drawn again into the seam every square shares with its neighbour,");
  ("and a house would come out with bright lines ruled across the middle of it. Put on the");
  ("group, the light follows the outline of the whole patch, which is the only edge there");
  ("really is.");
  ("It opens and then keeps opening as it goes, rather than arriving whole. A light that");
  ("arrives at full size reads as a panel opening and a light that opens outward reads as");
  ("something happening - and the player is being told that a prayer reached further than");
  ("the person it was said over, which is that same shape in words.");
  ("It grows only a little, because the shape is already the right size. Blown up the way");
  ("a round light could be, the outline stops being the house and becomes a blot, and the");
  ("one thing this is for is lost.");
  ("The growth is a scale about the middle of the patch, so the browser can do it on the");
  ("graphics card without laying the page out again. This page holds a whole street of");
  ("moving people, and laid out again on every frame the crowd stutters while the light");
  ("opens.");
  ("It is laid on the ground layer, so people standing in the middle of it are lit from");
  ("behind and never painted over. A light that erased the people would be saying the");
  ("opposite of what this game is about.");
  let gold = app_shared_color_gold_glow();
  let white = app_shared_color_white();
  let size = g_img_square_size_css();
  let near = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.22) ",
    white,
    ")",
  ]);
  let far = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.85) ",
    gold,
    ")",
  ]);
  let halo = text_combine_multiple([near, " ", far]);
  let x = property_get(middle, "x");
  let y = property_get(middle, "y");
  let x_middle = add(x, 0.5);
  let y_middle = add(y, 0.5);
  let origin = text_combine_multiple([
    "calc(",
    x_middle,
    " * (",
    size,
    ")) calc(",
    y_middle,
    " * (",
    size,
    "))",
  ]);
  function tile_y(tile) {
    let row = property_get(tile, "y");
    return row;
  }
  let rows = list_map(tiles, tile_y);
  let y_most = list_max(rows);
  let layer = g_z("ground_tint");
  let depth = text_combine_multiple(["calc(", layer, " + ", y_most, ")"]);
  let glow = html_div(div_map);
  html_style_assign(glow, {
    position: "absolute",
    left: "0",
    top: "0",
    width: "0",
    height: "0",
    "pointer-events": "none",
    "z-index": depth,
    "transform-origin": origin,
    filter: halo,
    opacity: "0",
    transform: "scale(0.6)",
    transition: "none",
  });
  function tile_square(tile) {
    let square = html_div(glow);
    g_img_square_style_position(square, tile, "ground_tint");
    html_style_assign(square, {
      background: gold,
      "pointer-events": "none",
    });
  }
  each(tiles, tile_square);
  html_reflow_force(glow);
  html_style_assign(glow, {
    transition: "transform 0.34s ease-out, opacity 0.34s ease-out",
    transform: "scale(1.08)",
    opacity: "0.95",
  });
  return glow;
}
