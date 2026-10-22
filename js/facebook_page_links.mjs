import { facebook_page_open } from "./facebook_page_open.mjs";
export async function facebook_page_links(url, word) {
  "$plain url";
  "$plain word";
  "Answers, in page order and without repeats, every link address on a facebook page that holds word - e.g. '/reel/' on a profile's reels tab lists its reels newest first. It reads; it never posts.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(url);
  try {
    let r = await o.page.evaluate(
      "(function(w){var s=[];[].slice.call(document.querySelectorAll('a[href]')).forEach(function(a){var h=a.href;if(h.indexOf(w)>=0&&s.indexOf(h)<0)s.push(h)});return s})(" +
        JSON.stringify(word) +
        ")",
    );
    return r;
  } finally {
    await o.browser.close();
  }
}
