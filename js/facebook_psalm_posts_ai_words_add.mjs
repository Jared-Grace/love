import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_psalm_posts_ai_words_add() {
  "Edits every psalm post already on the facebook profile whose first line says 'put to music' so that it says 'put to music using AI', the wording the human asked for on 2026-10-19 for posts already out as well as later ones.";
  "★ IT FINDS ITS OWN POSTS: a post counts when its text holds 'put to music' and not 'using AI', so a second run does nothing and a run cut short is finished by the next one.";
  "★ NOTHING IS SAVED UNLESS THE EDITED TEXT IS READ BACK HOLDING THE NEW WORDS. The caret is placed after 'music' and the words typed there; if they landed anywhere else, it throws with the dialog unsaved and the browser is closed, which discards the edit.";
  "★ EVERY STEP WAITS FOR WHAT IT NEEDS RATHER THAN A FIXED TIME: on the first runs the post's menu was still a spinner four seconds after the click, and Save was still switched off a few seconds after the words were typed.";
  "A picture is left for each step in gitignore/facebook_psalm_posts_ai_words_add_N.png.";
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
  });
  let steps = [];
  let edited = 0;
  let pages = await browser.pages();
  let page = pages[0];
  async function picture(name) {
    let p = folder_gitignore_join(
      "facebook_psalm_posts_ai_words_add_" + steps.length + ".png",
    );
    await page.screenshot({
      path: p,
    });
    steps.push(name + " " + p);
  }
  try {
    page.setDefaultTimeout(120000);
    let agent = await browser.userAgent();
    let v = agent.replace("HeadlessChrome", "Chrome");
    await page.setUserAgent(v);
    for (let n = 0; n < 20; n++) {
      await page.goto("https://www.facebook.com/CHRISTrosetolife/");
      await sleep(6000);
      let found = "none";
      for (let s = 0; s < 25; s++) {
        found = await page.evaluate(
          "(function(){var bs=[].slice.call(document.querySelectorAll('[role=button]')).filter(function(b){return (b.getAttribute('aria-label')||'').indexOf('Actions for this post')===0});for(var i=0;i<bs.length;i++){var a=bs[i];for(var k=0;k<15&&a;k++){a=a.parentElement;if(!a)break;var n=[].slice.call(a.querySelectorAll('[role=button]')).filter(function(b){return (b.getAttribute('aria-label')||'').indexOf('Actions for this post')===0}).length;if(n>1)break;var t=a.innerText||'';if(t.indexOf('put to music')>=0){if(t.indexOf('put to music using AI')>=0)break;bs[i].scrollIntoView({block:'center'});bs[i].click();return 'clicked'}}}return 'none'})()",
        );
        if (found === "clicked") {
          break;
        }
        await page.evaluate("window.scrollBy(0,1500)");
        await sleep(3000);
      }
      if (found !== "clicked") {
        await picture("no more posts");
        let r = {
          edited,
          steps,
        };
        return r;
      }
      let menu = "no menu";
      for (let w = 0; w < 45; w++) {
        await sleep(1000);
        menu = await page.evaluate(
          "(function(){var ms=[].slice.call(document.querySelectorAll('[role=menuitem]'));if(!ms.length)return 'no menu';var e=ms.find(function(x){return (x.innerText||'').trim().indexOf('Edit post')===0});if(!e)return ms.map(function(x){return (x.innerText||'').trim().split('\\n')[0]}).join(' / ');e.click();return 'clicked'})()",
        );
        if (menu !== "no menu") {
          break;
        }
      }
      await picture("menu");
      if (menu !== "clicked") {
        throw new Error("Edit post not in the menu: " + menu);
      }
      let placed = "missing";
      for (let w = 0; w < 45; w++) {
        placed = await page.evaluate(
          "(function(){var ds=[].slice.call(document.querySelectorAll('[role=dialog]'));for(var k=ds.length-1;k>=0;k--){var tb=ds[k].querySelector('[role=textbox]');if(!tb)continue;var walk=document.createTreeWalker(tb,NodeFilter.SHOW_TEXT);var node;while((node=walk.nextNode())){var at=node.nodeValue.indexOf('put to music');if(at>=0){tb.focus();var r=document.createRange();r.setStart(node,at+'put to music'.length);r.collapse(true);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);return 'placed'}}return 'no words in the text box'}return 'missing'})()",
        );
        if (placed === "placed") {
          break;
        }
        await sleep(1000);
      }
      if (placed !== "placed") {
        await picture("edit dialog");
        throw new Error("caret: " + placed);
      }
      await sleep(1000);
      await page.keyboard.type(" using AI");
      await sleep(1500);
      let check = await page.evaluate(
        "(function(){var ds=[].slice.call(document.querySelectorAll('[role=dialog]'));for(var k=ds.length-1;k>=0;k--){var tb=ds[k].querySelector('[role=textbox]');if(tb)return tb.innerText}return ''})()",
      );
      await picture("words typed");
      if (check.indexOf("put to music using AI") < 0) {
        throw new Error(
          "the words did not land after 'put to music': " + check.slice(0, 200),
        );
      }
      if (check.indexOf("using AI") !== check.lastIndexOf("using AI")) {
        throw new Error(
          "'using AI' is in the text twice: " + check.slice(0, 200),
        );
      }
      let saved = "missing";
      for (let w = 0; w < 60; w++) {
        saved = await page.evaluate(
          "(function(){var ds=[].slice.call(document.querySelectorAll('[role=dialog]'));for(var k=ds.length-1;k>=0;k--){var bs=[].slice.call(ds[k].querySelectorAll('[role=button],button')).filter(function(b){var r=b.getBoundingClientRect();return r.width>0&&((b.getAttribute('aria-label')||'')==='Save'||(b.innerText||'').trim()==='Save')});if(bs.length){var b=bs[bs.length-1];if(b.getAttribute('aria-disabled')==='true')return 'disabled';b.click();return 'clicked'}}return 'missing'})()",
        );
        if (saved === "clicked") {
          break;
        }
        await sleep(1000);
      }
      if (saved !== "clicked") {
        await picture("save");
        throw new Error("Save: " + saved);
      }
      await sleep(10000);
      await picture("saved");
      edited = edited + 1;
    }
    let r2 = {
      edited,
      steps,
    };
    return r2;
  } catch (e) {
    throw new Error(e.message + " pictures: " + JSON.stringify(steps));
  } finally {
    await browser.close();
  }
}
