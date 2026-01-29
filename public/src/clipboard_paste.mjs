import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function clipboard_paste() {
  let b = browser_is();
  if (b) {
    await navigator.clipboard.readText();
    return;
  }
  const clipboard = await import("clipboardy");
  await clipboard.default.read();
}
