import { facebook_page_open } from "./facebook_page_open.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_reel_cover_set(reel_url, picture_path) {
  "$plain reel_url";
  "$plain picture_path";
  "Sets the cover of a reel that is already posted to the picture at picture_path, through the reel's own menu: Menu, Edit reel, Choose a thumbnail, hand over the picture, Save the thumbnail, Save the reel. Every step leaves a picture, numbered in order.";
  "★ IT RUNS AFTER POSTING, NEVER DURING IT. Setting the cover on the posting page was tried from 2026-10-20: of five posts, four failed - two sat on 'Posting' for good and two lost the page - and with that step off the next post went through in two minutes (2026-10-22).";
  "★ ONLY A PICTURE HANDED OVER SHOWS ON THE REELS TAB. A reel left on facebook's own chosen frame shows black there until played, though its edit page shows a frame; the one reel given an uploaded picture shows it.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(reel_url);
  let page = o.page;
  let step = "open the reel";
  let steps = [];
  async function picture_take() {
    let picture = folder_gitignore_join(
      "facebook_reel_cover_set_" + steps.length + ".png",
    );
    await page.screenshot({
      path: picture,
    });
    steps.push(step + " " + picture);
  }
  async function click_named(w) {
    let c = await page.evaluate(
      "(function(w){var es=[].slice.call(document.querySelectorAll('[role=button],[role=menuitem],button')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&((x.getAttribute('aria-label')||'')===w||(x.innerText||'').trim()===w)});var e=es[0];if(!e)return false;e.click();return true})(" +
        JSON.stringify(w) +
        ")",
    );
    if (!c) {
      throw new Error("nothing named '" + w + "' to click");
    }
    await sleep(5000);
    await picture_take();
  }
  try {
    await picture_take();
    step = "menu";
    await click_named("Menu");
    step = "edit reel";
    await click_named("Edit reel");
    step = "choose a thumbnail";
    await click_named("Choose a thumbnail");
    step = "hand over the picture";
    let input = await page.waitForSelector(
      '[role=dialog][aria-label="Choose a thumbnail"] input[type=file][accept=".png,.jpg,.jpeg"]',
    );
    await input.uploadFile(picture_path);
    await sleep(6000);
    await picture_take();
    step = "save the thumbnail";
    let saved = null;
    let tries = 0;
    while (saved !== "clicked" && tries < 30) {
      saved = await page.evaluate(
        "(function(){var d=document.querySelector('[role=dialog][aria-label=\"Choose a thumbnail\"]');if(!d)return null;var e=d.querySelector('[role=button][aria-label=Save]');if(!e)return null;if(e.getAttribute('aria-disabled')==='true')return 'disabled';e.click();return 'clicked'})()",
      );
      if (saved !== "clicked") {
        await sleep(1000);
      }
      tries = tries + 1;
    }
    if (saved !== "clicked") {
      throw new Error("the thumbnail's Save was " + saved);
    }
    await sleep(6000);
    await picture_take();
    step = "save the reel";
    let reel_saved = await page.evaluate(
      "(function(){var ds=[].slice.call(document.querySelectorAll('[role=dialog]')).filter(function(d){return (d.innerText||'').indexOf('Edit reel')===0});var d=ds[ds.length-1];if(!d)return null;var es=[].slice.call(d.querySelectorAll('[role=button]')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&(x.innerText||'').trim()==='Save'});var e=es[es.length-1];if(!e)return null;if(e.getAttribute('aria-disabled')==='true')return 'disabled';e.click();return 'clicked'})()",
    );
    if (reel_saved !== "clicked") {
      throw new Error("the reel's Save was " + reel_saved);
    }
    await sleep(15000);
    await picture_take();
    step = "edit page closed";
    let open = await page.evaluate(
      "[].slice.call(document.querySelectorAll('[role=dialog]')).some(function(d){var r=d.getBoundingClientRect();return r.width>0&&(d.innerText||'').indexOf('Edit reel')===0})",
    );
    if (open) {
      throw new Error("the edit page is still open after Save");
    }
    let r = {
      reel_url,
      steps,
    };
    return r;
  } catch (e) {
    await picture_take();
    throw new Error(
      "reel cover stopped at step '" +
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
