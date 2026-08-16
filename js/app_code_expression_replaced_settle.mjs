import { app_shared_animation_duration_quick } from "./app_shared_animation_duration_quick.mjs";
import { app_code_expression_chosen_room_clear } from "./app_code_expression_chosen_room_clear.mjs";
import { app_code_expression_chosen_uncolored } from "./app_code_expression_chosen_uncolored.mjs";
import { app_shared_animation_sleep } from "./app_shared_animation_sleep.mjs";
import { app_code_expression_colored_slowly } from "./app_code_expression_colored_slowly.mjs";
import { app_code_expression_replaced_set } from "./app_code_expression_replaced_set.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_descendants_innermost } from "./html_descendants_innermost.mjs";
import { html_move_animate_settle } from "./html_move_animate_settle.mjs";
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
  function change() {
    app_code_expression_replaced_set(node_span, value);
  }
  function room_clear() {
    app_code_expression_chosen_room_clear(node_span);
  }
  let duration = app_shared_animation_duration();
  let pieces = html_descendants_innermost(line);
  await html_move_animate_settle(pieces, change, duration);
  ("where the swap was NOT watched arriving, the value is held green once it is standing still, the same moment long as every other success in the app - the learner did not follow it down, so this is the one look they get at it");
  ("That holding is the whole of the difference between the two. What happens after it is the same either way: the green has said what it was there to say and is let go, and only then does the room it was holding go with it. Written once, so the two endings cannot drift into looking like two different things happening.");
  if (not(watched)) {
    await sleep_success_color();
  }
  ("the green is let go on its own, with nothing moving under it, and only then the room it needed");
  ("Three things want to happen at this moment and the learner can follow one at a time: the value arriving in the room its working was holding, the green leaving, and the line closing up. So they are given one after another rather than together. Read together, the block is watched narrowing while it is still half green, and a colour that goes as its block shrinks reads as having been squeezed out - where the same colour, gone before anything moves, reads as having finished.");
  ("the fading is asked for here rather than being carried over from when the green was given, because both the travelling and the settling wiped it: a piece is told once what may be slowed about it, and being told to move slowly throws the earlier telling away");
  app_code_expression_colored_slowly(node_span);
  app_code_expression_chosen_uncolored(node_span);
  await app_shared_animation_sleep();
  ("and the line is measured afresh before it closes up, because every piece of it has just slid and where they were read the first time is where none of them is standing now");
  let pieces_faded = html_descendants_innermost(line);
  ("closing up is given the short while rather than the full one: it is the only thing left moving, it moves by the width of a little padding, and there is nothing in it the learner has not already been shown");
  let duration_quick = app_shared_animation_duration_quick();
  await html_move_animate_settle(pieces_faded, room_clear, duration_quick);
}
