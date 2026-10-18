import { fn_name } from "./fn_name.mjs";
import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_composer_ai_label_add } from "./facebook_composer_ai_label_add.mjs";
export async function facebook_video_post(file_path, text) {
  "$plain file_path";
  "$plain text";
  "Posts one film with words above it to the facebook profile the page profile is signed in to, public and labelled as made with AI, and answers the steps it took.";
  "★ IT POSTS NOTHING UNLESS THE POST READS PUBLIC AND THE AI LABEL READS ON. Both are checked on the composer's own button names before it moves on, so a facebook that changed its defaults stops the post rather than sending it out wrong. The singing is made with a model, and youtube already carries the same videos marked as altered or synthetic.";
  "★ THE BROWSER READS THE FILM OFF THE DISK ITSELF, through the composer's file box, so nothing carries its bytes and no size limit of a message-passing tool applies.";
  ("★ EVERY STEP LEAVES A PICTURE, numbered in order, because with no window there is nothing else to look at afterwards - the same lesson as ",
    fn_name("youtube_studio_upload_private"),
    ".");
  ("★ IT KEEPS THE BROWSER OPEN UNTIL THE UPLOAD STOPS SAYING IT IS UPLOADING. Facebook carries on sending the film after the post button is pressed, and closing the browser then would leave a post with no film in it.");
  ("What runs inside the page is written as text, never as a function, because the canonicalizer rewrites a function's comparisons into helpers the page has never heard of.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let puppeteer = await import("puppeteer");
  let browser = await puppeteer.launch({
    headless: true,
    executablePath: youtube_studio_chrome_path(),
    ignoreDefaultArgs: ["--enable-automation"],
    userDataDir: facebook_page_user_data_path(),
    defaultViewport: {
      width: 1400,
      height: 1000,
    },
    protocolTimeout: 600000,
  });
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
  async function click_in_dialog(label) {
    "Clicks the last visible button of that name in any open dialog: a reel stacks its pages as dialogs, and the one in front is the last.";
    let found = await page.evaluate(
      "(function(w){var es=[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button,[role=dialog] [role=switch],[role=dialog] [role=checkbox]')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&((x.getAttribute('aria-label')||'')===w||(x.innerText||'').trim()===w)});var e=es[es.length-1];if(!e)return null;if(e.getAttribute('aria-disabled')==='true')return 'disabled';e.click();return 'clicked'})(" +
        JSON.stringify(label) +
        ")",
    );
    return found;
  }
  async function dialog_labels() {
    let r = await page.evaluate(
      "(function(){return [].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button,[role=dialog] [role=switch],[role=dialog] [role=checkbox]')).map(function(e){return (e.getAttribute('aria-label')||'')+' | '+(e.innerText||'').trim().slice(0,40)})})()",
    );
    return r;
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
    let opened = await page.evaluate(
      "(function(){var es=[].slice.call(document.querySelectorAll('[role=button]'));var e=es.find(function(x){return (x.innerText||'').indexOf(\"What's on your mind\")>=0});if(!e)return false;e.click();return true})()",
    );
    if (!opened) {
      throw new Error("no 'What's on your mind' box");
    }
    await page.waitForSelector('[role=dialog][aria-label="Create post"]');
    await sleep(3000);
    await picture_take();
    step = "hand over the film";
    let input = await page.waitForSelector(
      '[role=dialog][aria-label="Create post"] input[type=file]',
    );
    await input.uploadFile(file_path);
    await sleep(8000);
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
    await sleep(2000);
    await picture_take();
    step = "ai label";
    let labels = await dialog_labels();
    function lambda(l) {
      let r = l.indexOf("AI label off") >= 0;
      return r;
    }
    let ai_off = labels.find(lambda);
    if (ai_off) {
      await click_in_dialog("AI label off");
      await facebook_composer_ai_label_add(page);
      await picture_take();
    }
    labels = await dialog_labels();
    function lambda2(l) {
      let r = l.indexOf("AI label") === 0 && l.indexOf("AI label off") < 0;
      return r;
    }
    let ai_on = labels.find(lambda2);
    if (!ai_on) {
      throw new Error(
        "AI label does not read on; buttons: " + JSON.stringify(labels),
      );
    }
    step = "public";
    function lambda3(l) {
      let r = l.indexOf("Sharing with Public") >= 0;
      return r;
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
    while (posted === null && presses < 5) {
      posted = await click_in_dialog("Post");
      if (posted === null) {
        posted = await click_in_dialog("Share");
      }
      if (posted === null) {
        posted = await click_in_dialog("Share now");
      }
      if (posted === null) {
        let next = await click_in_dialog("Next");
        if (next !== "clicked") {
          throw new Error("neither a send button nor Next: Next was " + next);
        }
        presses = presses + 1;
        await sleep(5000);
        await picture_take();
      }
    }
    if (posted !== "clicked") {
      let v2 = await dialog_labels();
      throw new Error(
        "Post was " + posted + "; buttons: " + JSON.stringify(v2),
      );
    }
    await sleep(8000);
    await picture_take();
    step = "upload finished";
    await page.waitForFunction(
      "!/uploading|posting/i.test(document.body.innerText)",
      {
        timeout: 1800000,
        polling: 3000,
      },
    );
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
