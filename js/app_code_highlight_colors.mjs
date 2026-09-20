import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
export function app_code_highlight_colors() {
  arguments_assert(arguments, 0);
  ("the pointing colours as one list - the colours a screen wears to say which word is about which piece of code, first, second and third");
  ("THE LIST IS ANSWERED SO THAT WHATEVER MEASURES THEM CANNOT DISAGREE WITH WHATEVER USES THEM. A check told there are three would go on checking three the day a fourth pointing colour arrived, and would pass while saying nothing at all about the colour that was actually added. Asked for the list, it checks whatever is here.");
  ("Unlike the categorical chip colours these are still asked for ONE AT A TIME by every drawing that uses them, and rightly so - a screen pointing at two things needs the first and the second by name, not a list to index into. This exists beside those three and does not replace them: it is the set, for the things that have to reason about the set.");
  ("THEY ARE NOT A SECOND SPELLING OF ANYTHING. The first is the brand blue the whole site leads with, so its numbers were never a palette decision; the second is a green of its own, lifted out of the chip palette when it needed to differ; the third was chosen to be plainly warm and well clear of that green. Measured 2026-09-20 the second sits 0.043 from the chip green, which is a near miss by this app's own rule and is left standing while the palettes wait on somebody who has worked in colour.");
  let first = app_code_highlight_color();
  let second = app_code_highlight_color_second();
  let third = app_code_highlight_color_third();
  let colors = [first, second, third];
  return colors;
}
