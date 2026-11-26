import { equal } from "./equal.mjs";
import { browser_is } from "./browser_is.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
export async function window_share(url) {
  "Hands url to the device's share sheet, or copies it where there is none. The answer says which happened: shared, cancelled, or copied.";
  "2026-11-26, at the human's report that a second share in the bible app did nothing: a share that fails for any reason but the person closing the sheet now copies the link instead, rather than being swallowed. On Android Chrome a share whose sheet never reported back leaves the next one refused, and swallowing that made the press look dead. Not picked: retrying the share, which would be refused the same way";
  let b = browser_is();
  let can_share = b && navigator.share;
  if (can_share) {
    try {
      await navigator.share({
        url,
      });
      let r = "shared";
      return r;
    } catch (e) {
      if (e && equal(e.name, "AbortError")) {
        let r2 = "cancelled";
        return r2;
      }
    }
  }
  await clipboard_copy(url);
  let r3 = "copied";
  return r3;
}
