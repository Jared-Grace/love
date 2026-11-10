import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_list_rows } from "./facebook_messenger_list_rows.mjs";
import { facebook_messenger_row_click_up } from "./facebook_messenger_row_click_up.mjs";
import { facebook_messenger_chat_read } from "./facebook_messenger_chat_read.mjs";
import { messenger_since_mine } from "./messenger_since_mine.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_messenger_chat_profile_url } from "./facebook_messenger_chat_profile_url.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { facebook_messenger_profile_round_messages_set } from "./facebook_messenger_profile_round_messages_set.mjs";
import { facebook_messenger_profile_set } from "./facebook_messenger_profile_set.mjs";
export async function facebook_messenger_waiting_next() {
  "Walks the unread chats of the All list, oldest first, in one browser session, and stops at the first one with messages after your last - keeping those messages, the conversation's number and the person's profile address privately. A chat opened and found to hold nothing after yours is recorded in messenger_waiting_checked.json and passed over next time. Answers only numbers and counts, never anyone's words.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ AN UNREAD DOT CAN SIT ON AN ANSWERED CHAT: on 2026-11-10 the two oldest unread chats (2 years) opened to your message last, nothing after - so each unread row must be opened to know.";
  "★ ONE SESSION, WALKED UPWARD: the list is scrolled to its end once, and each older row is a short step up from the last - opening each one separately cost 25 minutes of scrolling.";
  "★ IT STOPS AND SAYS WHY on anything it cannot read - a row not found, a dialog, a chat that loaded nothing - and records none of those as empty.";
  let checked_file = folder_private_path("messenger_waiting_checked.json");
  let checked = {
    empty: [],
  };
  if (await file_exists(checked_file)) {
    checked = await file_read_json(checked_file);
  }
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  let skipped = [];
  try {
    await sleep_human_pace();
    let rows = await facebook_messenger_list_rows(page, "All");
    function lambda(row) {
      let r2 =
        equal(row.lines[1], "Unread message:") &&
        not(checked.empty.includes(row.id));
      return r2;
    }
    let candidates = rows.filter(lambda).reverse();
    for (let row of candidates) {
      let id = row.id;
      let clicked = await facebook_messenger_row_click_up(page, id);
      if (not(clicked)) {
        let r3 = {
          stopped: "row_not_found",
          id,
          skipped,
        };
        return r3;
      }
      let r = await facebook_messenger_chat_read(page);
      if (r.dialog) {
        let r4 = {
          stopped: "dialog",
          id,
          dialog: r.dialog,
          skipped,
        };
        return r4;
      }
      if (not(r.loaded)) {
        let r5 = {
          stopped: "not_loaded",
          id,
          skipped,
        };
        return r5;
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
      let r6 = {
        stopped: "found",
        id,
        file,
        profile_recorded: not_equal(profile, null),
        mine_seen: r.mine_seen,
        top: r.top,
        count: since.length,
        skipped,
      };
      return r6;
    }
    let r7 = {
      stopped: "none_left",
      skipped,
    };
    return r7;
  } finally {
    await o.browser.close();
  }
}
