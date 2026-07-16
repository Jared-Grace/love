import { browser_is } from "./browser_is.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
export async function window_share(url) {
  let b = browser_is();
  let can_share = b && navigator.share;
  if (can_share) {
    async function share() {
      await navigator.share({
        url,
      });
    }
    await catch_ignore_async(share);
    return;
  }
  await clipboard_copy(url);
}
