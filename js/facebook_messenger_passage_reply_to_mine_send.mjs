import { messenger_passage_file } from "./messenger_passage_file.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
import { facebook_messenger_box_type_send } from "./facebook_messenger_box_type_send.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function facebook_messenger_passage_reply_to_mine_send(id) {
  "$plain id";
  "Sends the passage drafted for conversation number id - its private passage file - as a reply to the reply you already sent there, so the quote shows a passage was missed. Answers whether it was sent, or why not.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ONLY WHEN YOUR REPLY IS STILL THE LAST MESSAGE: if they wrote since, their new words must be read before anything more goes to them, so it stops and says so.";
  "★ ONLY UNDER THE REPLY ON FILE: the last message must begin with the letters of the reply kept as sent, so a passage never lands under some other message of yours.";
  let file = messenger_passage_file(id);
  let passage = await file_read_json(file);
  if (passage.sent_at) {
    let r = {
      id,
      sent: false,
      why: "already sent",
    };
    return r;
  }
  let file_path = messenger_since_mine_file(id);
  let since = await file_read_json(file_path);
  if (!since.sent_at || typeof since.reply !== "string") {
    let r2 = {
      id,
      sent: false,
      why: "no reply of yours was sent",
    };
    return r2;
  }
  let text = passage.text;
  let name = text_combine_multiple([
    fn_name("facebook_messenger_passage_reply_to_mine_send"),
    ".png",
  ]);
  let picture = folder_gitignore_join(name);
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, id);
    if (!clicked) {
      let r3 = {
        id,
        sent: false,
        why: "conversation not found in the list",
      };
      return r3;
    }
    await sleep_human_pace();
    await sleep_human_pace();
    ("★ EACH MESSAGE CARRIES A LABEL 'At <time>, <name>: <words>' - the last one must be yours, and be the reply on file. A message you deleted or unsent leaves a line that is no one's words, so it is passed over.");
    let letters = since.reply.replace(/[^A-Za-z]/g, "").slice(0, 30);
    let found = await page.evaluate(
      "(function(t){var all=Array.from(document.querySelectorAll('[role=main] [aria-label^=\"At \"]')).filter(function(x){return !/You (deleted|unsent|removed) a message/.test(x.getAttribute('aria-label'))});var e=all[all.length-1];if(!e)return 'none';var l=e.getAttribute('aria-label');var at=l.indexOf(', You: ');if(at<0)return 'theirs';if(l.slice(at+7).replace(/[^A-Za-z]/g,'').indexOf(t)!==0)return 'other';e.setAttribute('data-reply-target','1');e.scrollIntoView({block:'center'});return 'ok'})(" +
        JSON.stringify(letters) +
        ")",
    );
    if (found !== "ok") {
      let why = {
        none: "no messages on the page",
        theirs: "they wrote since your reply",
        other: "your last message is not the reply on file",
      }[found];
      let r4 = {
        id,
        sent: false,
        why,
      };
      return r4;
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
      let r5 = {
        id,
        sent: false,
        why: "the reply button did not open a reply",
      };
      return r5;
    }
    let dialog = await facebook_messenger_box_type_send(page, text, picture);
    if (dialog !== null) {
      let r6 = {
        id,
        sent: false,
        why: "something covered the message box",
        dialog,
      };
      return r6;
    }
    let after = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
    );
    function lambda(m) {
      let r7 = m.from === "You";
      return r7;
    }
    let mine = facebook_messenger_messages(after).filter(lambda);
    let first = text.split("\n")[0];
    let sent = mine.length > 0 && mine[mine.length - 1].text.includes(first);
    if (sent) {
      passage.sent_at = new Date().toISOString();
      await file_overwrite_json(file, passage);
    }
    let r8 = {
      id,
      sent,
      why: sent ? null : "not seen on the page after sending",
    };
    return r8;
  } finally {
    await o.browser.close();
  }
}
