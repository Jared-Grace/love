import { facebook_page_open } from "./facebook_page_open.mjs";
export async function facebook_reel_line_find(reel_url, words) {
  "$plain reel_url";
  "$plain words";
  "Opens a reel and answers the first line of the first piece of its text that holds words, or null when none does - how a reel's own caption is read back. It reads; it never posts.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(reel_url);
  try {
    let r = await o.page.evaluate(
      "(function(w){var es=[].slice.call(document.querySelectorAll('[dir=auto]'));for(var i=0;i<es.length;i++){var t=(es[i].innerText||'').trim();if(t.indexOf(w)>=0){return t.split('\\n')[0]}}return null})(" +
        JSON.stringify(words) +
        ")",
    );
    return r;
  } finally {
    await o.browser.close();
  }
}
