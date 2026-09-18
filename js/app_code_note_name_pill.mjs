import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_ink } from "./app_code_note_name_ink.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_border_radius_em } from "./html_border_radius_em.mjs";
export function app_code_note_name_pill(component, color) {
  arguments_assert(arguments, 2);
  ("writes a name as a small coloured patch with the name on it, which is how a name wears its colour anywhere on the screen");
  ("THE COLOUR IS BEHIND THE NAME RATHER THAN IN IT, AND THAT IS WHAT LETS ONE LIST OF COLOURS SERVE THE WHOLE SCREEN. A coloured letter must be read against whatever it is put on, so the same name needed one colour on a black code chip and a different one on a pale card, and a reader looking at both said the two greens were not the same green - correctly, because they were not. A patch is read against its own ink instead. Nothing behind it is being asked to make it legible, so it can be the same colour in both places, which is the one thing the colour exists to say.");
  ("A patch is also easier to match than a letter. Deciding whether two things are the same colour across a screen is done on how much colour there is to look at, and a name here is often a single lower-case letter - a few thin strokes. Filled, it is a block, and two blocks are compared at a glance.");
  ("The brightness the three colours differ by is not lost by moving behind the letters: a reader who cannot tell the hues apart now compares three patches of three different lightnesses instead of three letters, which is the same signal on more of it.");
  ("Edged in the ink as well as written in it, because a light patch on a pale page can be almost the same brightness as the page. The line makes it a shape rather than a wash, and on a dark chip the line simply disappears into the chip, which is the right thing for it to do there.");
  ("Padded sideways but not up and down. A name inside a line of code has to leave the line's height alone - a patch that made its own line taller would push the lines of a program apart wherever a name appeared, and a program whose lines are unevenly spaced reads as a program with something wrong with it.");
  let ink = app_code_note_name_ink();
  html_style_background_color_set(component, color);
  html_font_color_set(component, ink);
  html_border(component, "0.06em", ink);
  html_style_padding_x(component, "0.3em");
  html_border_radius_em(component, "0.3");
  return component;
}
