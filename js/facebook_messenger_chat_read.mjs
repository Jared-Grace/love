import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
export async function facebook_messenger_chat_read(page) {
  "Reads the messenger conversation already open on page: scrolls up, at a person's pace, until your last message is on the page or the conversation's beginning is reached, and answers every message on the page then, with whether it loaded, whether yours was seen, and whether the top was reached. It reads; it never sends.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ AN OPEN DIALOG STOPS IT: on 2026-11-07 a 'restore your chats' PIN box covered a conversation. Nothing behind a dialog is read, and it answers dialog with what covered it.";
  "★ THE NOTIFICATIONS PANEL IS ALWAYS A DIALOG on this page, open or not - it never covers the chat, so it is not counted.";
  "★ THE TOP IS WHERE SCROLLING STOPS ADDING MESSAGES, three times running - the page has no other sign that it has nothing older.";
  await sleep_human_pace();
  let dialogs = await page.evaluate(
    "Array.from(document.querySelectorAll('[role=dialog]')).filter(function(d){return d.getAttribute('aria-label')!=='Notifications'}).map(function(d){var h=d.querySelector('h1,h2,h3,[role=heading]');return (d.getAttribute('aria-label')||'')+' | '+(h?h.textContent:'')})",
  );
  if (dialogs.length > 0) {
    let name = text_combine_multiple([
      fn_name("facebook_messenger_chat_read"),
      ".png",
    ]);
    await page.screenshot({
      path: folder_gitignore_join(name),
    });
    let r2 = {
      dialog: dialogs,
      loaded: false,
      mine_seen: false,
      top: false,
      messages: [],
    };
    return r2;
  }
  let messages = [];
  let same = 0;
  let top = false;
  for (let step = 0; step < 80; step++) {
    let text = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
    );
    let before = messages.length;
    messages = facebook_messenger_messages(text);
    function lambda(m) {
      let r3 = m.from === "You";
      return r3;
    }
    if (messages.some(lambda)) {
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
  function lambda2(m) {
    let r4 = m.from === "You";
    return r4;
  }
  let r = {
    dialog: false,
    loaded: messages.length > 0,
    mine_seen: messages.some(lambda2),
    top,
    messages,
  };
  return r;
}
