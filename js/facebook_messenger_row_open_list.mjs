import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_messenger_row_open_list(page, id, list_name) {
  "$plain list_name";
  "Shows the chat list named list_name - one of the buttons above the chats, such as Unread or All - then scrolls down at a person's pace until the row of conversation number id is there and clicks it. Answers whether it was found and clicked; it stops at the end of the list.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ THE BUTTON IS LOOKED FOR BESIDE UNREAD, because the word All appears in other places on the page; the nearest box holding the Unread button that also holds one named list_name is where the list buttons are.";
  await page.evaluate(
    "(function(n){var u=Array.from(document.querySelectorAll('span')).find(function(x){return x.textContent==='Unread'});var box=u;while(box){var s=Array.from(box.querySelectorAll('span')).find(function(x){return x.textContent===n});if(s){s.click();return}box=box.parentElement}})(" +
      JSON.stringify(list_name) +
      ")",
  );
  await sleep_human_pace();
  let find =
    'document.querySelector(\'[role=grid][aria-label="Chats"] a[href*="/t/' +
    id +
    "\"]')";
  let last = -1;
  let stuck = 0;
  ("★ 600 STEPS, because on 2026-11-09 the whole list ran to 2864 chats and its oldest unread rows, two years back, were out of reach of 150.");
  for (let step = 0; step < 600; step++) {
    let found = await page.evaluate("!!" + find);
    if (found) {
      await page.evaluate(
        "(function(){var a=" + find + ";a.scrollIntoView({block:'center'})})()",
      );
      await sleep_human_pace();
      await page.evaluate("(function(){" + find + ".click()})()");
      return true;
    }
    let top = await page.evaluate(
      "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');if(!g)return -2;var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});if(!sc)return -2;sc.scrollTop+=500+Math.floor(Math.random()*400);return sc.scrollTop})()",
    );
    await sleep_human_pace();
    if (top === last) {
      stuck = stuck + 1;
      if (stuck > 8) {
        ("★ THE END OF THE LIST is where the nudge below has stopped adding rows nine times running, with a pause each time - the same end the full list reading uses; four with no pause ended the list early.");
        return false;
      }
      await sleep(5000);
      ("★ STUCK AT THE BOTTOM: the list loads more only after a step up and back down.");
      await page.evaluate(
        "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});sc.scrollTop-=1500})()",
      );
      await sleep_human_pace();
      await page.evaluate(
        "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});sc.scrollTop=sc.scrollHeight})()",
      );
      await sleep_human_pace();
    } else {
      stuck = 0;
    }
    last = top;
  }
  return false;
}
