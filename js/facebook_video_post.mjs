import { fn_name } from "./fn_name.mjs";
import { facebook_page_launch } from "./facebook_page_launch.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_composer_open } from "./facebook_composer_open.mjs";
import { facebook_composer_type } from "./facebook_composer_type.mjs";
import { facebook_dialog_labels } from "./facebook_dialog_labels.mjs";
import { facebook_dialog_click } from "./facebook_dialog_click.mjs";
import { facebook_composer_ai_label_add } from "./facebook_composer_ai_label_add.mjs";
import { facebook_reel_cover_upload } from "./facebook_reel_cover_upload.mjs";
export async function facebook_video_post(file_path, text, cover_path) {
  "$plain file_path";
  "$plain text";
  "$plain cover_path";
  "★ A REEL'S COVER IS SET TO THE PICTURE AT cover_path once its settings page shows, because otherwise it is the film's first frame, and a film that begins dark showed black until played (the human, 2026-10-20).";
  "Posts one film with words above it to the facebook profile the page profile is signed in to, public and labelled as made with AI, and answers the steps it took.";
  "★ IT POSTS NOTHING UNLESS THE POST READS PUBLIC AND THE AI LABEL READS ON. Both are checked on the composer's own button names before it moves on, so a facebook that changed its defaults stops the post rather than sending it out wrong. The singing is made with a model, and youtube already carries the same videos marked as altered or synthetic.";
  "★ THE BROWSER READS THE FILM OFF THE DISK ITSELF, through the composer's file box, so nothing carries its bytes and no size limit of a message-passing tool applies.";
  ("★ EVERY STEP LEAVES A PICTURE, numbered in order, because with no window there is nothing else to look at afterwards - the same lesson as ",
    fn_name("youtube_studio_upload_private"),
    ".");
  ("★ IT KEEPS THE BROWSER OPEN UNTIL THE UPLOAD STOPS SAYING IT IS UPLOADING. Facebook carries on sending the film after the post button is pressed, and closing the browser then would leave a post with no film in it.");
  ("What runs inside the page is written as text, never as a function, because the canonicalizer rewrites a function's comparisons into helpers the page has never heard of.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let browser = await facebook_page_launch();
  let step = "launch";
  let page = null;
  let steps = [];
  async function picture_take() {
    let picture = folder_gitignore_join(
      "facebook_video_post_" + steps.length + ".png",
    );
    await page.screenshot({
      path: picture,
    });
    steps.push(step + " " + picture);
  }
  try {
    let pages = await browser.pages();
    page = pages[0];
    let agent = await browser.userAgent();
    let v = agent.replace("HeadlessChrome", "Chrome");
    await page.setUserAgent(v);
    page.setDefaultTimeout(120000);
    step = "open the profile";
    await page.goto("https://www.facebook.com/CHRISTrosetolife/");
    await sleep(6000);
    step = "open the composer";
    await facebook_composer_open(page);
    await picture_take();
    step = "hand over the film";
    let input = await page.waitForSelector(
      '[role=dialog][aria-label="Create post"] input[type=file]',
    );
    await input.uploadFile(file_path);
    await sleep(8000);
    await picture_take();
    step = "write the words";
    await facebook_composer_type(page, text);
    await sleep(2000);
    await picture_take();
    step = "ai label";
    let labels = await facebook_dialog_labels(page);
    function lambda(l) {
      let has_off = l.indexOf("AI label off") >= 0;
      return has_off;
    }
    let ai_off = labels.find(lambda);
    if (ai_off) {
      await facebook_dialog_click(page, "AI label off");
      await facebook_composer_ai_label_add(page);
      await picture_take();
    }
    labels = await facebook_dialog_labels(page);
    function lambda2(l) {
      let has_on = l.indexOf("AI label") === 0 && l.indexOf("AI label off") < 0;
      return has_on;
    }
    let ai_on = labels.find(lambda2);
    if (!ai_on) {
      throw new Error(
        "AI label does not read on; buttons: " + JSON.stringify(labels),
      );
    }
    step = "public";
    function lambda3(l) {
      let has_public = l.indexOf("Sharing with Public") >= 0;
      return has_public;
    }
    let is_public = labels.find(lambda3);
    if (!is_public) {
      throw new Error(
        "privacy does not read public; buttons: " + JSON.stringify(labels),
      );
    }
    ("★ A TALL FILM IS TAKEN AS A REEL, and a reel has pages of its own after the first 'Next' - 'Edit reel' with trim and captions, then more - so it presses 'Next' until a button that sends the post shows, at most five times. Seen 2026-10-18.");
    step = "post";
    let posted = null;
    let presses = 0;
    ("★ THE COVER STEP IS OFF FOR NOW (covered starts true). Since it was added, 1 run posted and 4 did not - two sat on 'Posting' for good - so the human asked on 2026-10-22 to try a run without it, to learn whether it is the cause. Set covered back to false to turn it on.");
    let covered = true;
    while (posted === null && presses < 5) {
      let post_seen = await page.evaluate(
        "[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button')).some(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&(x.innerText||'').trim()==='Post'})",
      );
      if (post_seen && !covered) {
        step = "cover";
        await facebook_reel_cover_upload(page, cover_path, picture_take);
        covered = true;
        step = "post";
      }
      posted = await facebook_dialog_click(page, "Post");
      if (posted === null) {
        posted = await facebook_dialog_click(page, "Share");
      }
      if (posted === null) {
        posted = await facebook_dialog_click(page, "Share now");
      }
      if (posted === null) {
        let next = await facebook_dialog_click(page, "Next");
        if (next !== "clicked") {
          throw new Error("neither a send button nor Next: Next was " + next);
        }
        presses = presses + 1;
        await sleep(5000);
        await picture_take();
      }
    }
    if (posted !== "clicked") {
      let v2 = await facebook_dialog_labels(page);
      throw new Error(
        "Post was " + posted + "; buttons: " + JSON.stringify(v2),
      );
    }
    await sleep(8000);
    await picture_take();
    step = "upload finished";
    ("★ IT ASKS THE PAGE AGAIN EVERY TEN SECONDS FOR UP TO AN HOUR, rather than handing the page one long wait. On 2026-10-21 one long wait died at exactly ten minutes, the protocolTimeout, with the page still reading 'Posting'; the human said waiting a long time is fine.");
    let waited = 0;
    let busy = true;
    while (busy) {
      busy = await page.evaluate(
        "/uploading|posting/i.test(document.body.innerText)",
      );
      if (busy) {
        if (waited >= 3600000) {
          throw new Error("still uploading or posting after an hour");
        }
        await sleep(10000);
        waited = waited + 10000;
      }
    }
    await sleep(10000);
    await picture_take();
    let r = {
      file_path,
      steps,
    };
    return r;
  } catch (e) {
    if (page) {
      await picture_take();
    }
    throw new Error(
      "facebook post stopped at step '" +
        step +
        "': " +
        e.message +
        " pictures: " +
        JSON.stringify(steps),
    );
  } finally {
    await browser.close();
  }
}
