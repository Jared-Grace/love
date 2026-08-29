import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_game_npc_glow_get } from "./app_shared_game_npc_glow_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_person_ring(person) {
  arguments_assert(arguments, 1);
  ("A thin hard-edged circle that leaves a blessed person at speed the moment the light");
  ("lands on them, widens past the edges of the screen and is gone. It clears itself away.");
  ("Everything else on this street has a soft edge. The wash is a gradient, the burst is a");
  ("gradient, the light a person keeps is a blur - so nothing on the screen has a boundary,");
  ("and a picture with no boundaries anywhere reads as weather rather than as an event.");
  ("This is the one thing here with a line the eye can actually follow, and following one");
  ("is what makes a player feel speed. It is the difference between a light that grew and a");
  ("light that was let off.");
  ("It travels FURTHER than it is wide and much faster than everything else, which is what");
  ("keeps a second circle from reading as more of the same. It outruns the burst, passes");
  ("through it and is gone while the burst is still opening, so the two are read as one");
  ("thing arriving hard rather than as two lights on one face.");
  ("It is a border rather than a filled shape, so the middle of it stays clear and the face");
  ("underneath is never covered by the very thing celebrating it.");
  ("The line does get thicker as it widens, because widening is done by scaling and scaling");
  ("takes the border with it. That is left alone rather than worked around: it is thinning");
  ("away to nothing over the same stretch, so by the time the line is thick enough to");
  ("notice there is almost none of it left to see.");
  ("It hangs inside the light the person already carries, like everything else in this");
  ("celebration, so it is centred on the right person however far they have walked.");
  ("It is made small and still, the page is measured, and only then is it set going. Made");
  ("and moved in one breath, the browser measures once and sees a circle that was always");
  ("wide, so there is no travel at all.");
  ("It removes itself on the clock rather than waiting to be told, because it is over long");
  ("before the rest of the celebration is and nothing else has any reason to know about it.");
  ("The wait is its own travel plus a little, so a frame that runs late still finds it.");
  let white = app_shared_color_white();
  let blue = app_shared_color_blue_pale();
  let size = g_img_square_size_css();
  let thickness = text_combine_multiple(["calc((", size, ") * 0.05)"]);
  let line = text_combine_multiple([thickness, " solid ", white]);
  let spill = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.22) ",
    blue,
    ")",
  ]);
  let halo = app_shared_game_npc_glow_get(person);
  let ring = html_div(halo);
  html_style_assign(ring, {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    "box-sizing": "border-box",
    border: line,
    "border-radius": "50%",
    filter: spill,
    "pointer-events": "none",
    opacity: "1",
    transform: "scale(0.2)",
    transition: "none",
  });
  html_reflow_force(ring);
  ("It leaves fastest at the very start and coasts out from there, which is what a thing");
  ("thrown looks like. Spread evenly across the whole stretch it would look driven, and a");
  ("blessing is given rather than driven.");
  html_style_assign(ring, {
    transition:
      "transform 0.66s cubic-bezier(0.08, 0.86, 0.24, 1), opacity 0.66s ease-in",
    transform: "scale(5.2)",
    opacity: "0",
  });
  function ring_remove() {
    html_remove(ring);
  }
  setTimeout(ring_remove, 820);
}
