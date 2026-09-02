import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_g_bless_doors_draw(layer, blocks) {
  arguments_assert(arguments, 2);
  ("Draws a door on every doorway in the street - a panelled leaf in a pale frame, with a");
  ("handle, standing on the ground and set into the wall around it.");
  ("The doorway was a square of WOOD and nothing else, and a square of wood is not a door.");
  ("It was the same size and shape as the bricks either side of it and differed from them");
  ("only in material, so what a player saw was a wall built out of two things rather than a");
  ("wall with a way in. That mattered more here than it would in most games: the row of");
  ("doors along a building is the one thing on this map that says how many homes are behind");
  ("it, and the whole ladder the prayer climbs is meant to be readable off the street");
  ("without a word being written. A mark nobody reads as a door counts nothing.");
  ("It is DRAWN rather than pictured, because there is no picture of a door to be had - the");
  ("art this game is built from is seamless ground textures, every one of them a material");
  ("rather than a thing. Borrowing the nearest-looking one would put ice or water on a wall");
  ("and hope it read as glass. Drawn, it is the shape of a door at whatever size the map is");
  ("being shown at, and it owes nothing to a file that has to be made first.");
  ("Every measurement is a FRACTION of a square rather than a number of pixels, for the same");
  ("reason the rest of this map is: the tile is drawn at whatever size the screen has room");
  ("for, so a door written in pixels is a keyhole on a tablet and a barn door on a phone.");
  ("The square underneath is now the building's own WALL. It used to be left as wood, on the");
  ("reasoning that a door is made of wood so the material was right; a drawn door covers");
  ("less than the whole square, so what that left was a wooden border showing around the");
  ("edges of every door in the street. A door set into the wall reads as a way through the");
  ("wall, which is what it is.");
  ("Nothing about which squares are SOLID changes either way. A doorway was solid when it");
  ("was wood and is solid now that it is brick - the way into a building here is a place a");
  ("prayer is aimed at rather than a place anybody walks through.");
  ("The leaf is DARK and its frame is PALE, and that pairing is what makes it legible on");
  ("every street rather than on the one it was drawn against. Fronts come in pink brick,");
  ("grey stone and cream plaster, and all three are pale; a dark opening reads against all");
  ("of them, and the pale frame reads back against the dark wood of the roof above.");
  ("It stands on the BOTTOM of its square and stops short of the top. A door meets the");
  ("ground - that is most of what tells a door from a window - and the gap left above it is");
  ("the lintel, which is the rest of what tells them apart.");
  ("The handle is small and warm and off to one side. It is the detail that costs least and");
  ("says most: an arch with a dot beside it is a door, and the same arch without one is an");
  ("alcove.");
  ("Drawn ONCE, when the street is built, and never again. A door does not move, is not");
  ("earned and cannot be prayed for, so it belongs with the ground rather than with the");
  ("marks that are worked out afresh on every step.");
  ("It is laid at the same depth as the lit ground, which is above the tiles and below the");
  ("people. So a house that has been prayed for lights its own doors along with the rest of");
  ("it, and a person standing on the doorstep stands in front of the door they belong to.");
  let size = g_img_square_size_css();
  let frame = text_combine_multiple([
    "0 0 0 calc((",
    size,
    ") * 0.035) rgba(255, 241, 214, 0.92)",
  ]);
  let sunk = text_combine_multiple([
    "inset 0 calc((",
    size,
    ") * 0.06) calc((",
    size,
    ") * 0.1) rgba(0, 0, 0, 0.55)",
  ]);
  let shadow = text_combine_multiple([frame, ", ", sunk]);
  let knob_size = text_combine_multiple(["calc((", size, ") * 0.085)"]);
  function doorway_draw(tile) {
    let opening = html_div(layer);
    g_img_square_style_position(opening, tile, "ground_tint");
    html_style_assign(opening, {
      "pointer-events": "none",
    });
    let leaf = html_div(opening);
    html_style_assign(leaf, {
      position: "absolute",
      left: "21%",
      width: "58%",
      top: "17%",
      height: "83%",
      background: "linear-gradient(180deg, #573118 0%, #331808 100%)",
      "border-radius": "46% 46% 0 0 / 22% 22% 0 0",
      "box-shadow": shadow,
      "pointer-events": "none",
    });
    let knob = html_div(leaf);
    html_style_assign(knob, {
      position: "absolute",
      right: "13%",
      top: "50%",
      width: knob_size,
      height: knob_size,
      "border-radius": "50%",
      background: "rgba(255, 216, 133, 0.95)",
      "pointer-events": "none",
    });
  }
  function building_draw(building) {
    let doorways = property_get(building, "doorways");
    each(doorways, doorway_draw);
  }
  function block_draw(block) {
    let buildings = property_get(block, "buildings");
    each(buildings, building_draw);
  }
  each(blocks, block_draw);
}
