import { sleep } from "./sleep.mjs";
export async function facebook_composer_ai_label_add(page) {
  "$plain page";
  "On facebook's 'Labeling your content' page, which the composer's 'AI label off' button opens, turns the 'Add AI label' switch on and presses 'Got it' to go back to the post. Seen 2026-10-18.";
  "★ IT THROWS WHEN THE SWITCH IS NOT THERE, so a post never goes out unlabelled because the page moved a button.";
  "★ IT WAITS FOR THE SWITCH RATHER THAN SLEEPING A FIXED TIME: the page slides in, and once a picture showed it half way across when a fixed wait had run out. It looks in every dialog, by label and then by the words beside the box.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let switched = "missing";
  for (let i = 0; i < 30; i++) {
    switched = await page.evaluate(
      "(function(){var ds=[].slice.call(document.querySelectorAll('[role=dialog]'));if(!ds.length)return 'no dialog';for(var k=ds.length-1;k>=0;k--){var d=ds[k];var es=[].slice.call(d.querySelectorAll('[role=button],button,[role=switch],[role=checkbox],input'));var e=es.find(function(x){return (x.getAttribute('aria-label')||'')==='Add AI label'});if(!e){e=es.find(function(x){var t=(x.innerText||'').trim();return t.indexOf('Add AI label')===0})}if(e){e.click();return 'clicked'}}return 'missing'})()",
    );
    if (switched === "clicked") {
      break;
    }
    await sleep(500);
  }
  if (switched !== "clicked") {
    throw new Error("Add AI label switch: " + switched);
  }
  await sleep(2000);
  let done = await page.evaluate(
    "(function(){var ds=[].slice.call(document.querySelectorAll('[role=dialog]'));for(var k=ds.length-1;k>=0;k--){var es=[].slice.call(ds[k].querySelectorAll('[role=button],button'));var e=es.find(function(x){return (x.innerText||'').trim()==='Got it'});if(e){e.click();return 'clicked'}}return 'missing'})()",
  );
  if (done !== "clicked") {
    throw new Error("Got it: " + done);
  }
  await sleep(3000);
}
