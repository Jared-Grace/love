import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_style_hanging_indent(component, value) {
  arguments_assert(arguments, 2);
  ("Pushes every line of a piece of text in except its first one, by the amount given.");
  ("★ IT IS ONE IDEA WRITTEN AS TWO SETTINGS THAT CANCEL. The whole block is moved in, and then its first line alone is pulled back out by the same amount - so the first line lands where it always did and every line that wraps lands further in. Either setting on its own moves the text somewhere nobody asked for.");
  ("What it is for is a line that carries a mark at its left: a sign in front of a line of code, a number in front of a list. A wrapped remainder starting at the left edge reads as a new line wearing no mark, and the hanging indent is what keeps that column clear for the marks.");
  html_style_assign(component, {
    "padding-left": value,
    "text-indent": "-" + value,
  });
}
