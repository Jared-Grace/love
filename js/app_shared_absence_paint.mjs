import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_italic } from "./html_style_italic.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_absence_paint(component, text) {
  arguments_assert(arguments, 2);
  ("where something came out empty, words in brackets saying so, leant and gray, so the place is not left blank");
  ("A blank box where output belongs reads as a page that failed to load. Leant and gray, the words are not mistaken for the output itself: output that happened to be those same words would show black and upright. The brackets carry the meaning too, for a reader who cannot see the lean or the gray.");
  ("One look for one meaning across apps: the learning app's program that wrote out nothing and the reply rules' reply with no lines are the same thing, an output that is empty, so they wear the same mark.");
  html_text_set(component, text);
  html_style_italic(component);
  let color = app_shared_color_gray();
  html_font_color_set(component, color);
}
