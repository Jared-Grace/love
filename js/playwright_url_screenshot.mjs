import { picture_saved_unasked_assert } from "./picture_saved_unasked_assert.mjs";
import { playwright_url_screenshot_anywhere } from "./playwright_url_screenshot_anywhere.mjs";
export async function playwright_url_screenshot(url, f_path, width, height) {
  "$plain url";
  "$plain f_path";
  "$plain width";
  "$plain height";
  "Saves a picture of a page, at a window of the size asked for, to the ignored folder or Claude's scratch folder - the one a command may run with no prompt, because it cannot overwrite anything that matters.";
  picture_saved_unasked_assert(f_path);
  await playwright_url_screenshot_anywhere(url, f_path, width, height);
}
