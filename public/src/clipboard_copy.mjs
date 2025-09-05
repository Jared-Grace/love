import { browser_is } from "./browser_is.mjs";
export async function clipboard_copy(text) {
  let b = browser_is();
  if (b) {
    await navigator.clipboard.writeText(text);
  }
  const clipboard = await import("clipboardy");
  await clipboard.default.write(text);
}
