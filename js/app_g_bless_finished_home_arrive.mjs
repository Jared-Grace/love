import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_g_bless_homes_draw } from "./app_g_bless_homes_draw.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function app_g_bless_finished_home_arrive(div_map, tiles) {
  arguments_assert(arguments, 2);
  ("Brings the finished house up out of the plain ground, over about a second, and hands");
  ("back the layer it came up on so it can be taken away once the street itself is showing");
  ("the same house.");
  ("A house that appears between one frame and the next is a house the player did not see");
  ("arrive. The whole of this moment is somebody being told that a household has been");
  ("prayed for, and a change too fast to watch is a change they have to work out afterwards");
  ("from the picture rather than a thing they saw happen.");
  ("It is drawn on a layer of its own rather than faded where the house actually lives, and");
  ("that is forced. The street is redrawn from the record every time anybody takes a step,");
  ("and the crowd is always walking - so the real house is cleared away and built again");
  ("several times a second, and a fade started on it would be thrown away before its second");
  ("frame. Nothing on this layer is ever redrawn, so a fade here runs to the end.");
  ("Fading the street's own house layer as a whole would be wrong even if it could be done:");
  ("every house prayed for earlier is drawn there too, and they would all go out and come");
  ("back with this one.");
  ("The house is drawn by the same drawing the street uses, so what fades in and what is");
  ("standing there afterwards are the same picture - the handover has nothing to give away.");
  let layer = html_div(div_map);
  let lit = app_g_bless_homes_draw(layer, tiles);
  ("Made see-through first and shown only after the page has been measured. Made and shown");
  ("in one breath the browser sees a house that was always fully there and paints it with");
  ("no fade at all.");
  let seconds = "1s";
  let transition = text_combine("opacity ", seconds);
  html_style_assign(lit, {
    opacity: "0",
    transition: transition,
  });
  html_reflow_force(div_map);
  html_style_opacity(lit, "1");
  return layer;
}
