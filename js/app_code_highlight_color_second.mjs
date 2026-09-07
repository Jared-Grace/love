import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_chip_color_amber } from "./app_code_lesson_chip_color_amber.mjs";
export function app_code_highlight_color_second() {
  "the second pointing colour: worn by a word and by the piece of code that word points at, on a screen where another word is pointing at a different piece of code at the same time";
  ("IT SAYS NOTHING ON ITS OWN. Where one thing is being pointed at, that thing wears ",
    fn_name("app_code_highlight_color"),
    " and this colour is never reached. It arrives only as the other half of a pair, and what it tells a learner is not amber but not the blue one - so a screen reaching for it must have both colours on it at once, or the second colour is decoration wearing a pointer's clothes.");
  ("Amber against the blue, and taken from the four colours this app already tells one number from another with rather than chosen here. Green and red were the other deep colours to hand and both were wrong: this app says done in green and says wrong in red, in those very colours, a screen or two away.");
  ("The pair is told apart by hue and not by lightness - against black the blue measures 4.06 to 1 and the amber 4.64, so both stand off the line and neither is the dim one. That is on purpose. A pair split by lightness reads as one colour and a faded copy of it, which says one of these matters more; blue against amber says these are two different things, which is what it has to say. It is also the pair that survives a reader who cannot tell red from green.");
  arguments_assert(arguments, 0);
  let color = app_code_lesson_chip_color_amber();
  return color;
}
