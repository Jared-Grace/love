import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_messenger_list_ids(page, list_name) {
  "$plain list_name";
  "Shows the chat list named list_name - one of the buttons above the chats, such as Unread or All - then scrolls down at a person's pace to its end, and answers the conversation number of every row, in the order the list shows them: newest first, so the oldest is last.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ROWS ARE NOTED AT EVERY STEP, because a long list may drop rows scrolled out of sight; the first place a number was seen is its place.";
  await page.evaluate(
    "(function(n){var u=Array.from(document.querySelectorAll('span')).find(function(x){return x.textContent==='Unread'});var box=u;while(box){var s=Array.from(box.querySelectorAll('span')).find(function(x){return x.textContent===n});if(s){s.click();return}box=box.parentElement}})(" +
      JSON.stringify(list_name) +
      ")",
  );
  await sleep_human_pace();
  let ids = [];
  let last = -1;
  let stuck = 0;
  for (let step = 0; step < 150; step++) {
    let seen = await page.evaluate(
      "Array.from(document.querySelectorAll('[role=grid][aria-label=\"Chats\"] a[href*=\"/t/\"]')).map(function(a){var m=a.getAttribute('href').match(/\\/t\\/(\\d+)/);return m?m[1]:null}).filter(function(x){return x})",
    );
    for (let id of seen) {
      if (!ids.includes(id)) {
        ids.push(id);
      }
    }
    let top = await page.evaluate(
      "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');if(!g)return -2;var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});if(!sc)return -2;sc.scrollTop+=500+Math.floor(Math.random()*400);return sc.scrollTop})()",
    );
    await sleep_human_pace();
    if (top === last) {
      stuck = stuck + 1;
      if (stuck > 8) {
        ("★ THE END OF THE LIST is where the nudge below has stopped adding rows nine times running, with a pause each time. On 2026-11-09 four times with no pause ended the Unread list in September, while the human knew of unread chats from May.");
        ("A picture of where it stopped is kept, so an early end can be seen rather than guessed.");
        let name = text_combine_multiple([
          fn_name("facebook_messenger_list_ids"),
          ".png",
        ]);
        await page.screenshot({
          path: folder_gitignore_join(name),
        });
        return ids;
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
  return ids;
}
