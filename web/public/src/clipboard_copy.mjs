import { browser_is } from "./browser_is.mjs";
export async function clipboard_copy(text) {
  let v = browser_is();
  const clipboard = await import("clipboardy");
  await clipboard.default.write(text);
}
