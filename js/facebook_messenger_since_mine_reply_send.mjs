import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
import { facebook_messenger_box_type_send } from "./facebook_messenger_box_type_send.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_messenger_profile_round_sent } from "./facebook_messenger_profile_round_sent.mjs";
export async function facebook_messenger_since_mine_reply_send(id) {
  "$plain id";
  "Sends the reply you finalized for conversation number id - the reply field of its private file - as a reply to their last message, so the message it answers shows above it. Answers whether it was sent, or why not.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ONLY A FINALIZED REPLY IS SENT: reply_draft is what the rules suggest and is never sent. Nothing goes out until reply is written in the file.";
  "★ IT SENDS NOTHING IF THEY HAVE WRITTEN AGAIN: the reply was finalized against the messages in the file, so when the last message on the page is not the last one kept, it stops and says so.";
  "★ WHY A REPLY AND NOT A PLAIN MESSAGE: if they write again before reading it, the quote above it shows which message it answered.";
  let file = messenger_since_mine_file(id);
  let saved = await file_read_json(file);
  let text = saved.reply;
  if (typeof text !== "string" || text.trim() === "") {
    let r = {
      id,
      sent: false,
      why: "no finalized reply",
    };
    return r;
  }
  if (saved.sent_at) {
    let r2 = {
      id,
      sent: false,
      why: "already sent",
    };
    return r2;
  }
  let last = saved.messages[saved.messages.length - 1];
  if (!last) {
    let r3 = {
      id,
      sent: false,
      why: "nothing to answer",
    };
    return r3;
  }
  let name = text_combine_multiple([
    fn_name("facebook_messenger_since_mine_reply_send"),
    ".png",
  ]);
  let picture = folder_gitignore_join(name);
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, id);
    if (!clicked) {
      let r4 = {
        id,
        sent: false,
        why: "conversation not found in the list",
      };
      return r4;
    }
    await sleep_human_pace();
    await sleep_human_pace();
    ("★ EACH MESSAGE CARRIES A LABEL 'At <time>, <name>: <words>' - the last one is the message being answered.");
    ("★ SPACING IS NOT COMPARED: the label keeps a message's line breaks and the kept copy has single spaces, so every run of spaces and line breaks counts as one space on both sides. Compared letter for letter, a verse sent on three lines read as somebody writing again (2026-11-12).");
    let found = await page.evaluate(
      "(function(t){var all=Array.from(document.querySelectorAll('[role=main] [aria-label^=\"At \"]'));var e=all[all.length-1];if(!e)return 'none';var l=e.getAttribute('aria-label');if(l.indexOf(', You: ')>=0)return 'mine';if(l.replace(/\\s+/g,' ').indexOf(t.replace(/\\s+/g,' '))<0)return 'other';e.setAttribute('data-reply-target','1');e.scrollIntoView({block:'center'});return 'ok'})(" +
        JSON.stringify(last.text) +
        ")",
    );
    if (found !== "ok") {
      let why = {
        none: "no messages on the page",
        mine: "your message is already the last one",
        other: "they wrote again since the reply was finalized",
      }[found];
      let r5 = {
        id,
        sent: false,
        why,
      };
      return r5;
    }
    await sleep_human_pace();
    let target = await page.$("[data-reply-target]");
    await target.hover();
    await sleep_human_pace();
    let replying = await page.evaluate(
      "(function(){var t=document.querySelector('[data-reply-target]').getBoundingClientRect();var b=Array.from(document.querySelectorAll('[role=main] [aria-label=\"Reply to this message\"]')).filter(function(x){var q=x.getBoundingClientRect();return q.width>0&&q.bottom>=t.top-40&&q.top<=t.bottom+40});if(b.length!==1)return false;b[0].click();return true})()",
    );
    await sleep_human_pace();
    let bar = await page.evaluate(
      "/Replying to/.test(document.querySelector('[role=main]').innerText)",
    );
    if (!replying || !bar) {
      await page.screenshot({
        path: picture,
      });
      let r6 = {
        id,
        sent: false,
        why: "the reply button did not open a reply",
      };
      return r6;
    }
    let dialog = await facebook_messenger_box_type_send(page, text, picture);
    if (dialog !== null) {
      let r7 = {
        id,
        sent: false,
        why: "something covered the message box",
        dialog,
      };
      return r7;
    }
    let after = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
    );
    function lambda(m) {
      let r8 = m.from === "You";
      return r8;
    }
    let mine = facebook_messenger_messages(after).filter(lambda);
    let first = text.split("\n")[0];
    let sent = mine.length > 0 && mine[mine.length - 1].text.includes(first);
    if (sent) {
      saved.sent_at = new Date().toISOString();
      await file_overwrite_json(file, saved);
      await facebook_messenger_profile_round_sent(id, text, saved.sent_at);
    }
    let r9 = {
      id,
      sent,
      why: sent ? null : "not seen on the page after sending",
    };
    return r9;
  } finally {
    await o.browser.close();
  }
}
