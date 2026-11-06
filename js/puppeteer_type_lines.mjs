import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export async function puppeteer_type_lines(page, text) {
  "$plain page";
  "$plain text";
  "Types text into whatever box has the focus, keeping its line breaks. A line break is Shift with Enter, because Enter alone sends a chat message or posts.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let lines = text.split("\n");
  let i = 0;
  while (less_than(i, lines.length)) {
    if (greater_than(i, 0)) {
      await page.keyboard.down("Shift");
      await page.keyboard.press("Enter");
      await page.keyboard.up("Shift");
    }
    await page.keyboard.type(lines[i]);
    i = i + 1;
  }
}
