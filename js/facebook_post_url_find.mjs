import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_post_url_find(heading) {
  "$plain heading";
  "Answers the address of the newest post on the CHRISTrosetolife profile whose words begin with heading, or null when none shows. It reads; it never posts.";
  "★ THE POST IS KNOWN BY ITS OWN WORDS, NEVER BY BEING NEWEST. The newest thing on a profile can be a reel from another run, and a link commented on the wrong post says nothing and stays up.";
  "★ THE ADDRESS ONLY APPEARS WHEN THE POINTER IS OVER THE POST'S DATE. Until then facebook's links are blank, which is why listing the page's links found no posts of its own, so each link in the post is hovered and read in page order. The date comes before any comment.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(
    "https://www.facebook.com/CHRISTrosetolife/",
  );
  let page = o.page;
  try {
    let tries = 0;
    while (tries < 6) {
      let found = await page.evaluateHandle(
        "(function(h){var es=[].slice.call(document.querySelectorAll('[dir=auto]'));var e=es.find(function(x){return (x.innerText||'').trim().indexOf(h)===0});while(e&&!e.querySelector('[aria-label^=\"Actions for this post\"]')){e=e.parentElement}return e||null})(" +
          JSON.stringify(heading) +
          ")",
      );
      let post = found.asElement();
      if (post) {
        let links = await post.$$("a");
        for (let link of links) {
          let shape = await link.boundingBox();
          if (shape) {
            await link.hover();
            await sleep(700);
            let property = await link.getProperty("href");
            let href = await property.jsonValue();
            if (
              /\/posts\/|\/reel\/\d|\/videos\/\d|\/permalink|story_fbid/.test(
                href,
              )
            ) {
              if (href.includes("story_fbid")) {
                return href;
              }
              let r = href.split("?")[0];
              return r;
            }
          }
        }
        return null;
      }
      await page.evaluate("window.scrollBy(0, 1500)");
      await sleep(3000);
      tries = tries + 1;
    }
    return null;
  } finally {
    await o.browser.close();
  }
}
