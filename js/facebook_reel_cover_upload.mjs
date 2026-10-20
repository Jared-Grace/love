import { sleep } from "./sleep.mjs";
export async function facebook_reel_cover_upload(
  page,
  picture_path,
  picture_take,
) {
  "$plain page";
  "$plain picture_path";
  "$plain picture_take";
  "picture_take is called with no arguments after each step and leaves a picture, because the first real post (2026-10-20, 12:40) lost its whole composer somewhere in here while a trial without words had not.";
  "On a reel's settings page, presses the cover's Edit, hands the thumbnail box the picture, and saves it, then answers what the save button was.";
  "★ A REEL'S COVER IS OTHERWISE ITS FIRST FRAME, and a lyric video begins dark, so the reels showed black until played (the human, 2026-10-20).";
  "Every button is looked for inside the dialog titled 'Edit thumbnail' once it opens, because the settings page behind it has a Save of its own (save as draft).";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let edit = await page.evaluate(
    "(function(){var es=[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&(x.innerText||'').trim()==='Edit'});var e=es[es.length-1];if(!e)return null;e.click();return 'clicked'})()",
  );
  if (edit !== "clicked") {
    throw new Error("no cover Edit on the reel settings page");
  }
  await sleep(3000);
  await picture_take();
  let input = await page.waitForSelector(
    '[role=dialog] input[type=file][accept=".png,.jpg,.jpeg"]',
  );
  await input.uploadFile(picture_path);
  await sleep(6000);
  await picture_take();
  let saved = null;
  let tries = 0;
  while (saved !== "clicked" && tries < 30) {
    saved = await page.evaluate(
      "(function(){var ds=[].slice.call(document.querySelectorAll('[role=dialog]')).filter(function(d){return (d.innerText||'').indexOf('Edit thumbnail')>=0});var d=ds[ds.length-1];if(!d)return 'no dialog';var es=[].slice.call(d.querySelectorAll('[role=button],button')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&(x.getAttribute('aria-label')||'')==='Save'});var e=es[es.length-1];if(!e)return null;if(e.getAttribute('aria-disabled')==='true')return 'disabled';e.click();return 'clicked'})()",
    );
    if (saved !== "clicked") {
      await sleep(1000);
    }
    tries = tries + 1;
  }
  if (saved !== "clicked") {
    throw new Error("cover Save was " + saved);
  }
  await sleep(8000);
  await picture_take();
  let settings = await page.evaluate(
    "[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button')).some(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&(x.innerText||'').trim()==='Post'})",
  );
  if (!settings) {
    throw new Error("the reel settings page is gone after the cover was saved");
  }
  return saved;
}
