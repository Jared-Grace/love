import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_div } from "./g_img_square_div.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { bless_road_crossing } from "./bless_road_crossing.mjs";
import { each } from "./each.mjs";
export function app_g_bless_crossing_draw(layer, blocks) {
  arguments_assert(arguments, 2);
  ("Paints the crossings on the street - a band of white bars laid over the road at the");
  ("middle of every block, where a person on foot may walk over.");
  ("It is painted because the rule is already enforced and an enforced rule nobody can see is");
  ("a broken game. A player who taps the far pavement gets walked along to the middle and");
  ("over, and a player who taps the road gets nothing at all; without the paint, both of");
  ("those read as the game being awkward. With it, the first is obviously the right way round");
  ("and the second is obviously the road.");
  ("BARS running the way the walker goes, side by side along the way the cars go, which is a");
  ("zebra crossing and is the one road marking almost every reader on earth already knows.");
  ("Nothing has to be taught. Turned the other way the same paint is the dashed line down the");
  ("middle of a road, which would say the opposite of what is meant.");
  ("Drawn one square at a time, and the bars line up down the whole band because they are");
  ("measured as fractions of a square rather than from wherever the band happens to start.");
  ("Two squares stacked with the same stripes in each is one crossing, not two rows of");
  ("dashes.");
  ("WHITE and a little worn, laid over the tarmac rather than replacing it. Fresh flat white");
  ("would read as a thing standing on the road; paint on a road is paint, and the grey coming");
  ("through is what says the road is still under it.");
  ("It may not be TOUCHED, so a tap meant for a person standing on the crossing reaches them");
  ("and a tap meant for the ground reaches the ground.");
  ("Drawn ONCE, when the street is built. A crossing does not move and cannot be prayed for.");
  ("There are TWO layers of paint here and the lower one is doing the harder job. The bars");
  ("alone drew a band that did not look like the two squares it actually covers, and the");
  ("reason is that a repeating pattern always begins with paint and always ends with the gap");
  ("that follows the last bar. Flush on the left, short by most of a gap on the right - so a");
  ("crossing measured exactly two squares wide read as lopsided and somewhere between one");
  ("and two.");
  ("A faint WASH over the whole square fixes it, because a wash has no pattern to run out of.");
  ("Its edge is the edge of the square, so the band it makes is exactly as wide as the");
  ("crossing is, and the bars are then decoration inside a shape that is already the right");
  ("shape rather than the only thing saying where the shape ends.");
  ("The bars are also CENTRED in their half of a square rather than starting at its edge,");
  ("which spaces them evenly the whole way across: every gap between two bars is the same");
  ("width, and the margin left at each end of the band is the same at both ends. Evenness is");
  ("most of what a reader means by looking straight.");
  function crossing_tile_draw(tile) {
    let bars = g_img_square_div(layer, tile, "ground_tint");
    html_click_none(bars);
    html_style_assign(bars, {
      background:
        "repeating-linear-gradient(90deg, rgba(246, 246, 238, 0) 0%, rgba(246, 246, 238, 0) 12.5%, rgba(246, 246, 238, 0.82) 12.5%, rgba(246, 246, 238, 0.82) 37.5%, rgba(246, 246, 238, 0) 37.5%, rgba(246, 246, 238, 0) 50%), linear-gradient(rgba(246, 246, 238, 0.16), rgba(246, 246, 238, 0.16))",
    });
  }
  function block_draw(block) {
    let road = property_get(block, "road");
    let crossing = bless_road_crossing(road);
    each(crossing, crossing_tile_draw);
  }
  each(blocks, block_draw);
}
