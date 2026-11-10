import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { facebook_browser_shared_attach } from "./facebook_browser_shared_attach.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_page_stand_in } from "./facebook_page_stand_in.mjs";
export async function facebook_page_launch_parked(name) {
  "$plain name";
  ("Waits its turn at the signed-in facebook profile, then answers the tab parked under name in the browser kept open there - as it was left, wherever its page had scrolled to - or a fresh tab parked under name when there is none. Answers the stand-in ",
    fn_name("facebook_page_launch"),
    " answers, whose close() always keeps the tab, plus fresh: whether the tab is new and so holds nothing yet.");
  ("★ A PARKED TAB SKIPS THE WALK BACK: the chat list keeps its place between runs, so a run that walked to the bottom once need not walk there again.");
  ("★ A TAB IS KNOWN BY CHROME'S OWN NUMBER FOR IT, kept in facebook_tabs_parked.json - a number, never anything on the page, so nothing anyone wrote is kept. A number whose tab is gone (the browser was closed or restarted) gives a fresh tab.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let lock = await facebook_page_lock_take();
  let browser = null;
  try {
    browser = await facebook_browser_shared_attach();
    let file = folder_gitignore_join("facebook_tabs_parked.json");
    let parked = {};
    if (await file_exists(file)) {
      parked = await file_read_json(file);
    }
    let page = null;
    function lambda(t) {
      let left = t.type();
      let r2 = equal(left, "page") && equal(t._targetId, parked[name]);
      return r2;
    }
    let target = browser.targets().find(lambda);
    if (not_equal(target, undefined)) {
      page = await target.page();
    }
    let fresh = equal(page, null);
    if (fresh) {
      page = await browser.newPage();
      parked[name] = page.target()._targetId;
      await file_overwrite_json(file, parked);
    }
    let r = facebook_page_stand_in(lock, browser, page, true);
    r.fresh = fresh;
    return r;
  } catch (e) {
    if (not_equal(browser, null)) {
      await browser.disconnect();
    }
    lock.kill();
    throw e;
  }
}
