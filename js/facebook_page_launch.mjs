import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { facebook_browser_shared_attach } from "./facebook_browser_shared_attach.mjs";
import { facebook_page_stand_in } from "./facebook_page_stand_in.mjs";
export async function facebook_page_launch() {
  ("Waits its turn at the signed-in facebook profile, then opens a fresh tab, with no window, in the browser kept open in it, and answers the stand-in ",
    fn_name("facebook_page_stand_in"),
    " makes: close() closes the tab and lets the next run in, and the browser itself stays open for the next run. A run that wants its tab kept for its next turn calls page_keep() before close().");
  ("★ EVERY RUN THAT OPENS THE PROFILE OPENS IT HERE, so the waiting in turn cannot be forgotten by one of them.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let lock = await facebook_page_lock_take();
  let browser = null;
  let page = null;
  try {
    browser = await facebook_browser_shared_attach();
    page = await browser.newPage();
  } catch (e) {
    if (not_equal(browser, null)) {
      await browser.disconnect();
    }
    lock.kill();
    throw e;
  }
  let r = facebook_page_stand_in(lock, browser, page, false);
  return r;
}
