import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { clipboard_copy_older } from "./clipboard_copy_older.mjs";
import { error } from "./error.mjs";
import { not } from "./not.mjs";
export async function clipboard_copy_browser(text) {
  "Put writing on the clipboard from inside a page, asking the modern way first and falling back to the older one, and throwing only when both are refused.";
  "The modern way is missing entirely on a page served over plain http, which is how these pages are read on a phone - so a copy button that only knows the modern way is a button that does nothing on the one machine the apps are tested on. It is also refused now and then on pages that do have it, when the copy did not follow something the person just did, and the older way answers both cases at once.";
  arguments_assert(arguments, 1);
  let modern = navigator.clipboard && navigator.clipboard.writeText;
  if (modern) {
    async function lambda() {
      await navigator.clipboard.writeText(text);
      let modern_done = true;
      return modern_done;
    }
    let written = await catch_null_async(lambda);
    if (written) {
      return;
    }
  }
  let done = clipboard_copy_older(text);
  let refused = not(done);
  if (refused) {
    error("This browser would not let the writing be copied.");
  }
}
