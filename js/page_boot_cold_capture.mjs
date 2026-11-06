import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { page_boot_cold_capture_generic } from "./page_boot_cold_capture_generic.mjs";
export async function page_boot_cold_capture(url) {
  "open one page the way a stranger opens it - a browser that has never been here, no hash after the address, nothing remembered - and hand back what it threw on the way in and what it had drawn once it stopped changing. Every request is answered by whoever the address names; the twin that takes a preparing step is for a caller that answers some of them itself.";
  url_opened_unasked_assert(url);
  async function page_prepare(page) {}
  let capture = await page_boot_cold_capture_generic(url, page_prepare);
  return capture;
}
