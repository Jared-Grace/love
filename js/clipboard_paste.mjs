import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { clipboard_paste_browser } from "./clipboard_paste_browser.mjs";
export async function clipboard_paste() {
  "Hands back whatever is on the clipboard at this moment, asking the browser for it inside a page and the machine itself for it at a terminal.";
  "The machine's own clipboard is sent for at the moment it is wanted, and sent for from inside here rather than from a name of its own next door. A name of its own is a function that could never run in a page, carried into every page that pastes anything, which is the one thing the gate over carried code refuses.";
  arguments_assert(arguments, 0);
  let b = browser_is();
  let paste = null;
  if (b) {
    paste = await clipboard_paste_browser();
    return paste;
  }
  let clipboard = await import("clipboardy");
  paste = await clipboard.default.read();
  return paste;
}
