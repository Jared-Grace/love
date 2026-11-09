import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_list_rows } from "./facebook_messenger_list_rows.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export async function facebook_messenger_waiting_ids() {
  "Reads the whole All list of chats, oldest first, and answers the conversation number of every chat whose last message is not yours - each one still waiting for an answer. No chat is opened, so none is marked seen. The rows themselves are kept privately in messenger_waiting.json.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ALL, NEVER UNREAD: the Unread list misses chats that were read and never answered (a row with no dot, showing 'Reply?'), and the human does not trust it to be complete.";
  "★ A ROW IS ANSWERED when the line under the name begins with 'You' - your words, your attachment, or a message you deleted.";
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  try {
    await sleep_human_pace();
    let rows = await facebook_messenger_list_rows(o.page, "All");
    function lambda(row) {
      let n = not(
        greater_than(row.lines.length, 1) && /^You\b/.test(row.lines[1]),
      );
      return n;
    }
    let waiting = rows.filter(lambda).reverse();
    let file_path = folder_private_path("messenger_waiting.json");
    await file_overwrite_json(file_path, {
      read_at: new Date().toISOString(),
      rows_total: rows.length,
      waiting,
    });
    function lambda2(row) {
      let r2 = row.id;
      return r2;
    }
    let r = {
      rows_total: rows.length,
      ids: waiting.map(lambda2),
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
