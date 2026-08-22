import { app_code_expression_operator_chip_room } from "./app_code_expression_operator_chip_room.mjs";
import { app_code_expression_operator_pressable } from "./app_code_expression_operator_pressable.mjs";
import { app_shared_animation_duration_quick } from "./app_shared_animation_duration_quick.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_descendants_innermost } from "./html_descendants_innermost.mjs";
import { html_move_animate_settle } from "./html_move_animate_settle.mjs";
export async function app_code_expression_chips_rise(line, spans) {
  arguments_assert(arguments, 2);
  ("put the chips on a run of operators in two stages: first the room they stand in opens and the rest of the line slides along to make it, and only then do they take their colour");
  ("The mirror of taking them off, and it runs the stages in the mirrored order. Coming off, the colour goes first and the line closes up after it. Going on, the room opens first and the colour lands on operators already standing where they belong.");
  ("Both ways round, the rule is that the stage which MOVES the line is watched on its own. A step that opened the room and coloured it in one frame showed a learner an operator that had moved and changed at the same moment, and the two together read as the line having been redrawn behind their back rather than as an operator becoming something to press.");
  ("The colour is given in one frame rather than faded, for the same reason it is taken in one: a chip is pale lettered dark and a plain operator is dark lettered pale, so a fade passes the two through each other and there is a moment in the middle where fill and lettering are the same grey and the operator cannot be read at all.");
  ("No pause is kept between the stages, because the sliding IS the pause - it is a stage the learner watches, and it ends the moment before the colour lands. Coming off, the colour goes in a single frame with nothing moving under it, so there a pause has to be added or the stage is never seen.");
  ("the line is measured whole rather than only where the chips are, the same way every other settling on this line measures it, because a chip opening in the middle moves everything after it and none of those pieces knows a chip was involved");
  let pieces = html_descendants_innermost(line);
  function change() {
    each(spans, app_code_expression_operator_chip_room);
  }
  ("the short while, not the whole one: nothing is worked out here and no answer changes - this is the line offering the next press after a step the learner has already watched being answered");
  let duration = app_shared_animation_duration_quick();
  await html_move_animate_settle(pieces, change, duration);
  each(spans, app_code_expression_operator_pressable);
}
