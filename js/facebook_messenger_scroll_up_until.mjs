import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
export async function facebook_messenger_scroll_up_until(page, stop) {
  "Scrolls the open messenger conversation on page up, at a person's pace, until stop says yes to the messages showing or the conversation's beginning is reached. Answers the messages showing then, and whether the beginning was reached.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ THE TOP IS WHERE SCROLLING STOPS ADDING MESSAGES, three times running - the page has no other sign that it has nothing older.";
  let messages = [];
  let same = 0;
  let top = false;
  for (let step = 0; step < 80; step++) {
    let text = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
    );
    let before = messages.length;
    messages = facebook_messenger_messages(text);
    if (stop(messages)) {
      break;
    }
    if (messages.length === before) {
      same++;
    } else {
      same = 0;
    }
    if (same >= 3) {
      top = true;
      break;
    }
    await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');if(!m)return;var best=null;m.querySelectorAll('div').forEach(function(d){var s=getComputedStyle(d).overflowY;if((s==='auto'||s==='scroll')&&d.scrollHeight>d.clientHeight&&(!best||d.scrollHeight>best.scrollHeight))best=d});if(best)best.scrollTop=0})()",
    );
    await sleep_human_pace();
  }
  let r = {
    messages,
    top,
  };
  return r;
}
