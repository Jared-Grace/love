import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_reels_tab_urls_all() {
  arguments_assert(arguments, 0);
  ("Answers the address of every reel on the CHRISTrosetolife profile's reels tab, newest first, scrolling down until three scrolls in a row bring no new reel. It reads; it never posts.");
  ("★ ONLY A TILE OF THE TAB COUNTS, MARKED s=fb_shorts_profile, the same rule the newest-reel check keeps: a comment notification is a reel link too and sits above the tab.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let o = await facebook_page_open(
    "https://www.facebook.com/CHRISTrosetolife/reels/",
  );
  try {
    let urls = [];
    let still = 0;
    let scrolls = 0;
    while (still < 3 && scrolls < 150) {
      let ids = await o.page.evaluate(
        "(function(){var s=[];[].slice.call(document.querySelectorAll('a[href]')).forEach(function(a){var h=a.href;var m=h.match(/\\/reel\\/(\\d+)/);if(m&&h.indexOf('s=fb_shorts_profile')>=0&&s.indexOf(m[1])<0)s.push(m[1])});return s})()",
      );
      let before = urls.length;
      for (let id of ids) {
        let url = "https://www.facebook.com/reel/" + id + "/";
        if (!urls.includes(url)) {
          urls.push(url);
        }
      }
      still = urls.length > before ? 0 : still + 1;
      await o.page.evaluate("window.scrollBy(0, 2000)");
      await sleep(3000);
      scrolls = scrolls + 1;
    }
    return urls;
  } finally {
    await o.browser.close();
  }
}
