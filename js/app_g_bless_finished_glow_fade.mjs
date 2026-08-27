import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_glow_fade(glow) {
  arguments_assert(arguments, 1);
  ("Lets the lit house go: it dims where it stands, and clears itself off the map once it");
  ("can no longer be seen.");
  ("It stays the size of the house on the way out for the same reason it stayed on the way");
  ("in - a shape with corners that swells reads as a rectangle being inflated. The");
  ("spreading outward is carried by the soft round light instead, which has no edge to");
  ("give the trick away.");
  ("Slower than the arrival was. The arrival is the announcement and the fade is when the");
  ("player actually looks at the house underneath, so the fade is the part that has to");
  ("give them time.");
  ("It removes itself afterwards rather than being left lying about, because this runs");
  ("once for every finished house and the game goes on as long as the player keeps");
  ("praying - a light kept would be one more thing for the browser to carry through every");
  ("step anybody takes for the rest of the game.");
  ("The removal waits out the fade by the clock instead of watching for its end. The wait");
  ("is the fade plus a little, so a frame that runs late still finds the light there.");
  html_style_assign(glow, {
    transition: "opacity 0.76s ease-in",
    opacity: "0",
  });
  function glow_remove() {
    html_remove(glow);
  }
  setTimeout(glow_remove, 900);
}
