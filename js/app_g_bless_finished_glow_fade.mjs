import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_glow_fade(glow, span) {
  arguments_assert(arguments, 2);
  ("Lets the round light go: it keeps opening outward while it fades away, and clears");
  ("itself off the map once it can no longer be seen.");
  ("Still growing as it fades, rather than shrinking back or simply dimming. A light that");
  ("shrinks looks like it is being taken back, and what just happened is not being taken");
  ("back. Spreading out until it is gone is what a blessing carrying past the person it");
  ("was said over looks like, and it is the same shape as the ladder this whole game");
  ("climbs.");
  ("Slower than the opening was. The opening is the announcement and the fade is when the");
  ("player actually looks at the house underneath, so the fade is the part that has to");
  ("give them time.");
  ("It removes itself afterwards rather than being left lying about, because this runs");
  ("once for every finished house and the game goes on as long as the player keeps");
  ("praying - a light kept would be one more thing for the browser to carry through every");
  ("step anybody takes for the rest of the game.");
  ("The removal waits out the fade by the clock instead of watching for its end. The wait");
  ("is the fade plus a little, so a frame that runs late still finds the light there.");
  let reach = multiply(span, 2.6);
  let scale = text_combine_multiple(["scale(", reach, ")"]);
  html_style_assign(glow, {
    transition: "transform 0.76s ease-in, opacity 0.76s ease-in",
    transform: scale,
    opacity: "0",
  });
  function glow_remove() {
    html_remove(glow);
  }
  setTimeout(glow_remove, 900);
}
