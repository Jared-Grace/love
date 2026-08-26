import { arguments_assert } from "./arguments_assert.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { app_shared_rtl_is } from "./app_shared_rtl_is.mjs";
import { html_direction_rtl_align_set } from "./html_direction_rtl_align_set.mjs";
export function app_shared_textarea_reader_direction(parent) {
  "A box to write in that runs the way the reader of this app reads, from the moment it is drawn and while it is still empty.";
  "It cannot be worked out from what is inside it, the way a finished sentence can, because there is nothing inside it yet - and by the time there is, the person has already been typing into a box whose cursor sat at the wrong end. So it is asked of the app's own language instead, which is the one thing known before a key is pressed.";
  "The words already showing in an empty box are the app's, not the reader's: what it asks for is written in their language, and a right-to-left question laid out from the left is the first thing they see.";
  "Direction and the edge the lines start from are set together here. Setting only the first leaves every letter in its place with the cursor still waiting at the far side.";
  arguments_assert(arguments, 1);
  let component = html_textarea(parent);
  let rtl = app_shared_rtl_is();
  html_direction_rtl_align_set(component, rtl);
  return component;
}
