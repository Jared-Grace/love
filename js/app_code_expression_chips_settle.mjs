import { app_code_expression_operator_chip_room_clear } from "./app_code_expression_operator_chip_room_clear.mjs";
import { app_code_expression_operator_chip_uncolored } from "./app_code_expression_operator_chip_uncolored.mjs";
import { app_shared_animation_duration_quick } from "./app_shared_animation_duration_quick.mjs";
import { app_shared_animation_sleep_quick } from "./app_shared_animation_sleep_quick.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_descendants_innermost } from "./html_descendants_innermost.mjs";
import { html_move_animate_settle } from "./html_move_animate_settle.mjs";
export async function app_code_expression_chips_settle(line, spans) {
  arguments_assert(arguments, 2);
  ("take the chips off a run of operators in two stages: first they go plain where they stand, and only then the room they were holding goes and the rest of the line slides along into it");
  ("Both stages at once is one change too many to follow. The pale square leaving and the whole line shifting sideways land in the same frame, and a learner looking for the operator they did not press finds it somewhere else, plain, with no way to tell whether it moved because it stopped being pressable or because something was worked out.");
  ("Apart, each stage says one thing. The colour going says these are not to be pressed any more. The closing up says the line is now this much shorter - which is the same thing every other step of the line says, and it is said the same way, so it costs nothing new to read.");
  ("The colour is given in one frame rather than faded, because a chip is pale lettered dark and a plain operator is dark lettered pale: faded, the two pass through each other and there is a moment in the middle where the fill and the lettering are the same grey and the operator cannot be read at all. Nothing moves in that stage, so a frame is enough - the pause after it is what makes it a stage of its own.");
  each(spans, app_code_expression_operator_chip_uncolored);
  await app_shared_animation_sleep_quick();
  ("the line is measured whole rather than only where the chips are, the same way the settling after a swap measures it, because a chip narrowing in the middle moves everything after it and none of those pieces knows a chip was involved");
  let pieces = html_descendants_innermost(line);
  function change() {
    each(spans, app_code_expression_operator_chip_room_clear);
  }
  ("the short while, not the whole one: nothing is worked out here and no answer changes - this is the line tidying itself up behind a press the learner has already watched being answered");
  let duration = app_shared_animation_duration_quick();
  await html_move_animate_settle(pieces, change, duration);
}
