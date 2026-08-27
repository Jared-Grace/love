import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { each } from "./each.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_bless_finished_white_fade(squares) {
  arguments_assert(arguments, 1);
  ("Takes the white wash back off the ground, slowly, and clears the squares away once");
  ("they can no longer be seen.");
  ("Slower going than coming, because what is underneath is the point. The white arriving");
  ("is an announcement and wants to be quick; the white leaving is the reveal, and the");
  ("thing being revealed is the house now lit as a house that has been prayed for. Taken");
  ("away at the speed it arrived, the player sees a flash and then a street, and never");
  ("looks at the one square of it that changed.");
  ("The squares are removed rather than left lying about invisible. This runs once per");
  ("finished house and the game goes on for as long as the player keeps praying, so");
  ("keeping them would leave a growing pile of see-through squares on the map for the");
  ("browser to carry through every single step anybody takes.");
  ("Removal waits out the fade rather than watching for its end. The wait is the length of");
  ("the fade written next door plus a little, so a frame that runs late still finds its");
  ("square there.");
  let seconds = "0.76s";
  let transition = text_combine("opacity ", seconds);
  function square_fade(square) {
    html_style_set(square, "transition", transition);
    html_style_opacity(square, "0");
  }
  each(squares, square_fade);
  function squares_remove() {
    each(squares, html_remove);
  }
  setTimeout(squares_remove, 900);
}
