import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_face } from "./app_shared_button_face.mjs";
import { app_shared_button_wide_shape } from "./app_shared_button_wide_shape.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_text_decoration } from "./html_text_decoration.mjs";
import { html_font_color_set_black } from "./html_font_color_set_black.mjs";
export function app_shared_button_wide_link_dress(a) {
  arguments_assert(arguments, 1);
  ("make an anchor look like the wide button standing next to it: the same face, the same room on its own line, its word in the middle, and none of the three things a browser does to a link left showing.");
  ("A browser puts an anchor in the middle of a line of writing, so left as it comes it is underlined, blue, and sits where the words around it left off. All three are undone, because none of them is anything a reader of this page should be able to see: every other card on it is a button, and a card that looked like a link among them would read as a different kind of thing rather than as the same thing built honestly.");
  ("held apart from where the anchor is MADE, because where it goes is the one thing the two kinds of wide link disagree about - a new tab, or this page again on another name - and how they look is not part of that argument.");
  app_shared_button_face(a);
  app_shared_button_wide_shape(a);
  html_centered(a);
  html_text_decoration(a, "none");
  html_font_color_set_black(a);
}
