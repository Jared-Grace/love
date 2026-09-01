import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_arcs_marks_chip_current_set(chip, current) {
  "The dressing on one numbered chip in the list of changes: filled in the mark colour while it is the change being read, and drawn as an outline of the same colour while it is not.";
  "THE LIST HAS TO SAY WHERE THE READER IS OR IT IS ONLY A LADDER. Opened halfway through a tour it would otherwise be fifty identical numbers, and the reader would have to remember which one they had pressed to know which way along it they were.";
  "FILLED AND OUTLINED RATHER THAN TWO COLOURS, because the chips are small and a hue read at that size is unreliable. Whether a shape is solid or hollow survives a bad screen, a glance, and a reader who does not see this particular orange.";
  "THE OUTLINE IS THERE IN BOTH STATES AND ONLY THE FILL MOVES, which is what stops the chips changing size as the tour goes along. A border that appeared with the current state would make the chosen chip a little larger than its neighbours and shove the rows of them sideways on every press.";
  arguments_assert(arguments, 2);
  let mark_color = app_g_arcs_moved_color();
  let ink = mark_color;
  let wash = "transparent";
  if (current) {
    ink = app_shared_color_white();
    wash = mark_color;
  }
  html_style_assign(chip, {
    color: ink,
    "background-color": wash,
    border: text_combine_multiple(["1px solid ", mark_color]),
  });
}
