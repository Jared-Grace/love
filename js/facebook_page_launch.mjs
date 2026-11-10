import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { facebook_browser_shared_attach } from "./facebook_browser_shared_attach.mjs";
export async function facebook_page_launch() {
  "Waits its turn at the signed-in facebook profile, then opens a fresh tab, with no window, in the browser kept open in it, and answers a stand-in for the browser: pages() answers that one tab, userAgent() the browser's, and close() closes the tab, lets go of the browser, and lets the next run in. The browser itself stays open for the next run.";
  "★ EVERY RUN THAT OPENS THE PROFILE OPENS IT HERE, so the waiting in turn cannot be forgotten by one of them.";
  "★ CLOSE MEANS THIS RUN'S TAB, NEVER THE BROWSER: every caller ends with close(), and the browser is shared by every run - so the stand-in's close() ends only what this run opened. A run that wants its tab kept for its next turn calls page_keep() before close().";
  "★ THE TURN ENDS ONLY AFTER LETTING GO, so no other run drives the browser while this one still is.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
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
  let kept = false;
  let closed = false;
  let r = {
    pages: async function pages() {
      let r2 = [page];
      return r2;
    },
    userAgent: async function userAgent() {
      let agent = await browser.userAgent();
      return agent;
    },
    page_keep: function page_keep() {
      kept = true;
    },
    close: async function close() {
      if (closed) {
        return;
      }
      closed = true;
      try {
        if (not(kept)) {
          await page.close();
        }
        await browser.disconnect();
      } finally {
        lock.kill();
      }
    },
  };
  return r;
}
