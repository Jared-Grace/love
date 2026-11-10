import { facebook_page_open } from "./facebook_page_open.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { facebook_composer_open } from "./facebook_composer_open.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_composer_type } from "./facebook_composer_type.mjs";
import { facebook_composer_public_ai_off_assert } from "./facebook_composer_public_ai_off_assert.mjs";
import { facebook_dialog_post_press } from "./facebook_dialog_post_press.mjs";
import { facebook_dialog_post_gone_wait } from "./facebook_dialog_post_gone_wait.mjs";
export async function facebook_text_post(text) {
  "$plain text";
  "Posts words with no film to the facebook profile the page profile is signed in to, publicly, and answers the steps it took. Every step leaves a picture, numbered in order.";
  "★ IT POSTS NOTHING UNLESS THE POST READS PUBLIC AND THE AI LABEL READS OFF. The words are the bible's own and were not made by a model, so a label saying otherwise would be false - the film poster checks the opposite, because its singing was.";
  "★ IT CHECKS EVERY WORD LANDED IN THE BOX BEFORE PRESSING ANYTHING, so a long chapter that the box fell behind on, or a line break it dropped, cannot go out.";
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
    await facebook_composer_open(page);
    await picture_take();
    ("★ THE WHOLE BOX IS COMPARED WITH THE WHOLE TEXT, AND A BOX THAT DIFFERS IS CLEARED AND TYPED AGAIN. Checking only the last words let a dropped line break through in the middle of a sermon post - verse 3 ran onto the end of verse 2 - while the same slip at the end was caught. Runs of spaces and line breaks are each read as one space on both sides, because the box shows a blank line in its own way; a line break the box lost leaves no space at all, so that is still caught. Three tries, then it stops with nothing posted.");
    let expected = text.replace(/\s+/g, " ").trim();
    let landed = false;
    let attempt = 0;
    while (!landed && attempt < 3) {
      step = "write the words";
      if (attempt > 0) {
        let box = await page.waitForSelector(
          '[role=dialog][aria-label="Create post"] [role=textbox]',
        );
        await box.click();
        await page.keyboard.down("Control");
        await page.keyboard.press("a");
        await page.keyboard.up("Control");
        await page.keyboard.press("Backspace");
        await sleep(1000);
      }
      await facebook_composer_type(page, text);
      await sleep(3000);
      await picture_take();
      step = "the words landed";
      landed = await page.evaluate(
        "(function(t){var b=document.querySelector('[role=dialog][aria-label=\"Create post\"] [role=textbox]');return !!b&&(b.innerText||'').replace(/\\s+/g,' ').trim()===t})(" +
          JSON.stringify(expected) +
          ")",
      );
      attempt = attempt + 1;
    }
    if (!landed) {
      throw new Error(
        "the box does not hold the text after " + attempt + " tries",
      );
    }
    step = "public and no ai label";
    await facebook_composer_public_ai_off_assert(page);
    step = "post";
    await facebook_dialog_post_press(page, picture_take);
    step = "posted";
    await facebook_dialog_post_gone_wait(page);
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
