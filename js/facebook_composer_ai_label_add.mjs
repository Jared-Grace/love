import { sleep } from "./sleep.mjs";
export async function facebook_composer_ai_label_add(page) {
  "$plain page";
  "On facebook's 'Labeling your content' page, which the composer's 'AI label off' button opens, turns the 'Add AI label' switch on and presses 'Got it' to go back to the post. Seen 2026-10-18.";
  "★ IT THROWS WHEN THE SWITCH IS NOT THERE, so a post never goes out unlabelled because the page moved a button.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let switched = await page.evaluate(
    "(function(){var d=document.querySelector('[role=dialog]');if(!d)return 'no dialog';var es=[].slice.call(d.querySelectorAll('[role=button],button,[role=switch],[role=checkbox],input'));var e=es.find(function(x){return (x.getAttribute('aria-label')||'')==='Add AI label'});if(!e)return 'missing';e.click();return 'clicked'})()",
  );
  if (switched !== "clicked") {
    throw new Error("Add AI label switch: " + switched);
  }
  await sleep(2000);
  let done = await page.evaluate(
    "(function(){var d=document.querySelector('[role=dialog]');var es=[].slice.call(d.querySelectorAll('[role=button],button'));var e=es.find(function(x){return (x.innerText||'').trim()==='Got it'});if(!e)return 'missing';e.click();return 'clicked'})()",
  );
  if (done !== "clicked") {
    throw new Error("Got it: " + done);
  }
  await sleep(3000);
}
