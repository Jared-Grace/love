import { facebook_page_open } from "./facebook_page_open.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_dialog_labels } from "./facebook_dialog_labels.mjs";
import { facebook_dialog_click } from "./facebook_dialog_click.mjs";
export async function facebook_text_post(text) {
  "$plain text";
  "Posts words with no film to the facebook profile the page profile is signed in to, publicly, and answers the steps it took. Every step leaves a picture, numbered in order.";
  "★ IT POSTS NOTHING UNLESS THE POST READS PUBLIC AND THE AI LABEL READS OFF. The words are the bible's own and were not made by a model, so a label saying otherwise would be false - the film poster checks the opposite, because its singing was.";
  "★ IT CHECKS THE LAST WORDS LANDED IN THE BOX BEFORE PRESSING ANYTHING, so a long chapter that the box fell behind on cannot go out cut short.";
  "★ A POST IS DONE WHEN NO SEND BUTTON IS LEFT, NEVER WHEN THE WORD 'posting' IS GONE FROM THE PAGE: these words are read back on the page once posted, and any of them might hold it.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(
    "https://www.facebook.com/CHRISTrosetolife/",
  );
  let page = o.page;
  let step = "open the composer";
  let steps = [];
  async function picture_take() {
    let picture = folder_gitignore_join(
      "facebook_text_post_" + steps.length + ".png",
    );
    await page.screenshot({
      path: picture,
    });
    steps.push(step + " " + picture);
  }
  try {
    let opened = await page.evaluate(
      "(function(){var es=[].slice.call(document.querySelectorAll('[role=button]'));var e=es.find(function(x){return (x.innerText||'').indexOf(\"What's on your mind\")>=0});if(!e)return false;e.click();return true})()",
    );
    if (!opened) {
      throw new Error("no 'What's on your mind' box");
    }
    await page.waitForSelector('[role=dialog][aria-label="Create post"]');
    await sleep(3000);
    await picture_take();
    step = "write the words";
    let box = await page.waitForSelector(
      '[role=dialog][aria-label="Create post"] [role=textbox]',
    );
    await box.click();
    await sleep(1000);
    let lines = text.split("\n");
    let i = 0;
    while (i < lines.length) {
      if (i > 0) {
        await page.keyboard.down("Shift");
        await page.keyboard.press("Enter");
        await page.keyboard.up("Shift");
      }
      await page.keyboard.type(lines[i]);
      i = i + 1;
    }
    await sleep(3000);
    await picture_take();
    step = "the last words";
    let tail = text.slice(-30);
    let landed = await page.evaluate(
      "(function(t){var b=document.querySelector('[role=dialog][aria-label=\"Create post\"] [role=textbox]');return !!b&&(b.innerText||'').trim().slice(-t.length)===t})(" +
        JSON.stringify(tail) +
        ")",
    );
    if (!landed) {
      throw new Error("the box does not end with '" + tail + "'");
    }
    step = "public and no ai label";
    let labels = await facebook_dialog_labels(page);
    function public_is(l) {
      let r = l.indexOf("Sharing with Public") >= 0;
      return r;
    }
    if (!labels.some(public_is)) {
      throw new Error(
        "privacy does not read public; buttons: " + JSON.stringify(labels),
      );
    }
    function ai_off_is(l) {
      let r = l.indexOf("AI label off") >= 0;
      return r;
    }
    if (!labels.some(ai_off_is)) {
      throw new Error(
        "AI label does not read off; buttons: " + JSON.stringify(labels),
      );
    }
    step = "post";
    let posted = null;
    let presses = 0;
    while (posted === null && presses < 5) {
      posted = await facebook_dialog_click(page, "Post");
      if (posted === null) {
        let next = await facebook_dialog_click(page, "Next");
        if (next !== "clicked") {
          throw new Error("neither Post nor Next: Next was " + next);
        }
        presses = presses + 1;
        await sleep(5000);
        await picture_take();
      }
    }
    if (posted !== "clicked") {
      let v = await facebook_dialog_labels(page);
      throw new Error("Post was " + posted + "; buttons: " + JSON.stringify(v));
    }
    step = "posted";
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
    await sleep(5000);
    await picture_take();
    let r = {
      steps,
    };
    return r;
  } catch (e) {
    await picture_take();
    throw new Error(
      "facebook text post stopped at step '" +
        step +
        "': " +
        e.message +
        " pictures: " +
        JSON.stringify(steps),
    );
  } finally {
    await o.browser.close();
  }
}
