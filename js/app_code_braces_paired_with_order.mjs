import { app_code_braces_paired_with_order_colors } from "./app_code_braces_paired_with_order_colors.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_colors_random } from "./app_code_braces_colors_random.mjs";
export function app_code_braces_paired_with_order(parent, code) {
  arguments_assert(arguments, 2);
  ("a program with every pair of braces in a colour of its own, and under it only its braces in the order they stand, each pair wearing the same colour in both, so the eye can follow a pair from the program down to the line of braces");
  ("The colours are put in a random order once and handed to both drawings, because two random drawings would give the same pair two different colours.");
  let colors = app_code_braces_colors_random();
  app_code_braces_paired_with_order_colors(parent, code, colors);
}
