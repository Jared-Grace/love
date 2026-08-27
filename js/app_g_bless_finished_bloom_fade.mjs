import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_bloom_fade(bloom) {
  arguments_assert(arguments, 1);
  ("Lets the round light go: it keeps opening until it has run off every edge of the");
  ("screen, thinning the whole way, and clears itself off the map once it is gone.");
  ("Still growing as it fades, rather than shrinking back or simply dimming. A light that");
  ("shrinks looks like it is being taken back, and what just happened is not being taken");
  ("back. Spreading out until it is gone is what a blessing carrying past the person it");
  ("was said over looks like, and it is the same shape as the ladder this whole game");
  ("climbs.");
  ("It goes far enough to pass the edges of a phone held upright, which is the point of");
  ("the number being this large. Stopped short of the edge it would be a circle sitting on");
  ("a street; carried past it, the whole screen is briefly warm and then the street comes");
  ("back changed.");
  ("Slower than the opening was. The opening is the announcement and the fade is when the");
  ("player actually looks at the house underneath, so the fade is the part that has to");
  ("give them time.");
  ("It removes itself afterwards rather than being left lying about, because this runs");
  ("once for every finished house and the game goes on as long as the player keeps");
  ("praying - a light kept would be one more thing for the browser to carry through every");
  ("step anybody takes for the rest of the game.");
  ("The removal waits out the fade by the clock instead of watching for its end. The wait");
  ("is the fade plus a little, so a frame that runs late still finds the light there.");
  html_style_assign(bloom, {
    transition: "transform 0.9s ease-in, opacity 0.9s ease-in",
    transform: "scale(36)",
    opacity: "0",
  });
  function bloom_remove() {
    html_remove(bloom);
  }
  setTimeout(bloom_remove, 1050);
}
