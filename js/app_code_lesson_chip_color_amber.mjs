import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_lesson_chip_color_amber() {
  "the amber of the four categorical chip colours, named on its own because a second reader wants this one colour rather than a place in the list";
  "AN INDEX INTO A LIST IS NOT A NAME FOR WHAT SITS THERE. Asked for as the fourth chip colour, the amber is whatever the fourth entry happens to be, so putting the four in another order would change a pointing colour on a lesson card and nothing would go red. Asked for by name, the two readers ask for the same thing and cannot come apart.";
  arguments_assert(arguments, 0);
  let color = color_oklch(0.58, 0.16, 56.38);
  return color;
}
