import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { facebook_page_launch_parked } from "./facebook_page_launch_parked.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function facebook_page_parked_look(name) {
  "$plain name";
  "Waits its turn, then leaves a picture of the tab parked under name in the shared facebook browser, and answers its address and, when a chat list is on it, how far the list is scrolled and the conversation numbers of the rows on the page, top to bottom. It moves nothing and clicks nothing, and the tab stays parked as it was.";
  "★ IT EXISTS TO SEE WHY A WALK STOPPED, without starting the walk again: a parked tab is the one place the walk's state is still there to read.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_launch_parked(name);
  try {
    if (o.fresh) {
      let r2 = {
        fresh: true,
      };
      return r2;
    }
    let pages = await o.pages();
    let page = pages[0];
    let picture = folder_gitignore_join(
      text_combine_multiple([fn_name("facebook_page_parked_look"), ".png"]),
    );
    await page.screenshot({
      path: picture,
    });
    let list = await page.evaluate(
      "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');if(!g)return null;var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});var ids=Array.from(g.querySelectorAll('a[href*=\"/t/\"]')).map(function(a){var m=a.getAttribute('href').match(/\\/t\\/(\\d+)/);return m?m[1]:null});return {scroll_top:sc?sc.scrollTop:null,scroll_height:sc?sc.scrollHeight:null,client_height:sc?sc.clientHeight:null,ids:ids}})()",
    );
    let r = {
      fresh: false,
      address: page.url(),
      picture,
      list,
    };
    return r;
  } finally {
    await o.close();
  }
}
