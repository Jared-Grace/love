import { sleep_human_pace } from "./sleep_human_pace.mjs";
export async function facebook_messenger_row_open(page, id) {
  "Opens conversation number id by clicking its row in the chat list, after showing only unread chats and scrolling down at a person's pace until the row is there. Answers whether it was found and clicked.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ WHY A CLICK AND NOT THE ADDRESS: on 2026-11-07 an older encrypted conversation opened by its address alone showed only 'Facebook user' and a spinner for minutes, in Chrome and here alike; the same conversation clicked in the list loaded at once.";
  "★ ONLY UNREAD, because the whole list runs to thousands and the unread one to hundreds: about 60 steps reached its end, against 70 steps for the first 200 of the whole list.";
  await page.evaluate(
    "(function(){var s=Array.from(document.querySelectorAll('span')).find(function(x){return x.textContent==='Unread'});if(s)s.click()})()",
  );
  await sleep_human_pace();
  let find =
    'document.querySelector(\'[role=grid][aria-label="Chats"] a[href*="/t/' +
    id +
    "\"]')";
  let last = -1;
  for (let step = 0; step < 150; step++) {
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
      ("★ STUCK AT THE BOTTOM: the list loads more only after a step up and back down.");
      await page.evaluate(
        "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});sc.scrollTop-=1500})()",
      );
      await sleep_human_pace();
      await page.evaluate(
        "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});sc.scrollTop=sc.scrollHeight})()",
      );
      await sleep_human_pace();
    }
    last = top;
  }
  return false;
}
