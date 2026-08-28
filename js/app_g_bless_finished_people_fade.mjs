import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { each } from "./each.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_people_fade(bursts) {
  arguments_assert(arguments, 1);
  ("Lets the burst on each blessed face go, and clears the lights away once they can no");
  ("longer be seen.");
  ("Slower going than coming, for the same reason the white wash off the ground is: what");
  ("is left underneath is the point. Under the burst is the quiet gold light that stays on");
  ("this person for the rest of the game, and the player only learns to read it if they");
  ("watch the loud thing become the quiet thing.");
  ("The bursts are removed rather than left lying about invisible. A prayer lands every");
  ("few seconds for as long as somebody keeps playing, and a light kept would be one more");
  ("thing for the browser to carry through every step anybody takes afterwards.");
  ("Removal waits out the fade by the clock rather than watching for its end. The wait is");
  ("the fade written next door plus a little, so a frame that runs late still finds its");
  ("light there.");
  let seconds = "0.76s";
  let transition = text_combine("opacity ", seconds);
  function burst_fade(burst) {
    html_style_set(burst, "transition", transition);
    html_style_opacity(burst, "0");
  }
  each(bursts, burst_fade);
  function bursts_remove() {
    each(bursts, html_remove);
  }
  setTimeout(bursts_remove, 900);
}
