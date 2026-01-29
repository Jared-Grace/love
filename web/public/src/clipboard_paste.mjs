import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function clipboard_paste() {
  let b = browser_is();
  let paste = null;
  if (b) {
    paste = await navigator.clipboard.readText();
    return paste;
  }
  const clipboard = await import("clipboardy");
  paste = await clipboard.default.read();
  return paste;
}
