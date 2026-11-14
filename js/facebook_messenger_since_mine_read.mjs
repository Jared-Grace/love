import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { messenger_messages_merge } from "./messenger_messages_merge.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
import { messenger_since_mine } from "./messenger_since_mine.mjs";
export async function facebook_messenger_since_mine_read(url) {
  "$plain url";
  "Opens one messenger conversation at url in the signed-in page profile and scrolls up, at a person's pace, until your last message is on the page or the conversation's beginning is reached - then answers every message sent after yours. It reads; it never sends.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ AN OPEN DIALOG STOPS IT: on 2026-11-07 a 'restore your chats' PIN box covered a conversation. Nothing behind a dialog is read, and it answers dialog: true.";
  "★ THE TOP IS WHERE SCROLLING STOPS ADDING MESSAGES, three times running - the page has no other sign that it has nothing older.";
  let id = url.match(/\/t\/(\d+)/)[1];
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, id);
    if (!clicked) {
      let r5 = {
        url,
        dialog: false,
        loaded: false,
        mine_seen: false,
        top: false,
        messages: [],
      };
      return r5;
    }
    await sleep_human_pace();
    ("★ THE NOTIFICATIONS PANEL IS ALWAYS A DIALOG on this page, open or not - it never covers the chat, so it is not counted.");
    let dialogs = await page.evaluate(
      "Array.from(document.querySelectorAll('[role=dialog]')).filter(function(d){return d.getAttribute('aria-label')!=='Notifications'}).map(function(d){var h=d.querySelector('h1,h2,h3,[role=heading]');return (d.getAttribute('aria-label')||'')+' | '+(h?h.textContent:'')})",
    );
    if (dialogs.length > 0) {
      let name = text_combine_multiple([
        fn_name("facebook_messenger_since_mine_read"),
        ".png",
      ]);
      await page.screenshot({
        path: folder_gitignore_join(name),
      });
      let r2 = {
        url,
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
    let gap = false;
    for (let step = 0; step < 80; step++) {
      let text = await page.evaluate(
        "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
      );
      let before = messages.length;
      ("★ EACH READING IS JOINED TO THE LAST, never put in its place: the page drops the newest messages as it scrolls up, so the reading at the top alone lost everything after an old message of yours (2026-11-14).");
      let older = facebook_messenger_messages(text);
      let merged = messenger_messages_merge(older, messages);
      if (before > 0 && merged.overlap === 0) {
        gap = true;
      }
      messages = merged.messages;
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
    let mine_seen = messages.some(lambda2);
    let r = {
      url,
      dialog: false,
      loaded: messages.length > 0,
      mine_seen,
      top,
      gap,
      messages: messenger_since_mine(messages),
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
