import { app_code_expression_colored_quickly } from "./app_code_expression_colored_quickly.mjs";
import { app_shared_animation_sleep_quick } from "./app_shared_animation_sleep_quick.mjs";
import { app_shared_animation_duration_quick } from "./app_shared_animation_duration_quick.mjs";
import { app_code_expression_chosen_room_clear } from "./app_code_expression_chosen_room_clear.mjs";
import { app_code_expression_chosen_uncolored } from "./app_code_expression_chosen_uncolored.mjs";
import { app_code_expression_replaced_set } from "./app_code_expression_replaced_set.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_descendants_innermost } from "./html_descendants_innermost.mjs";
import { html_move_animate_settle } from "./html_move_animate_settle.mjs";
export async function app_code_expression_replaced_settle(
  line,
  node_span,
  value,
) {
  arguments_assert(arguments, 3);
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
  ("the value used to be held blue here, standing still, wherever the learner had not followed the swap down - a whole moment in which nothing at all moved. It went because a hold is read as the step having ended, and the step has not ended: the blue still has to go and the line still has to close up. So the learner was made to sit through a stop and then watch two more things happen after it.");
  ("Nothing is lost by dropping it. The blue was already up through the holding before the swap and the whole of the swap itself, so it has had far longer than any other success in the app to be seen; what the hold added was a second look at a colour that was never taken away.");
  ("the blue is let go on its own, with nothing moving under it, and only then the room it needed");
  ("Three things want to happen at this moment and the learner can follow one at a time: the value arriving in the room its working was holding, the blue leaving, and the line closing up. So they are given one after another rather than together. Read together, the block is watched narrowing while it is still half blue, and a colour that goes as its block shrinks reads as having been squeezed out - where the same colour, gone before anything moves, reads as having finished.");
  ("the fading is asked for here rather than being carried over from when the blue was given, because both the travelling and the settling wiped it: a piece is told once what may be slowed about it, and being told to move slowly throws the earlier telling away");
  ("and it is asked for over the SHORT while, not the whole one. The blue coming up was news and was watched; the blue going says only that the news has been read, and the learner is by then looking at the next thing to press. Fading it over the whole while made the two ends of one step feel like two steps.");
  app_code_expression_colored_quickly(node_span);
  app_code_expression_chosen_uncolored(node_span);
  await app_shared_animation_sleep_quick();
  ("and the line is measured afresh before it closes up, because every piece of it has just slid and where they were read the first time is where none of them is standing now");
  let pieces_faded = html_descendants_innermost(line);
  ("closing up is given the short while rather than the full one: it is the only thing left moving, it moves by the width of a little padding, and there is nothing in it the learner has not already been shown");
  let duration_quick = app_shared_animation_duration_quick();
  await html_move_animate_settle(pieces_faded, room_clear, duration_quick);
}
