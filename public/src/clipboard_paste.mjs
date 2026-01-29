import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function clipboard_paste() {
  let b = browser_is();
  if (b) {
    let v = await navigator.clipboard.readText();
    return v;
  }
  const clipboard = await import("clipboardy");
  let paste = null;
  paste = await clipboard.default.read();
  return paste;
}
