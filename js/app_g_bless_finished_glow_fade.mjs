import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_glow_fade(glow) {
  arguments_assert(arguments, 1);
  ("Lets the lit house go in two steps: it drops back to a low steady burn and stays there");
  ("for a moment, and only then goes out and clears itself off the map.");
  ("The hold in the middle is the point of doing it in two steps at all. Everything before");
  ("this is loud - a white wash, a light the size of the street - and loud things are");
  ("watched rather than read. The one thing the player actually has to LEARN is what a");
  ("finished house looks like from now on, and they can only learn it while nothing else");
  ("is moving. So the noise stops, the house is left burning quietly on its own, and that");
  ("is the picture they are left holding.");
  ("It is still clearly alight during the hold rather than already down to the resting");
  ("mark. The resting mark is a warm patch of ground, which is right for a street with");
  ("twenty finished houses on it and far too quiet for the one that finished a second ago.");
  ("Coming down to it in stages is what ties the two together: the player watches the");
  ("bright thing become the quiet thing, and afterwards reads the quiet thing correctly");
  ("everywhere else on the map.");
  ("It stays the size of the house the whole way. A shape with corners that swells reads");
  ("as a rectangle being inflated; the spreading outward is carried by the soft round");
  ("light instead, which has no edge to give the trick away.");
  ("It removes itself at the end rather than being left lying about, because this runs");
  ("once for every finished house and the game goes on as long as the player keeps");
  ("praying - a light kept would be one more thing for the browser to carry through every");
  ("step anybody takes for the rest of the game.");
  ("Each step waits out the one before it by the clock instead of watching for its end.");
  ("Every wait is its fade plus a little, so a frame that runs late still finds the light");
  ("there.");
  html_style_assign(glow, {
    transition: "opacity 0.9s ease-out",
    opacity: "0.45",
  });
  function glow_release() {
    html_style_assign(glow, {
      transition: "opacity 1.2s ease-in",
      opacity: "0",
    });
  }
  setTimeout(glow_release, 1500);
  function glow_remove() {
    html_remove(glow);
  }
  setTimeout(glow_remove, 2850);
}
