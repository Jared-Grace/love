import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_reel_cover_look(file_path) {
  "$plain file_path";
  "Opens the composer, hands it a tall film, walks a reel's pages up to its settings, presses the cover's Edit, and leaves pictures plus every button, text box and file box the cover editor shows. It never presses Post; closing the browser drops the draft.";
  "★ IT EXISTS BECAUSE A REEL'S COVER IS ITS FIRST FRAME, AND A LYRIC VIDEO BEGINS DARK, so the reels showed black until played (the human, 2026-10-20). Choosing a cover can only be written from what the cover editor really offers.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
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
  let pictures = [];
  let page = null;
  async function picture_take() {
    let picture = folder_gitignore_join(
      "facebook_reel_cover_look_" + pictures.length + ".png",
    );
    await page.screenshot({
      path: picture,
    });
    pictures.push(picture);
  }
  async function click_in_dialog(label) {
    let found = await page.evaluate(
      "(function(w){var es=[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&((x.getAttribute('aria-label')||'')===w||(x.innerText||'').trim()===w)});var e=es[es.length-1];if(!e)return null;if(e.getAttribute('aria-disabled')==='true')return 'disabled';e.click();return 'clicked'})(" +
        JSON.stringify(label) +
        ")",
    );
    return found;
  }
  try {
    let pages = await browser.pages();
    page = pages[0];
    let agent = await browser.userAgent();
    let v = agent.replace("HeadlessChrome", "Chrome");
    await page.setUserAgent(v);
    page.setDefaultTimeout(120000);
    await page.goto("https://www.facebook.com/CHRISTrosetolife/");
    await sleep(6000);
    let opened = await page.evaluate(
      "(function(){var es=[].slice.call(document.querySelectorAll('[role=button]'));var e=es.find(function(x){return (x.innerText||'').indexOf(\"What's on your mind\")>=0});if(!e)return false;e.click();return true})()",
    );
    if (!opened) {
      throw new Error("no 'What's on your mind' box");
    }
    await page.waitForSelector('[role=dialog][aria-label="Create post"]');
    await sleep(3000);
    let input = await page.waitForSelector(
      '[role=dialog][aria-label="Create post"] input[type=file]',
    );
    await input.uploadFile(file_path);
    await sleep(10000);
    let presses = 0;
    let post_seen = false;
    while (!post_seen && presses < 5) {
      post_seen = await page.evaluate(
        "[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button')).some(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&(x.innerText||'').trim()==='Post'})",
      );
      if (!post_seen) {
        let next = await click_in_dialog("Next");
        if (next !== "clicked") {
          throw new Error("no Post and Next was " + next);
        }
        presses = presses + 1;
        await sleep(5000);
      }
    }
    await picture_take();
    let edit = await click_in_dialog("Edit");
    await sleep(6000);
    await picture_take();
    let things = await page.evaluate(
      "[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button,[role=dialog] input,[role=dialog] [role=slider],[role=dialog] [role=tab],[role=dialog] [role=radio]')).filter(function(e){var r=e.getBoundingClientRect();return e.type==='file'||(r.width>0&&r.height>0)}).map(function(e){return [e.tagName,e.getAttribute('role')||'',e.getAttribute('aria-label')||'',(e.innerText||'').slice(0,60).replace(/\\n/g,' / '),e.getAttribute('type')||'',e.getAttribute('accept')||''].join(' | ')})",
    );
    let r = {
      edit,
      pictures,
      things,
    };
    return r;
  } finally {
    await browser.close();
  }
}
