import { not } from "./not.mjs";
export function facebook_page_stand_in(lock, browser, page, kept) {
  "Answers the stand-in a facebook run is handed instead of the shared browser: pages() answers its one tab page, userAgent() the browser's, page_keep() asks for the tab to be kept, and close() closes the tab unless it is kept, lets go of browser, and kills lock so the next run may take its turn. kept says whether the tab is kept from the start.";
  "★ CLOSE MEANS THIS RUN'S TAB, NEVER THE BROWSER: every caller ends with close(), and the browser is shared by every run - so close() ends only what this run opened.";
  "★ THE TURN ENDS ONLY AFTER LETTING GO, so no other run drives the browser while this one still is.";
  let keep = kept;
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
      keep = true;
    },
    close: async function close() {
      if (closed) {
        return;
      }
      closed = true;
      try {
        if (not(keep)) {
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
