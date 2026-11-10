import { sleep_human_pace } from "./sleep_human_pace.mjs";
export async function facebook_messenger_row_click_up(page, id) {
  "Clicks the row of conversation number id in the chat list on page, scrolling the list UP at a person's pace until the row is there - for walking a list already scrolled to its end, from the oldest rows toward the newest. Answers whether it was found and clicked; it stops at the top of the list.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ UP, NOT FROM THE TOP: rows far from the view are dropped from the page, so a row just above the view is reached by a short step up rather than a 25-minute scroll down from the top.";
  let find =
    'document.querySelector(\'[role=grid][aria-label="Chats"] a[href*="/t/' +
    id +
    "/\"]')";
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
      "(function(){var g=document.querySelector('[role=grid][aria-label=\"Chats\"]');if(!g)return -2;var sc=Array.from(g.querySelectorAll('div')).find(function(d){var s=getComputedStyle(d).overflowY;return (s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight});if(!sc)return -2;sc.scrollTop-=400+Math.floor(Math.random()*300);return sc.scrollTop})()",
    );
    await sleep_human_pace();
    if (top <= 0) {
      let last = await page.evaluate("!!" + find);
      if (!last) {
        return false;
      }
    }
  }
  return false;
}
