import { fn_name } from "./fn_name.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_page_point_look(url, x, y) {
  "$plain url";
  "Opens a facebook address in the signed-in page profile and answers what is drawn at the point x, y (in the 1400 by 1000 window): the element there and each one around it, with its tag, role, screen-reader name and the start of its html. It reads; it never clicks.";
  ("★ IT EXISTS FOR A BUTTON THE PAGE GIVES NO NAME: ",
    fn_name("facebook_page_look"),
    " lists only named or roled things, and on 2026-11-08 the reel's three-dot menu was in neither list.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let o = await facebook_page_open(url);
  let page = o.page;
  try {
    await sleep(10000);
    let r = await page.evaluate(
      "(function(x,y){var e=document.elementFromPoint(x,y);var out=[];while(e&&out.length<8){out.push({tag:e.tagName,role:e.getAttribute('role'),label:e.getAttribute('aria-label'),html:e.outerHTML.slice(0,300)});e=e.parentElement}return out})(" +
        Number(x) +
        "," +
        Number(y) +
        ")",
    );
    return r;
  } finally {
    await o.browser.close();
  }
}
