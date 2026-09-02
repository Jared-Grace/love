import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
export async function clipboard_copy(text) {
  "$plain text";
  "Puts writing on the clipboard, asking the page for it inside a browser and the machine itself for it at a terminal.";
  "The machine's own clipboard is sent for at the moment it is wanted, and sent for from inside here rather than from a name of its own next door. A name of its own is a function that could never run in a page, carried into every page that copies anything, which is the one thing the gate over carried code refuses.";
  arguments_assert(arguments, 1);
  let b = browser_is();
  if (b) {
    await clipboard_copy_browser(text);
    return;
  }
  let clipboard = await import("clipboardy");
  await clipboard.default.write(text);
}
