import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_italic } from "./html_style_italic.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_learn_js_value_nothing_paint(component) {
  arguments_assert(arguments, 1);
  ("where a program wrote out nothing, the word nothing, leant and gray, so the place is not left blank");
  ("A blank box under a label that promises output reads as a page that failed to load, and a blank button reads as a button that lost its words. The word is leant and gray so it is not mistaken for something the program wrote: a program that wrote the word nothing would show it black and upright, as every written-out value is. The word itself carries the meaning too, for a reader who cannot see the lean or the gray.");
  ("Chosen by the human 2026-11-11: italic and gray, over blue, which this app already gives its boxes and labels.");
  ("2026-11-12, asked for by the human: a lighter gray, and the word in brackets, (nothing), so it reads even more plainly as a note about the output rather than the output");
  html_text_set(component, "(nothing)");
  html_style_italic(component);
  let color = app_shared_color_gray();
  html_font_color_set(component, color);
}
