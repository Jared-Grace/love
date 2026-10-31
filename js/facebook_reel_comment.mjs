import { facebook_page_open } from "./facebook_page_open.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_reel_comment(reel_url, text) {
  "$plain reel_url";
  "$plain text";
  "Writes text as a comment on a reel that is already posted: click 'Write a comment…', type, press 'Post comment', then check the box emptied and the words show on the page. Every step leaves a picture, numbered in order.";
  "★ A LINK GOES IN A COMMENT, NOT IN THE POST. A link to another site in the post itself is commonly said to cut how many people facebook shows it to; the human chose the comment on 2026-10-31 ('if reach may drop then comment is fine'). Nobody has measured it for this profile.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(reel_url);
  let page = o.page;
  let step = "open the reel";
  let steps = [];
  async function picture_take() {
    let picture = folder_gitignore_join(
      "facebook_reel_comment_" + steps.length + ".png",
    );
    await page.screenshot({
      path: picture,
    });
    steps.push(step + " " + picture);
  }
  try {
    await picture_take();
    step = "write a comment";
    let box = await page.waitForSelector(
      '[role=textbox][aria-label="Write a comment…"]',
    );
    await box.click();
    await sleep(2000);
    await page.keyboard.type(text);
    await sleep(3000);
    await picture_take();
    step = "post comment";
    let posted = await page.evaluate(
      "(function(){var es=[].slice.call(document.querySelectorAll('[role=button][aria-label=\"Post comment\"]')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0});var e=es[es.length-1];if(!e)return null;if(e.getAttribute('aria-disabled')==='true')return 'disabled';e.click();return 'clicked'})()",
    );
    if (posted !== "clicked") {
      throw new Error("Post comment was " + posted);
    }
    await sleep(10000);
    await picture_take();
    step = "comment shown";
    let v = text.slice(0, 20);
    let shown = await page.evaluate(
      "(function(t){var b=document.querySelector('[role=textbox][aria-label=\"Write a comment…\"]');var left=b?(b.innerText||'').trim():'';return {left:left,shown:left===''&&document.body.innerText.indexOf(t)>=0}})(" +
        JSON.stringify(v) +
        ")",
    );
    if (!shown.shown) {
      throw new Error(
        "the comment is not shown; the box holds '" + shown.left + "'",
      );
    }
    let r = {
      reel_url,
      steps,
    };
    return r;
  } catch (e) {
    await picture_take();
    throw new Error(
      "reel comment stopped at step '" +
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
