import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_person_bloom_fade(bloom) {
  arguments_assert(arguments, 1);
  ("Lets one person's round light go: it keeps opening while it thins away, and clears");
  ("itself off the map once there is nothing left to see.");
  ("Still growing as it fades, rather than shrinking back or simply dimming. A light that");
  ("shrinks looks like it is being taken back, and a prayer is not taken back. Spreading");
  ("out until it is gone is what a blessing carrying past the person it was said over looks");
  ("like.");
  ("Slower going than coming. The arrival is the announcement; the fade is when the player");
  ("actually looks at the face underneath and sees the quiet gold that will stay on it for");
  ("the rest of the game. Only the fade can give them the time to do that.");
  ("It stops well short of the reach a finished house has. The house runs off every edge of");
  ("the screen and briefly makes the whole street warm; a person opens a few squares and");
  ("lets the street stay where it is. The two sizes are the only thing telling the player");
  ("which of the two just happened.");
  ("It removes itself afterwards rather than lying about invisible, because this runs once");
  ("for every person prayed for and the game goes on as long as somebody keeps praying. A");
  ("light kept would be one more thing for the browser to carry through every step anybody");
  ("takes for the rest of the game.");
  ("The removal waits out the fade by the clock instead of watching for its end. The wait");
  ("is the fade plus a little, so a frame that runs late still finds the light there.");
  html_style_assign(bloom, {
    transition: "transform 0.8s ease-in, opacity 0.8s ease-in",
    transform: "scale(18)",
    opacity: "0",
  });
  function bloom_remove() {
    html_remove(bloom);
  }
  setTimeout(bloom_remove, 950);
}
