import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_g_bless_windows_draw(layer, blocks) {
  arguments_assert(arguments, 2);
  ("Draws the windows on every upper-floor home in the street - a pair of dark panes in pale");
  ("frames, crossed by glazing bars, hung on the wall clear of the ground.");
  ("It is what a SECOND STOREY looks like from above. A tall house is drawn as two bands of");
  ("wall where a low one has one, and two bands of the same brick are simply a deeper");
  ("building; nothing about them says anybody lives up there. Windows along the upper band");
  ("are what turn that extra brick into a floor with homes on it.");
  ("So this counts the same way the doors do. A door on the bottom row is a family living on");
  ("the ground, and windows above it are a family living over their heads - the ladder the");
  ("prayer climbs, drawn on the street and readable without a word being written.");
  ("Windows are not drawn on every upper square, only where somebody lives. Families do not");
  ("always divide evenly between the floors, and the odd one lives on the ground with an");
  ("empty floor above; that column keeps its door and goes without windows. The blank");
  ("stretch of wall is honest - it says the house has an upper floor with nobody home on");
  ("this side of it.");
  ("TWO of them for one family, and they straddle the JOINS of the three squares that");
  ("family owns rather than sitting in the middle of them. One window centred over the door");
  ("gave every upstairs home the same face as the home below it, in the same place, so a");
  ("column read as one opening stacked on another and the two floors were told apart only");
  ("by the size of the hole. A pair reads as a room with two windows, which is what a home");
  ("above a home actually looks like from the street.");
  ("Straddling the joins is what makes the pair possible at all. Both windows inside the");
  ("middle square would be two slits either side of its centre, and squeezing two openings");
  ("into a third of a house front makes each of them too small to read as glass. Hung over");
  ("the joins they have the whole width of the home to stand in, they are as far from each");
  ("other as they can be, and they are still as far from the alley - a window hard against");
  ("the gap between two houses would read as that gap widening rather than as a way into");
  ("either of them.");
  ("They are drawn from the MIDDLE square and hang out over its neighbours, rather than");
  ("being given squares of their own. Which squares a family owns is decided elsewhere and");
  ("its middle one is the square its door is in, so this is the one place the pair can be");
  ("hung from without asking a second time where the home is - and a window that only half");
  ("lies in the square it is drawn from is still wholly inside the home, because both");
  ("squares it covers belong to that same family.");
  ("They are drawn SMALLER than a door and CLEAR of the bottom of their square, and that is");
  ("most of what tells the two apart at a glance. A door meets the ground and a window hangs");
  ("on a wall; drawn the same size and reaching the same way down, an upper opening would");
  ("read as a second door somebody had put on the first floor.");
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
  ("of it, and a family upstairs lighting their own share lights their own windows with it.");
  let size = g_img_square_size_css();
  let frame = text_combine_multiple([
    "0 0 0 calc((",
    size,
    ") * 0.03) rgba(255, 241, 214, 0.92)",
  ]);
  let bar = text_combine_multiple(["calc((", size, ") * 0.03)"]);
  function pane_draw(opening, left) {
    let pane = html_div(opening);
    html_style_assign(pane, {
      position: "absolute",
      left: left,
      width: "34%",
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
    return pane;
  }
  function window_draw(tile) {
    "The square the pair hangs from does not clip them, so each one may lie half over its";
    "neighbour. A pane centred on the left join starts a sixth of a square to the left of";
    "this one and a pane centred on the right join starts a sixth before the right edge -";
    "the same offset read from either end, which is what makes the pair even.";
    let opening = html_div(layer);
    g_img_square_style_position(opening, tile, "ground_tint");
    html_style_assign(opening, {
      "pointer-events": "none",
    });
    pane_draw(opening, "-17%");
    pane_draw(opening, "83%");
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
