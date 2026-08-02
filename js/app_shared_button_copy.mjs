import { arguments_assert } from "./arguments_assert.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_button_copy(parent, lambda) {
  arguments_assert(arguments, 2);
  ("The button that copies what is on the screen, styled the way the apps style");
  ("their buttons.");
  ("Copying a chapter, copying a reply. The label is the same everywhere on");
  ("purpose - a reader who has met it once knows it again - so it is asked for");
  ("rather than written out, and it is never wanted apart from the button wearing");
  ("it. The plainer twin next door does the same for a button with no styling.");
  let text = html_button_copy_text();
  let component = app_shared_button(parent, text, lambda);
  return component;
}
