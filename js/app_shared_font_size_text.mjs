import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_font_size_text(value) {
  "The css a page root is sized with, given the size this reader chose: a PERCENTAGE of the size their own browser is set to, never a count of pixels.";
  "A count of pixels written on a root overrides the text size the reader set in their browser, and that setting is the first thing somebody who cannot read small print has already found. A percentage leaves it standing. 1 is then exactly the size every other page on the internet opens at, so a reader who browses zoomed reads this site at the size they read the last one, and the two buttons still move it from there.";
  "Three places spelled the same combining out: the refresh that writes a reader's chosen size, the dark page div, and the game's own root. Three spellings of one unit are three chances for one of them to go on writing pixels after the other two stopped, and no reading of any single file would show it.";
  arguments_assert(arguments, 1);
  let percent = multiply(value, 100);
  let text = text_combine(percent, "%");
  return text;
}
