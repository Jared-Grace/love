import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
import { app_code_highlight_colors } from "./app_code_highlight_colors.mjs";
export function app_code_code_dark_lines_braces_paired(component, code) {
  "code standing on more than one line, written into a code chip with every pair of braces drawn on a colour of its own, so a { and the } that closes it wear the same colour";
  "The count of arguments is deliberately not asserted, because this stands in the slot a lesson paints its code with, and that slot is called with three arguments by the worked example and with two by the quiz - the same reason the plain multi-line writer has never asserted either.";
  "The colours are the pointing colours, taken in the order the pairs open, so the first pair to open is the blue a pointed-at piece of code wears and the next pair the next colour. They go round again after the last, which no program in this app comes near.";
  "The pairs are found by the same count a learner is taught, one brace at a time, so what the colours say and what the counting says cannot disagree.";
  "The chip is emptied first, because what goes in is a run of pieces, and a chip drawn twice would otherwise keep the first drawing underneath the second.";
  let colors = app_code_highlight_colors();
  app_code_code_dark_lines_braces_paired_colors(component, code, colors);
}
