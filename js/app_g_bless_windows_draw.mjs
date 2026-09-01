import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_g_bless_windows_draw(layer, blocks) {
  arguments_assert(arguments, 2);
  ("Draws a window on every upper-floor opening in the street - a dark pane in a pale frame,");
  ("crossed by glazing bars, hung on the wall clear of the ground.");
  ("It is what a SECOND STOREY looks like from above. A tall house is drawn as two bands of");
  ("wall where a low one has one, and two bands of the same brick are simply a deeper");
  ("building; nothing about them says anybody lives up there. A row of windows along the");
  ("upper band is what turns that extra brick into a floor with homes on it.");
  ("So this counts the same way the doors do. A door on the bottom row is a family living on");
  ("the ground, and a window above it is a family living over their heads - the ladder the");
  ("prayer climbs, drawn on the street and readable without a word being written.");
  ("A window is not drawn on every upper square, only where somebody lives. Families do not");
  ("always divide evenly between the floors, and the odd one lives on the ground with an");
  ("empty floor above; that column keeps its door and goes without a window. The blank");
  ("stretch of wall is honest - it says the house has an upper floor with nobody home on");
  ("this side of it.");
  ("It sits directly ABOVE its own door and in the middle of the same three squares, never");
  ("at the left or right end of a building. Aligned with the door it belongs to it reads as");
  ("part of that home; anywhere else it reads as a pattern in the brickwork. And an opening");
  ("hard against the alley would read as the gap between two houses widening rather than as");
  ("a way into either of them.");
  ("It is drawn SMALLER than a door and CLEAR of the bottom of its square, and that is most");
  ("of what tells the two apart at a glance. A door meets the ground and a window hangs on a");
  ("wall; drawn the same size and reaching the same way down, an upper opening would read as");
  ("a second door somebody had put on the first floor.");
  ("The pane is DARK and the frame is PALE, matching the door, because the fronts of these");
  ("buildings come in pink brick, grey stone and cream plaster and every one of them is");
  ("pale. A dark opening reads against all three, and the pale frame holds it apart from the");
  ("dark wood of the roof behind.");
  ("The glazing bars are what make it glass rather than a hole. A plain dark rectangle on a");
  ("wall is a shuttered opening or a stain; the same rectangle in four panes is unmistakably");
  ("a window, and it costs two thin lines.");
  ("A faint pale wash lies across it from one corner, which is light on glass. It is the");
  ("cheapest thing here and the one that stops the pane reading as a hole punched through");
  ("the wall into the dark.");
  ("Every measurement is a FRACTION of a square rather than a number of pixels, for the same");
  ("reason the rest of this map is: the tile is drawn at whatever size the screen has room");
  ("for, so a window written in pixels is a slit on a tablet and a shopfront on a phone.");
  ("Drawn ONCE, when the street is built, and never again. A window does not move, is not");
  ("earned and cannot be prayed for, so it belongs with the ground rather than with the");
  ("marks worked out afresh on every step.");
  ("It is laid at the same depth as the doors and the lit ground - above the tiles, below");
  ("the people. So a house that has been prayed for lights its windows along with the rest");
  ("of it, and a family upstairs lighting their own share lights their own window with it.");
  let size = g_img_square_size_css();
  let frame = text_combine_multiple([
    "0 0 0 calc((",
    size,
    ") * 0.03) rgba(255, 241, 214, 0.92)",
  ]);
  let bar = text_combine_multiple(["calc((", size, ") * 0.03)"]);
  function window_draw(tile) {
    let opening = html_div(layer);
    g_img_square_style_position(opening, tile, "ground_tint");
    html_style_assign(opening, {
      "pointer-events": "none",
    });
    let pane = html_div(opening);
    html_style_assign(pane, {
      position: "absolute",
      left: "27%",
      width: "46%",
      top: "22%",
      height: "42%",
      background: "linear-gradient(150deg, #2b4a63 0%, #14212e 62%)",
      "box-shadow": frame,
      "pointer-events": "none",
    });
    let upright = html_div(pane);
    html_style_assign(upright, {
      position: "absolute",
      left: "50%",
      top: "0%",
      width: bar,
      height: "100%",
      transform: "translateX(-50%)",
      background: "rgba(255, 241, 214, 0.85)",
      "pointer-events": "none",
    });
    let across = html_div(pane);
    html_style_assign(across, {
      position: "absolute",
      top: "50%",
      left: "0%",
      height: bar,
      width: "100%",
      transform: "translateY(-50%)",
      background: "rgba(255, 241, 214, 0.85)",
      "pointer-events": "none",
    });
    let sheen = html_div(pane);
    html_style_assign(sheen, {
      position: "absolute",
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(150deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 55%)",
      "pointer-events": "none",
    });
  }
  function building_draw(building) {
    let windows = property_get(building, "windows");
    each(windows, window_draw);
  }
  function block_draw(block) {
    let buildings = property_get(block, "buildings");
    each(buildings, building_draw);
  }
  each(blocks, block_draw);
}
