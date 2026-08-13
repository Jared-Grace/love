import { emoji_copy } from "./emoji_copy.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_error_banner_copied_text() {
  "The words the copy control on the development error band wears once the message is on the clipboard.";
  "Copying gives nothing back a person can see, so the button says so itself. Without that, the only way to find out whether it worked is to paste somewhere and look, which is the very trip this button exists to save.";
  let left = emoji_copy();
  let c = text_combine(left, " Copied");
  return c;
}
