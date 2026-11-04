import { sleep } from "./sleep.mjs";
export async function facebook_dialog_post_gone_wait(page) {
  "$plain page";
  "Waits until no Post button shows in any open dialog, which is how a post with no film says it has gone. Throws after ten minutes.";
  "★ DONE WHEN NO SEND BUTTON IS LEFT, NEVER WHEN THE WORD 'posting' IS GONE FROM THE PAGE: a post's own words are read back on the page once posted, and any of them might hold it.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let waited = 0;
  let busy = true;
  while (busy) {
    await sleep(5000);
    waited = waited + 5000;
    busy = await page.evaluate(
      "[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button')).some(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&(x.innerText||'').trim()==='Post'})",
    );
    if (busy && waited >= 600000) {
      throw new Error("the Post button still shows after ten minutes");
    }
  }
}
