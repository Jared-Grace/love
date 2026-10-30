import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_page_links } from "./facebook_page_links.mjs";
export async function facebook_reel_newest_url() {
  arguments_assert(arguments, 0);
  ("Answers the address of the newest reel on the CHRISTrosetolife profile's reels tab, or null when the tab shows none. The tab lists its reels newest first; a link to the tab itself ('/reel/?s=tab') is not a reel, so only an address with a reel's number counts.");
  let links = await facebook_page_links(
    "https://www.facebook.com/CHRISTrosetolife/reels/",
    "/reel/",
  );
  ("★ ONLY A TILE OF THE TAB COUNTS, MARKED s=fb_shorts_profile. A comment notification is a reel link too and sits above the tab on the page; from 2026-10-29 one about the old Psalm 150 reel came first, so three runs waited out the hour and a half for a reel already there. Worse, a new notification arriving mid-wait would have handed over an OLD reel as new, and its cover would have been replaced with the wrong picture.");
  for (let link of links) {
    let m = link.match(/\/reel\/(\d+)/);
    if (m && link.includes("s=fb_shorts_profile")) {
      let r = "https://www.facebook.com/reel/" + m[1] + "/";
      return r;
    }
  }
  return null;
}
