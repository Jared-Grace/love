import { app_code_expression_colored_slowly } from "./app_code_expression_colored_slowly.mjs";
import { app_code_expression_replaced_set } from "./app_code_expression_replaced_set.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_descendants_innermost } from "./html_descendants_innermost.mjs";
import { html_move_animate_settle } from "./html_move_animate_settle.mjs";
import { app_code_expression_chosen_clear } from "./app_code_expression_chosen_clear.mjs";
import { not } from "./not.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
export async function app_code_expression_replaced_settle(
  line,
  node_span,
  value,
  watched,
) {
  arguments_assert(arguments, 4);
  ("swap the working out for what it came to, and let the rest of the line slide along into the room that frees up rather than jumping into it");
  ("A value is nearly always shorter than the working it replaces, so everything standing to the right of it has to close up by the difference. Closed up at once, the learner looks back at a line whose pieces are all somewhere else and has to find their place in it again; slid, they watch the same pieces arrive.");
  ("Every innermost piece of the line is offered, not only the ones expected to move - the ones that stay put are measured to the same place twice and simply do not move, so nothing here has to work out which side of the swap anything is on.");
  let pieces = html_descendants_innermost(line);
  function change() {
    app_code_expression_replaced_set(node_span, value);
    ("where the swap was watched arriving, the green has nothing left to say and comes off in the same movement, so the line settles in one go all the way to how it is about to be drawn");
    ("Held back, the line would settle twice over: once for the value being shorter than its working, and again a moment later for the green's own room going.");
    if (watched) {
      ("the fading is asked for again here rather than being carried over from when the green was given, because the travelling wiped it: a piece is told once what may be slowed about it, and being told to move slowly threw the earlier telling away");
      app_code_expression_colored_slowly(node_span);
      app_code_expression_chosen_clear(node_span);
    }
  }
  let duration = app_shared_animation_duration();
  await html_move_animate_settle(pieces, change, duration);
  ("and where it was not watched arriving, the value is held green once it is standing still, the same moment long as every other success in the app");
  if (not(watched)) {
    await sleep_success_color();
  }
}
