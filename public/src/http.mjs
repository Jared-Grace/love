import { string_starts_with } from "./string_starts_with.mjs";
import { browser_is } from "./browser_is.mjs";
import { error } from "./error.mjs";
import { not } from "./not.mjs";
export async function http(url) {
  let b = browser_is();
  if (b) {
    const response = await fetch(url);
    if (not(response.ok)) {
      error("Failed to fetch file");
    }
    const text = await response.text();
    return text;
  }
  let sw = string_starts_with(url, "https://");
  if (sw) {
    await import("https");
  }
}
