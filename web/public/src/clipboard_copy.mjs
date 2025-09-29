import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function clipboard_copy(text) {
  let b = browser_is();
  if (b) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const clipboard = await import("clipboardy");
  await clipboard.default.write(text);
}
