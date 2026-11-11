import { folder_private_path } from "./folder_private_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { facebook_page_launch_parked } from "./facebook_page_launch_parked.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { sleep } from "./sleep.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_list_rows } from "./facebook_messenger_list_rows.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_messenger_profile_round_waiting } from "./facebook_messenger_profile_round_waiting.mjs";
import { facebook_messenger_row_click_up } from "./facebook_messenger_row_click_up.mjs";
import { facebook_messenger_row_open_list } from "./facebook_messenger_row_open_list.mjs";
import { facebook_messenger_chat_read } from "./facebook_messenger_chat_read.mjs";
import { messenger_since_mine } from "./messenger_since_mine.mjs";
import { facebook_messenger_chat_profile_url } from "./facebook_messenger_chat_profile_url.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { facebook_messenger_profile_round_messages_set } from "./facebook_messenger_profile_round_messages_set.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_messenger_profile_set } from "./facebook_messenger_profile_set.mjs";
export async function facebook_messenger_waiting_next() {
  "Walks the unread chats of the All list, oldest first, and stops at the first one with messages after your last - keeping those messages, the conversation's number and the person's profile address privately. A chat opened and found to hold nothing after yours is recorded in messenger_waiting_checked.json and passed over next time. Answers only numbers and counts, never anyone's words.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ AN UNREAD DOT CAN SIT ON AN ANSWERED CHAT: on 2026-11-10 the two oldest unread chats (2 years) opened to your message last, nothing after - so each unread row must be opened to know.";
  "★ WALKED UPWARD, IN A PARKED TAB: the list is scrolled to its end once, and each older row is a short step up from the last - opening each one separately cost 25 minutes of scrolling. The tab stays parked in the shared browser, so the next call goes on from the chat this one stopped at; the unread rows read at the end are kept in messenger_waiting_walk.json for it. A fresh tab - the browser was closed - reads the list again.";
  "★ A CHAT HANDED BACK IS NOT HANDED BACK AGAIN while the tab stays parked, so each call moves on to the next person; a fresh reading of the list forgets that, and a chat still unanswered then comes back.";
  "★ A CHAT WHOSE KEPT ROUND IS STILL UNANSWERED IS PASSED OVER, even after a fresh reading of the list: it was handed back already and waits on your reply, and its row may not be where the walk looks (2026-11-10: such a row stopped the walk as not found).";
  "★ IT STOPS AND SAYS WHY on anything it cannot read - a row not found, a dialog, a chat that loaded nothing - and records none of those as empty.";
  let checked_file = folder_private_path("messenger_waiting_checked.json");
  let checked = {
    empty: [],
  };
  if (await file_exists(checked_file)) {
    checked = await file_read_json(checked_file);
  }
  let walk_file = folder_private_path("messenger_waiting_walk.json");
  let o = await facebook_page_launch_parked("messenger");
  let pages = await o.pages();
  let page = pages[0];
  page.setDefaultTimeout(120000);
  let skipped = [];
  try {
    let walk = null;
    if (not(o.fresh) && (await file_exists(walk_file))) {
      walk = await file_read_json(walk_file);
    }
    if (equal(walk, null)) {
      let agent = await o.userAgent();
      let v = agent.replace("HeadlessChrome", "Chrome");
      await page.setUserAgent(v);
      await page.goto("https://www.facebook.com/messages/");
      await sleep(6000);
      await sleep_human_pace();
      let rows = await facebook_messenger_list_rows(page, "All");
      function lambda(row) {
        let eq = equal(row.lines[1], "Unread message:");
        return eq;
      }
      function lambda2(row) {
        let r2 = row.id;
        return r2;
      }
      walk = {
        read_at: new Date().toISOString(),
        candidates: rows.filter(lambda).reverse().map(lambda2),
        handed: [],
      };
      await file_overwrite_json(walk_file, walk);
    }
    function lambda3(id) {
      let b = checked.empty.includes(id);
      let r3 = not(b) && not(walk.handed.includes(id));
      return r3;
    }
    let candidates = walk.candidates.filter(lambda3);
    for (let id of candidates) {
      if (await facebook_messenger_profile_round_waiting(id)) {
        continue;
      }
      let clicked = await facebook_messenger_row_click_up(page, id);
      if (not(clicked)) {
        ("★ NOT ABOVE ⇒ LOOK BELOW: on 2026-11-11 a row the upward walk reported missing twice was found at once scrolling DOWN the All list - it lay below where the parked tab had stopped. A failed walk up leaves the list at its top, so the walk down starts there.");
        clicked = await facebook_messenger_row_open_list(page, id, "All");
      }
      if (not(clicked)) {
        let r4 = {
          stopped: "row_not_found",
          id,
          skipped,
        };
        return r4;
      }
      let r = await facebook_messenger_chat_read(page);
      if (r.dialog) {
        let r5 = {
          stopped: "dialog",
          id,
          dialog: r.dialog,
          skipped,
        };
        return r5;
      }
      if (not(r.loaded)) {
        let r6 = {
          stopped: "not_loaded",
          id,
          skipped,
        };
        return r6;
      }
      let since = messenger_since_mine(r.messages);
      if (r.mine_seen && equal(since.length, 0)) {
        checked.empty.push(id);
        await file_overwrite_json(checked_file, checked);
        skipped.push(id);
        continue;
      }
      let profile = await facebook_messenger_chat_profile_url(page);
      let url = "https://www.facebook.com/messages/t/" + id;
      let file = messenger_since_mine_file(id);
      await file_overwrite_json(file, {
        url,
        read_at: new Date().toISOString(),
        dialog: r.dialog,
        loaded: r.loaded,
        mine_seen: r.mine_seen,
        top: r.top,
        messages: since,
      });
      await facebook_messenger_profile_round_messages_set(id, since);
      if (not_equal(profile, null)) {
        await facebook_messenger_profile_set(id, profile);
      }
      walk.handed.push(id);
      await file_overwrite_json(walk_file, walk);
      let r7 = {
        stopped: "found",
        id,
        file,
        profile_recorded: not_equal(profile, null),
        mine_seen: r.mine_seen,
        top: r.top,
        count: since.length,
        skipped,
      };
      return r7;
    }
    let r8 = {
      stopped: "none_left",
      skipped,
    };
    return r8;
  } finally {
    await o.close();
  }
}
