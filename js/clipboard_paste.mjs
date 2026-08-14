import { browser_is } from "./browser_is.mjs";
import { clipboard_paste_browser } from "./clipboard_paste_browser.mjs";
export async function clipboard_paste() {
  "Hands back whatever is on the clipboard at this moment, asking the browser for it inside a page and the machine itself for it at a terminal.";
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
