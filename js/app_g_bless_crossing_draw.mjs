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
  function crossing_tile_draw(tile) {
    let bars = g_img_square_div(layer, tile, "ground_tint");
    html_click_none(bars);
    html_style_assign(bars, {
      background:
        "repeating-linear-gradient(90deg, rgba(246, 246, 238, 0.82) 0%, rgba(246, 246, 238, 0.82) 22%, rgba(246, 246, 238, 0) 22%, rgba(246, 246, 238, 0) 50%)",
    });
  }
  function block_draw(block) {
    let road = property_get(block, "road");
    let crossing = bless_road_crossing(road);
    each(crossing, crossing_tile_draw);
  }
  each(blocks, block_draw);
}
