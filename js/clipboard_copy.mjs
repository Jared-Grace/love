import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { clipboard_node_module } from "./clipboard_node_module.mjs";
export async function clipboard_copy(text) {
  "$plain text";
  "Puts writing on the clipboard, asking the page for it inside a browser and the machine itself for it at a terminal.";
  arguments_assert(arguments, 1);
  let b = browser_is();
  if (b) {
    await clipboard_copy_browser(text);
    return;
  }
  let clipboard = await clipboard_node_module();
  await clipboard.write(text);
}
