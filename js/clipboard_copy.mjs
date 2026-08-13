import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { browser_is } from "./browser_is.mjs";
export async function clipboard_copy(text) {
  let b = browser_is();
  if (b) {
    await clipboard_copy_browser(text);
    return;
  }
  let clipboard = await import("clipboardy");
  await clipboard.default.write(text);
}
