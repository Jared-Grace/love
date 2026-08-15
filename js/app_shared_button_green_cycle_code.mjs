import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_button_notext } from "./html_button_notext.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_style_font_size_inherit } from "./html_style_font_size_inherit.mjs";
export function app_shared_button_green_cycle_code(div, parts, lambda) {
  arguments_assert(arguments, 3);
  ("a green button whose face is a whole sentence with code written into it, rather than one word");
  ("A button that names what it will do to THIS line - replace the 8 * 8 with 64 - says the same thing the sentence above it would have said, so the sentence and the button are one thing to read and one thing to press instead of two.");
  ("Kept at the size of the words around it. A control's own size is a size for a word like save; a sentence set bigger than the writing it belongs to reads as a heading rather than as the next thing to do.");
  let component = html_button_notext(div, lambda);
  app_shared_style_control(component);
  app_shared_button_screen_green_style_assign(component);
  html_style_font_size_inherit(component);
  html_cycle_code(component, parts);
  return component;
}
