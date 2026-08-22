import { arguments_assert } from "./arguments_assert.mjs";
import { html_button_notext } from "./html_button_notext.mjs";
import { html_background_transparent } from "./html_background_transparent.mjs";
import { html_border_none } from "./html_border_none.mjs";
import { html_padding_none } from "./html_padding_none.mjs";
import { html_color_inherit } from "./html_color_inherit.mjs";
import { html_font_family_inherit } from "./html_font_family_inherit.mjs";
export function html_button_bare(parent, lambda) {
  "A real button with the browser's own button look taken off it, so it sits in a page as plain text does while still being a button.";
  "IT EXISTS BECAUSE THE ALTERNATIVE IS NOT A STYLING CHOICE, IT IS AN EXCLUSION. Anything a reader is meant to press gets written as a div often enough, because a div already looks right and a button has to be undressed first. A div is not reachable by the tab key, does not answer to enter or space, and is read out as words rather than as something that can be pressed - so a reader who cannot use a mouse is not inconvenienced by it, they simply cannot reach it at all. Undressing a button costs five lines once; the div costs those readers the page.";
  "What comes off is the frame, the fill, the spacing and the lettering, all four of which the browser puts on a button and none of which the surrounding text has. What stays on is everything that makes it a button: the tab stop, the two keys, and what a screen reader calls it.";
  "It does not say whether it is pressed or what it controls, because those belong to whoever is using it - a button that folds a card owes the reader an aria-expanded, and one that does something once owes nothing.";
  arguments_assert(arguments, 2);
  let component = html_button_notext(parent, lambda);
  html_background_transparent(component);
  html_border_none(component);
  html_padding_none(component);
  html_color_inherit(component);
  html_font_family_inherit(component);
  return component;
}
