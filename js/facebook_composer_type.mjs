import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_composer_type(page, text) {
  "$plain page";
  "$plain text";
  "Types text into the open box for a new post, keeping its line breaks.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let box = await page.waitForSelector(
    '[role=dialog][aria-label="Create post"] [role=textbox]',
  );
  await box.click();
  await sleep(1000);
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
