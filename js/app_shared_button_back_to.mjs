import { html_style_font_size_inherit } from "./html_style_font_size_inherit.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_back_to_text } from "./app_shared_button_back_to_text.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_shared_button_back_to(container, destination, lambda) {
  "Written at the size of the words around it for the same reason as the plain one, and the reason is written there. The line is spelled in both rather than moved down into the dressing they share, because that dressing is worn by the green and the red buttons too, and taking a size off those is a change to how every screen in every app looks rather than a repair to one that was out of step.";
  ("A way out that names where it leads, drawn the same way as the plain one beside it - the twin of ",
    fn_name("app_shared_button_back"),
    " for the screens that know their destination.");
  arguments_assert(arguments, 3);
  let text = app_shared_button_back_to_text(destination);
  let button = app_shared_button_uncolored(container, text, lambda);
  html_style_font_size_inherit(button);
  return button;
}
