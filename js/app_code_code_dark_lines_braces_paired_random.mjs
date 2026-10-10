import { app_code_braces_colors_random } from "./app_code_braces_colors_random.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
export function app_code_code_dark_lines_braces_paired_random(component, code) {
  "code with every pair of braces in a colour of its own, the colours put in a fresh random order for this one drawing. For a drawing nothing else has to agree with, such as one button of a quiz; two drawings that must wear the same colours are handed one list instead.";
  "The count of arguments is deliberately not asserted, because this stands in the slot a lesson paints its code with, which is called with three arguments by the worked example and with two by the quiz.";
  let colors = app_code_braces_colors_random();
  app_code_code_dark_lines_braces_paired_colors(component, code, colors);
}
