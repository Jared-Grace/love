import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_person_beam_fade(beam) {
  arguments_assert(arguments, 1);
  ("Puts out the shaft of light once it has landed, and clears it off the map.");
  ("It goes out quickly, and it goes out where it stopped rather than travelling on. The");
  ("burst is opening on the same few pixels at that moment, and a tail still hanging in the");
  ("sky above a burst reads as two lights on one face instead of one light that arrived.");
  ("What the player should be left looking at is the thing it turned into.");
  ("Quick, but not instant. Taken away in a single frame it would look like a mistake being");
  ("corrected; given a fifth of a second it looks like the light being spent.");
  ("It removes itself rather than lying about see-through. A prayer lands every few seconds");
  ("for as long as somebody keeps playing, so a shaft kept would be one more thing the");
  ("browser carries through every step anybody takes for the rest of the game.");
  ("The removal waits out the fade by the clock rather than watching for its end, and waits");
  ("a little longer than the fade, so a frame that runs late still finds the light there.");
  html_style_assign(beam, {
    transition: "opacity 0.2s ease-out",
    opacity: "0",
  });
  function beam_remove() {
    html_remove(beam);
  }
  setTimeout(beam_remove, 320);
}
