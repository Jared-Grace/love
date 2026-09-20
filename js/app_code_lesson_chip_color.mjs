import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_chip_colors } from "./app_code_lesson_chip_colors.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_lesson_chip_color(index) {
  arguments_assert(arguments, 1);
  ("one of the categorical chip colours by its place in the list, for the screens that want several of them at once and only need each to differ from the last");
  ("Everything about which colours these are, what is known to be wrong with them and what has already been ruled out is said where they are spelled, one name along, because that is what a person revising them has to read. Nothing is said twice here.");
  ("THE PLACE IS NOT A NAME FOR WHAT SITS THERE, and a caller wanting a particular one of these is a caller wanting a colour lifted out under its own name. Asking for the third because the third is currently the blue would make the order of the list a thing nobody may reorder, which it was never meant to be.");
  let colors = app_code_lesson_chip_colors();
  let color = list_get(colors, index);
  return color;
}
