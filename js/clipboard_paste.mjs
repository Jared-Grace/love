import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { clipboard_paste_browser } from "./clipboard_paste_browser.mjs";
import { clipboard_node_module } from "./clipboard_node_module.mjs";
export async function clipboard_paste() {
  "Hands back whatever is on the clipboard at this moment, asking the browser for it inside a page and the machine itself for it at a terminal.";
  arguments_assert(arguments, 0);
  let b = browser_is();
  let paste = null;
  if (b) {
    paste = await clipboard_paste_browser();
    return paste;
  }
  let clipboard = await clipboard_node_module();
  paste = await clipboard.read();
  return paste;
}
