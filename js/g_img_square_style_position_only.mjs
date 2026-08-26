import { g_img_square_layer_variable } from "./g_img_square_layer_variable.mjs";
import { html_style_variable_or } from "./html_style_variable_or.mjs";
import { g_img_square_slide_seconds } from "./g_img_square_slide_seconds.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_img_square_style_position_only(tile, x, y) {
  let seconds = g_img_square_slide_seconds();
  let time = text_combine_multiple([seconds, "s ease"]);
  let v = g_img_square_size_css();
  let v2 = g_img_square_size_css();
  ("How far down the screen a square has reached is also how far in FRONT it is drawn, which");
  ("is why the depth is written here, in the one place every move goes through, rather than");
  ("once when the square is made. Two people walking at the same time are between tiles far");
  ("more often than they are on one, so they overlap constantly - and the one nearer the");
  ("bottom of the screen is the one standing closer, so it must be the one painted over.");
  ("The row is ADDED to the layer the square was made on, and the layers are spaced far");
  ("enough apart that no row can reach the next one. So the ground stays under the people");
  ("and the marks stay over their heads, whatever row anybody has walked to.");
  ("It is the row being MOVED TO, because the record of where everyone is runs a little");
  ("ahead of the picture on purpose. That is the right way round here too: somebody sliding");
  ("into a row is already, for the rest of that step, the one in front of whoever is leaving");
  ("it - and by the time the slide finishes the picture has caught the record up.");
  let name = g_img_square_layer_variable();
  let layer = html_style_variable_or(name, 0);
  html_style_assign(tile, {
    left: text_combine_multiple(["calc(", x, " * (", v, "))"]),
    top: text_combine_multiple(["calc(", y, " * (", v2, "))"]),
    "z-index": text_combine_multiple(["calc(", layer, " + ", y, ")"]),
    transition: text_combine_multiple(["left ", time, ", top ", time]),
  });
}
