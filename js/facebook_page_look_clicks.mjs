import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function facebook_page_look_clicks(url, click_labels) {
  "$plain url";
  "$plain click_labels";
  "Opens a facebook address with no window in the signed-in page profile, clicks in turn the first thing whose name or text holds each of click_labels, then leaves a picture of the page and answers every button, menu item, text box and file box on it. It is for learning a page that is only reached by several clicks, such as a posted reel's edit page; it never presses a button that posts or saves unless told to.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(url);
  let page = o.page;
  try {
    let clicked = [];
    ("click_labels is one comma-joined text, because a command line hands over text, never a list.");
    for (let label of click_labels.split(",")) {
      let c = await page.evaluate(
        "(function(w){var es=[].slice.call(document.querySelectorAll('[role=button],[role=link],a,button,[role=menuitem],[role=radio],[role=option],[role=tab]')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0});var e=es.find(function(x){return ((x.getAttribute('aria-label')||'')+' '+(x.innerText||'')).indexOf(w)>=0});if(!e)return null;e.click();return (e.getAttribute('aria-label')||'')+' | '+(e.innerText||'').slice(0,80)})(" +
          JSON.stringify(label) +
          ")",
      );
      clicked.push(c);
      await sleep(5000);
    }
    let name = text_combine_multiple([
      fn_name("facebook_page_look_clicks"),
      ".png",
    ]);
    let picture = folder_gitignore_join(name);
    await page.screenshot({
      path: picture,
    });
    let things = await page.evaluate(
      "[].slice.call(document.querySelectorAll('[role=button],button,[role=menuitem],[role=tab],[role=textbox],input[type=file],[contenteditable=true],[role=dialog],[role=radio],[role=switch]')).filter(function(e){var r=e.getBoundingClientRect();return e.type==='file'||(r.width>0&&r.height>0)}).map(function(e){return [e.tagName,e.getAttribute('role')||'',e.getAttribute('aria-label')||'',(e.innerText||'').slice(0,60).replace(/\\n/g,' / '),e.getAttribute('accept')||''].join(' | ')}).slice(0,150)",
    );
    let r = {
      address: page.url(),
      clicked,
      picture,
      things,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
