import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_map } from "./list_map.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { each } from "./each.mjs";
export function app_g_bless_finished_white(div_map, tiles, roof_is) {
  arguments_assert(arguments, 3);
  ("Washes a patch of ground white, over about two thirds of a second, and hands back the");
  ("squares doing it so they can be taken away again.");
  ("White is the one colour on this map that means nothing yet. The warm light on a");
  ("finished house, the gold on a face that has been prayed for, the pale cone the player");
  ("is looking down - all three are spoken for, and a celebration painted in any of them");
  ("would read as more of that thing rather than as a moment of its own. White reads as");
  ("light arriving, and it is also the far end of every ground colour here, so it lifts");
  ("away from jungle green and from snow alike.");
  ("Each square carries its own fade rather than the whole patch fading as one sheet. A");
  ("sheet made see-through is drawn as a single flat thing, and a flat thing with nothing");
  ("positioning it lands underneath the very ground it was meant to cover - the map's own");
  ("squares are placed, and a placed thing is painted over an unplaced one whatever order");
  ("they were written in. Square by square, each one keeps the place it was given and");
  ("stays where it belongs: over the ground, under the people standing on it.");
  ("They are made already see-through and then shown, with the page measured in between.");
  ("Made and shown in one breath the browser only ever measures them once, sees squares");
  ("that were always fully there, and paints them with no fade at all.");
  ("The ROOF is washed to about half the strength of the walls, so it stays the darker part");
  ("of the house all the way through. Seen from above a house is a band of front wall with a");
  ("roof behind it, and that line is the only thing on the map that says how tall a building");
  ("is. Washed to the same white, a finished house turns into one flat slab and the two");
  ("storeys the player has just prayed through disappear at the moment they are being");
  ("celebrated. Held back, the wash still reaches every square of the house - all of it is");
  ("clearly the same thing lighting up - and the house keeps its shape while it does.");
  ("It is done by holding the square BACK rather than by painting it a darker colour. The");
  ("same white at less than full strength lets the roof material show through it, so the");
  ("roof comes out darker by exactly as much as it already was; a grey chosen here would be");
  ("a second opinion about what a roof looks like, free to stop matching the day the roof is");
  ("drawn in anything else.");
  let seconds = "0.7s";
  let transition = text_combine("opacity ", seconds);
  function tile_shown_get(tile) {
    let roof = roof_is(tile);
    if (roof) {
      return "0.45";
    }
    return "1";
  }
  function tile_square(tile) {
    let square = html_div(div_map);
    g_img_square_style_position(square, tile, "ground_tint");
    html_style_assign(square, {
      background: "rgba(255, 255, 255, 0.95)",
      "pointer-events": "none",
      opacity: "0",
      transition: transition,
    });
    let shown = tile_shown_get(tile);
    let pair = {
      square: square,
      shown: shown,
    };
    return pair;
  }
  let pairs = list_map(tiles, tile_square);
  html_reflow_force(div_map);
  function pair_show(pair) {
    let square = property_get(pair, "square");
    let shown = property_get(pair, "shown");
    html_style_opacity(square, shown);
  }
  each(pairs, pair_show);
  let squares = list_map_property(pairs, "square");
  return squares;
}
